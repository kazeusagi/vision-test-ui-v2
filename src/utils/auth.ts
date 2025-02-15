import NextAuth from 'next-auth';
import Google from 'next-auth/providers/google';

export const { handlers, signIn, signOut, auth } = NextAuth({
	providers: [Google],
	secret: process.env.AUTH_SECRET,
});

// sessionの取得
export async function getSession() {
	const response = await fetch('/api/auth/session');
	const json = await response.json();
	console.log(json);
}
