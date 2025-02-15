'use client';

import { Paper } from '@mui/material';
import { SignInButton } from './SignInButton';
import { SignOutButton } from './SignOutButton';

export function AuthController() {
	return (
		<Paper sx={{ position: 'absolute', top: '0', right: '0' }}>
			<SignInButton />
			<SignOutButton />
		</Paper>
	);
}
