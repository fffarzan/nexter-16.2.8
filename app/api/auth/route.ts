import { NextRequest } from 'next/server';
import { cookies, headers } from 'next/headers';

export async function GET(request: NextRequest) {
	// Using 'next headers' helpers
	const cookieStore = await cookies();
	const token = cookieStore.get('token');

	const headersList = await headers();
	const referer = headersList.get('referer');

	// Using the standard Web APIs
	const userAgent = request.headers.get('user-agent');

	return new Response(JSON.stringify({ token, referer, userAgent }), {
		headers: { 'Content-Type': 'application/json' },
	});
}
