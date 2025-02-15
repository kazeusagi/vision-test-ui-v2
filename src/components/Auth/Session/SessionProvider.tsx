'use client';

import { sessionAtom } from '@/utils/atoms';
import { useSetAtom } from 'jotai';
import { getSession } from 'next-auth/react';
import { useEffect } from 'react';

export function SessionProvider() {
	const setSession = useSetAtom(sessionAtom);

	useEffect(() => {
		init();
	}, []);

	return <></>;

	// sessionの取得とatomの更新
	async function init() {
		const session = await getSession();
		setSession(session);
		console.log(session);
	}
}
