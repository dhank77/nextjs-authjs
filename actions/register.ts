"use server"

import bcrypt from "bcryptjs";
import { RegisterSchema } from "@/schema";
import * as z from "zod";
import { db } from '@/lib/db'
import { getUserbyEmail } from "@/data/users";
import { signIn } from "@/auth";
import { AuthError } from "next-auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

export const register = async (values : z.infer<typeof RegisterSchema>) => {
    const validate = RegisterSchema.safeParse(values);

    if(!validate.success){
        return { error : "Invalid fields"}
    }

    const { name, email, password } = validate.data;
    const hashPassword = await bcrypt.hash(password, 10);

    const existingUser = await getUserbyEmail(email);

    if(existingUser){
        return { error : "Email is already existing"}
    }

    await db.user.create({
        data : {
            email, 
            name, 
            password : hashPassword,
        }
    })

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