'use client';

import { EllipsisTypography } from '@/components/Elements';
import { sessionAtom } from '@/utils/atoms';
import { Avatar, Box, Button, Popover } from '@mui/material';
import { useAtomValue } from 'jotai';
import { useRef, useState } from 'react';
import { SignInButton } from './SignInButton';
import { SignOutButton } from './SignOutButton';

export function AuthContainer() {
	const anchorRef = useRef<HTMLButtonElement | null>(null);

	const session = useAtomValue(sessionAtom);

	const [open, setOpen] = useState(false);

	return (
		<>
			{!session ? (
				// セッションがない場合
				// サインインボタンのみ表示
				<Box flexGrow={1}>
					<SignInButton />
				</Box>
			) : (
				// セッションがある場合
				// ユーザー情報とサインアウトボタンを表示
				<>
					<Button
						size='small'
						color='inherit'
						ref={anchorRef}
						onClick={toggle}
						startIcon={
							<Avatar sx={{ width: '30px', height: '30px' }} src={session.user?.image || ''} />
						}
						sx={{ width: '100%', justifyContent: 'flex-start' }}
					>
						<EllipsisTypography>{session.user?.name}</EllipsisTypography>
					</Button>

					{/* サインアウトボタンのポップアップ */}
					<Popover
						open={open}
						onClose={toggle}
						anchorEl={anchorRef.current}
						anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
					>
						<SignOutButton />
					</Popover>
				</>
			)}
		</>
	);

	function toggle() {
		setOpen((prev) => !prev);
	}
}
