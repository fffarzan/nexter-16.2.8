const USERS = [
	{ id: 1, name: 'Alice' },
	{ id: 2, name: 'Bob' },
];

export async function GET() {
	return new Response(JSON.stringify(USERS), {
		status: 200,
		headers: { 'Content-Type': 'application/json' },
	});
}

export async function POST(request: Request) {
	const body = await request.json();
	const { name } = body;

	const newUser = { id: Date.now(), name };

	return new Response(JSON.stringify(newUser), {
		status: 201,
		headers: { 'Content-Type': 'application/json' },
	});
}
