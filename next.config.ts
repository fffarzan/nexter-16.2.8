import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	// async rewrites() {
	// 	return [
	// 		{
	// 			source: '/docs/:slug*',
	// 			destination: '/docs/md/:slug*',
	// 			has: [
	// 				{
	// 					type: 'header',
	// 					key: 'accept',
	// 					value: '(.*)text/markdown(.*)',
	// 				},
	// 			],
	// 		},
	// 	];
	// },
};

export default nextConfig;
