'use server';

import { Box } from '@mui/material';
import { AuthController } from './Controller';
import { SessionManager } from './Session';

export async function AuthContainer() {
	return (
		<Box>
			{/* Sessionの取得はサーバーサイドでしか動作しない */}
			<SessionManager />

			{/* 認証のコントロールはクライアントサイドで行う */}
			<AuthController />
		</Box>
	);
}
