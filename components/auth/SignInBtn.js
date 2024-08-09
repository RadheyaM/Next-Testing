'use client'

import GoogleIcon from '@mui/icons-material/Google';
import { signIn } from 'next-auth/react';

export default function SignInBtn () {
    return (
        <button onClick={() => signIn("google")} className='flex items-center shadow-xl rounded-lg p-3'>
            <GoogleIcon /> oogle Sign In
        </button>
    )
}