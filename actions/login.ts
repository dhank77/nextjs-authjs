"use server"
import { signIn } from "@/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { LoginSchema } from "@/schema";
import { AuthError } from "next-auth";
import * as z from "zod";

export const login = async (values : z.infer<typeof LoginSchema>) => {
    const validate = LoginSchema.safeParse(values);

    if(!validate.success){
        return { error : "Invalid fields"}
    }

    const { email, password } = validate.data;

    try {
        await signIn("credentials", {
            email,
            password,
            redirectTo: DEFAULT_LOGIN_REDIRECT
        })
    } catch (error) {
        if(error instanceof AuthError){
            switch(error.type){
                case "CredentialsSignin" :
                    return  { error : "Invalid credentials"};
                default :
                    return  { error : "Something wrong"};
            }
        }
        throw error;
    }

}