'use client';

import { EllipsisTypography } from '@/components/Elements/Typography';
import { sessionAtom } from '@/utils/atoms';
import { Avatar, Box, IconButton } from '@mui/material';
import { useAtomValue } from 'jotai';
import { SignInButton } from './SignInButton';

export function AuthController() {
	const session = useAtomValue(sessionAtom);

	console.log(session);

	return (
		<>
			{!session ? (
				// セッションがない場合
				// サインインボタンのみ表示
				<SignInButton />
			) : (
				// セッションがある場合
				// ユーザー情報とサインアウトボタンを表示
				<Box display='flex' alignItems='center' gap={1}>
					<IconButton size='small'>
						<Avatar sx={{ width: '30px', height: '30px' }} src={session.user?.image || ''} />
					</IconButton>
					<EllipsisTypography>
						{session.user?.name}aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
					</EllipsisTypography>
				</Box>
			)}
		</>
	);
}
