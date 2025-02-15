'use client';

import { sessionAtom } from '@/utils/atoms';
import { Paper, Typography } from '@mui/material';
import { useAtomValue } from 'jotai';
import { SignInButton } from './SignInButton';
import { SignOutButton } from './SignOutButton';

export function AuthController() {
	const session = useAtomValue(sessionAtom);

	return (
		<Paper sx={{ position: 'absolute', top: '0', right: '0' }}>
			{session && <Typography>{`こんにちわ！${session.user?.name}さん！`}</Typography>}
			<SignInButton />
			<SignOutButton />
		</Paper>
	);
}
