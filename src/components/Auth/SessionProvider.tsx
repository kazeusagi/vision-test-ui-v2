'use client';

import { sessionAtom } from '@/utils/atoms';
import { useSetAtom } from 'jotai';
import { getSession } from 'next-auth/react';
import { useEffect } from 'react';

// セッションの情報をatomに保存
// また、サインインレスポンス等がある場合は処理を行う
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
