'use client';

import { Google } from '@mui/icons-material';
import { Button } from '@mui/material';
import { signIn } from 'next-auth/react';
import { toast } from 'react-toastify';

export function SignInButton() {
	return (
		<Button startIcon={<Google />} variant='outlined' onClick={onClick}>
			Sign in with Google
		</Button>
	);

	function onClick() {
		try {
			signIn('google');
		} catch (error) {
			if (error instanceof Error) {
				toast.error(error.message);
			}
		}
	}
}
