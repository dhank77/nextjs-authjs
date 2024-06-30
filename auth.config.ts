import Credentials from "next-auth/providers/credentials"
import type { NextAuthConfig } from "next-auth"
import { LoginSchema } from "@/schema"
import { getUserbyEmail } from "./data/users";
import bcrypt from "bcryptjs";

export default { providers: [
    Credentials({
        async authorize(credentials) {
            const validate = LoginSchema.safeParse(credentials);

            if(validate.success){
                const { email, password } = validate.data;

                const user = await getUserbyEmail(email);
                if(!user || !user.password) return null;

                const passwordMatch = await bcrypt.compare(password, user.password);

                if(passwordMatch) return user;
            }

            return null;
        }
    })
] } satisfies NextAuthConfig