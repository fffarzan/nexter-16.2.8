import { use } from 'react';

type PageParams = {
	params: Promise<{ slug: string }>;
	searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default function Page({ params, searchParams }: PageParams) {
	const { slug } = use(params); // How does it work in client component??
	const filters = use(searchParams).filters;

	console.log('slug', slug);

	return (
		<h1>
			What you said slug: &quot;{slug}&quot; filters query params: &quot;{filters}&quot;
		</h1>
	);
}
