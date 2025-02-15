'use server';

import { auth } from '@/utils/auth';
import { SessionProvider } from './SessionProvider';

export async function SessionManager() {
	const session = await auth(); // サーバーサイドでしか動かない
	return (
		<>
			<SessionProvider session={session} />
		</>
	);
}
