'use server';

import { signInFormSchema } from "../validators";
import { signIn, signOut } from "@/auth";
import { isRedirectError } from "next/dist/client/components/redirect-error";
import { redirect } from "next/navigation";
import {hashSync} from 'bcrypt-ts-edge';
import {prisma} from '@/db/prisma';
import {signUpFormSchema} from "../validators";
import { formatError } from "../utils";


// Sign in the user with credentals

export async function signInWithCredentials(prevState: unknown, 
    formData: FormData){
      try {
        const user = signInFormSchema.parse({
            email: formData.get('email'),
            password: formData.get('password')
        });
    
        const result = await signIn('credentials', {
          ...user,
          redirect: false,
        });

        if (result.includes('error=')) {
          return {success: false, message: 'Invalid email or password'};
        }

        redirect('/');
        return {success: true, message: 'Signed in successfully'}
      } catch(error){
        if (isRedirectError(error)){
            throw error;
        }
        return {success: false, message: 'Invalid email or password'};
      }
}

// Sign user out 
export async function signOutUser() {
    await signOut();
}

// Sign up user
export async function signUpUser(prevState: unknown, formData: FormData){
  try{
    const user = signUpFormSchema.parse({
      name: formData.get('name'),
      email: formData.get('email'),
      password: formData.get('password'),
      confirmPassword: formData.get('confirmPassword'),
    });
    const plainPassword = user.password;
    user.password = hashSync(user.password, 10);
    await prisma.user.create({
      data:{
        name: user.name,
        email: user.email,
        password: user.password
      }
    })
    await signIn('credentials',{
      email: user.email,
      password: plainPassword,
    })
    return {success: true, message: 'User registered successfully'}
  } catch(error){
    if (isRedirectError(error)){
            throw error;
        }
        return {success: false, message: formatError(error)};
      
  }
}