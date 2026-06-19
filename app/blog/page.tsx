import { Suspense } from 'react';
import Posts from './components/posts';
import { BlogPost } from './types';

export default async function Page() {
	const data = await fetch('https://api.vercel.app/blog');
	const posts: BlogPost[] = await data.json();

	// Still streams — promise is passed through, not awaited
	const serverData = fetch('https://api.vercel.app/blog').then(
		(res) => res.json() as Promise<BlogPost[]>,
	);

	return (
		<>
			<ul>
				{posts.map((post) => (
					<li key={post.id}>{post.title}</li>
				))}
			</ul>
			{/* stream */}
			<Suspense fallback={<div>Suspense Loading...</div>}>
				<Posts posts={serverData} />
			</Suspense>
		</>
	);
}
