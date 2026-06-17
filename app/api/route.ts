import { submit } from '@/lib/submit';

export async function POST(request: Request) {
	try {
		await submit(request);

		return new Response(null, { status: 204 });
	} catch (error) {
		const message = err instanceof Error ? err.message : 'Unexpected error';

		return new Response(message, { status: 500 });
	}
}
