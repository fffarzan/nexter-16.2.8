import { Suspense } from 'react';
import Qouter from '../components/qouter';

export type Qoute = {
	id: number;
	quote: string;
	author: string;
};

export type QoutePageProps = {
	params: Promise<{ username: string }>;
};

// Sequential data fetching
export default async function Page({ params }: QoutePageProps) {
	const { username } = await params;

	const data = await fetch(`https://dummyjson.com/quotes/${username}`);
	const qoute: Qoute = await data.json();

	return (
		<>
			<h1>{qoute.quote}</h1>
			<h4>Real Name: {qoute.author}</h4>
			<Suspense fallback={<div>Suspense Loading...</div>}>
				Fake Name: <Qouter qouterId={qoute.id} />
			</Suspense>
		</>
	);
}
