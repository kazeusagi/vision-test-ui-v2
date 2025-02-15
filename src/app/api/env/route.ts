import type { NextRequest } from 'next/server';

export function GET(request: NextRequest) {
	const searchParams = request.nextUrl.searchParams;
	const name = searchParams.get('name') || '';

	return new Response(process.env[name], {
		headers: {
			'content-type': 'text/plain',
		},
	});
}
