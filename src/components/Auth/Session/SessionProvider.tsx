'use client';

import { sessionAtom } from '@/utils/atoms';
import { useSetAtom } from 'jotai';
import type { Session } from 'next-auth';
import { useEffect } from 'react';

type Props = {
	session: Session | null;
};

export function SessionProvider({ session }: Props) {
	const setSession = useSetAtom(sessionAtom);

	useEffect(() => {
		setSession(session);
		console.log(session);
	}, [session]);

	return <></>;
}
