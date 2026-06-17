import { withAuth } from '@/lib/with-auth';

async function secretGET() {
	return new Response(JSON.stringify({ secret: 'Here be dragons' }), {
		headers: { 'Content-Type': 'application/json' },
	});
}

export const GET = withAuth(secretGET);
