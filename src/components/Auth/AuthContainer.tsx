'use client';

import { Box } from '@mui/material';
import { AuthController } from './Controller';
import { SessionProvider } from './Session';

export function AuthContainer() {
	return (
		<Box>
			<SessionProvider />
			<AuthController />
		</Box>
	);
}
