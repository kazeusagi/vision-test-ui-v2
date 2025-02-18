'use client';

import { loadingStatusAtom } from '@/utils/atoms';
import { Google } from '@mui/icons-material';
import { Button } from '@mui/material';
import { useSetAtom } from 'jotai';
import { signIn } from 'next-auth/react';
import { toast } from 'react-toastify';

export function SignInButton() {
	const setLoadingStatus = useSetAtom(loadingStatusAtom);

	return (
		<Button startIcon={<Google />} variant='outlined' onClick={onClick} fullWidth>
			Sign in with Google
		</Button>
	);

	function onClick() {
		try {
			setLoadingStatus('loading');
			signIn('google');
		} catch (error) {
			if (error instanceof Error) {
				toast.error(error.message);
			}
		}
	}
}
