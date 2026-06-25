import { use } from 'react';
import styles from './client-echo.module.css';

type PageParams = {
	params: Promise<{ slug: string }>;
	searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default function Page({ params, searchParams }: PageParams) {
	const { slug } = use(params); // How does it work in client component??
	const filters = use(searchParams).filters;

	console.log('slug', slug);

	return (
		<h1 className={styles.title}>
			What you said slug: &quot;{slug}&quot; filters query params: &quot;{filters}&quot;
		</h1>
	);
}
