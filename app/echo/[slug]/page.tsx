// This can be used for the type but using `PageProps` is way better.
// type PageParams = {
// 	params: Promise<{ slug: string }>;
// 	searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
// };

export default async function Page({ params, searchParams }: PageProps<'/echo/[slug]'>) {
	const { slug } = await params;
	const filters = (await searchParams).filters;

	return (
		<h1>
			What you said in slug: &quot;{slug}&quot; by filters query params: &quot;{filters}&quot;
		</h1>
	);
}
