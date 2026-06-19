'use client';

import { use } from 'react';
import { BlogPost } from '../types';

export type PostsProps = {
	posts: Promise<BlogPost[]>;
};

export default function Posts({ posts }: PostsProps) {
	// streams data from server (server component) to client (client component)
	const allPosts = use(posts);

	return (
		<ul>
			{allPosts.map((post) => (
				<li key={post.id}>{post.title}</li>
			))}
		</ul>
	);
}
