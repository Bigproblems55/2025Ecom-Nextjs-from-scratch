'use client'
import { signUpDefaultValues } from "@/lib/constants";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { signUpUser } from "@/lib/actions/user.actions";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { useSearchParams } from "next/navigation"; 

 function SignUpButton (){
        const { pending } = useFormStatus();

        return (
            <Button type='submit' disabled={pending} 
            className='w-full '
            nativeButton={true}
            variant='default'>
                {pending ? 'Submitting...' : 'Sign Up'}
            </Button>
        )
    }
const SignUpForm = () => {
    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get('callbackUrl') || '/';
    const [data,action] = useActionState(signUpUser,{
        success: false,
        message: ''
    })
    
    

    return (
        <form action={action}>
            <input type="hidden" name="callbackUrl" value={callbackUrl} />
        
        <div className="space-y-6">
            <Label htmlFor='name'>Name</Label>
            <Input id='name' 
            name='name' 
            type='text' 
            required 
            autoComplete='name' 
            defaultValue={signUpDefaultValues.name}
            />
        </div>
        <div className="space-y-6">
            <Label htmlFor='email'>Email</Label>
            <Input id='email' 
            name='email' 
            type='email' 
            required 
            autoComplete='email' 
            defaultValue={signUpDefaultValues.email}
            />
        </div>
        <div className="space-y-6">
            <Label htmlFor='password'>Password</Label>
            <Input id='password' 
            name='password' 
            type='password' 
            required 
            autoComplete='password' 
            defaultValue={signUpDefaultValues.password}
            />
        </div>
        <div className="space-y-6">
            <Label htmlFor='confirmPassword'>Confirm Password</Label>
            <Input id='confirmPassword' 
            name='confirmPassword' 
            type='password' 
            required 
            autoComplete='confirmPassword' 
            defaultValue={signUpDefaultValues.confirmPassword}
            />
        </div>
        <div>
            <SignUpButton />
        </div>
        {data && !data.success && (
            <div className="text-center text-destructive">
                {data.message}
            </div>
        )}
        <div className="text-sm text-center text-muted-foreground">
            Already have an account?{' '}
            <Link href='/sign-up'
                target='_self'
                className='link'
            >Sign Up</Link>
        </div>

    </form>
    );
}
 
export default SignUpForm;