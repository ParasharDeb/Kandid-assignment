"use server";
import { auth } from "@/lib/auth";

export const signIn = async (email: string, password: string) => {
    await auth.api.signInEmail({
        body: {
            email,
            password
        }
    });
};

export const signUp = async (
    email: string,
    password: string,
    firstname?: string,
    lastname?: string
) => {
    await auth.api.signUpEmail({
        body: {
            name:firstname||" ",
            email,
            password
        }
    });
};