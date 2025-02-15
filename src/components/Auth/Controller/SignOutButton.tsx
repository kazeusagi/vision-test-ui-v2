'use client';

import { Button } from '@mui/material';
import { signOut } from 'next-auth/react';
import { toast } from 'react-toastify';

export function SignOutButton() {
	return <Button onClick={onClick}>Sign Out</Button>;

	function onClick() {
		try {
			signOut();
		} catch (error) {
			if (error instanceof Error) {
				toast.error(error.message);
			}
		}
	}
}
