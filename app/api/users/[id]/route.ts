import { NextRequest } from 'next/server';

export type GetUserByIdParams = {
	id: string;
};

export type DeleteUserByIdParams = {
	id: string;
};

export async function GET(
	request: NextRequest,
	{ params }: { params: Promise<GetUserByIdParams> },
) {
	const id = (await params).id;

	return new Response(JSON.stringify({ id, name: `User ${id}` }), {
		status: 200,
		headers: { 'Content-Type': 'application/json' },
	});
}

export async function DELETE(
	request: NextRequest,
	{ params }: { params: Promise<DeleteUserByIdParams> },
) {
	const id = (await params).id;

	return new Response(JSON.stringify({ id }), { status: 204 });
}
