export async function GET(request: Request) {
	const rssResponse = await fetch('https://hnrss.org/frontpage');
	const rssData = await rssResponse.json();

	const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
		<rss version="2.0">
			<channel>
				<title>${rssData.title}</title>
				<description>${rssData.description}</description>
				<link>${rssData.link}</link>
				<copyright>${rssData.copyright}</copyright>
				${rssData.items.map((item) => {
					return `<item>
							<title>${item.title}</title>
							<description>${item.description}</description>
							<link>${item.link}</link>
							<pubDate>${item.publishDate}</pubDate>
							<guid isPermaLink="false">${item.guid}</guid>
						</item>`;
				})}
			</channel>
		</rss>`;
	const headers = new Headers({ 'content-type': 'application/xml' });

	return new Response(rssFeed, { headers });
}
