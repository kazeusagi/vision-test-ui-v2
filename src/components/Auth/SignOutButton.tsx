'use client';

import { loadingStatusAtom } from '@/utils/atoms';
import { Button } from '@mui/material';
import { useSetAtom } from 'jotai';
import { signOut } from 'next-auth/react';
import { toast } from 'react-toastify';

export function SignOutButton() {
	const setLoadingStatus = useSetAtom(loadingStatusAtom);

	return (
		<Button variant='outlined' onClick={onClick} fullWidth>
			Sign Out
		</Button>
	);

	function onClick() {
		try {
			setLoadingStatus('loading');
			signOut();
		} catch (error) {
			if (error instanceof Error) {
				toast.error(error.message);
			}
		}
	}
}
