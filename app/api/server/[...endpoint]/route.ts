import axios, { AxiosError } from 'axios';
import { NextRequest, NextResponse } from 'next/server';

async function handler(request: NextRequest): Promise<NextResponse> {
	const { pathname, search } = request.nextUrl;
	const endpoint = `${pathname.replace('/api/server', '')}${search}`;

	const apiUrl = process.env.API_URL;
	if (!apiUrl) {
		return NextResponse.json(
			{ error: 'API_URL environment variable is not set' },
			{ status: 500 },
		);
	}

	if (!endpoint) {
		return NextResponse.json({ data: 'Api Not Found' }, { status: 404 });
	}

	const headers = {
		'Content-Type': 'application/json',
	};

	let body = undefined;
	if (request.method !== 'GET' && request.method !== 'HEAD') {
		try {
			body = await request.json();
		} catch (error) {
			console.error('error is parsing body:', error);
			// Use undefined if body is missing or cannot be parsed
		}
	}

	const payload = {
		baseURL: apiUrl,
		url: endpoint,
		method: request.method,
		data: body,
		headers: headers,
		validateStatus: () => true,
	};

	try {
		const { data, status } = await axios.request(payload);

		return NextResponse.json(data, {
			status: status,
			headers: {
				// caching
				'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=120',
			},
		});
	} catch (e) {
		const { response, message } = e as AxiosError;
		const errorMessage = response?.data || message || 'Internal Server Error';

		return NextResponse.json(
			{ error: errorMessage },
			{
				status: response?.status || 500,
			},
		);
	}
}

// All API endpoints are captured in a single handler using the `[…endpoint]` syntax, eliminating the need for individual route handlers
export { handler as GET, handler as POST, handler as PUT, handler as DELETE };
