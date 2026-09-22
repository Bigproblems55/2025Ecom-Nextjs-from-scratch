'use server';

import { signInFormSchema } from "../validators";
import { signIn, signOut } from "@/auth";
import { isRedirectError } from "next/dist/client/components/redirect-error";
import { redirect } from "next/navigation";


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