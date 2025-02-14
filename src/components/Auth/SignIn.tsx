'use client';

import { Button } from '@mui/material';
import { signIn } from 'next-auth/react';
import { toast } from 'react-toastify';

export function SignIn() {
	return <Button onClick={onClick}>Google</Button>;

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
