import type { Metadata } from 'next';
import './globals.css';
import { QueryProvider } from './common/providers/query-provider';
import { Geist } from 'next/font/google';
import localFont from 'next/font/local';

// google font
const geist = Geist({
	weight: '400',
	subsets: ['latin'],
});

// local font
const roboto = localFont({
	src: [
		{
			path: './fonts/Roboto-Regular.ttf',
			weight: '400',
			style: 'normal',
		},
		{
			path: './fonts/Roboto-Light.ttf',
			weight: '300',
			style: 'normal',
		},
		{
			path: './fonts/Roboto-Thin.ttf',
			weight: '200',
			style: 'normal',
		},
	],
});

export const metadata: Metadata = {
	title: 'Nexter',
	description: 'Next Hecker',
};

type RootLayoutPorps = Readonly<{
	children: React.ReactNode;
}>;

// Root layout is required and must contain `html` and `body` tags.
export default function RootLayout({ children }: RootLayoutPorps) {
	return (
		<html lang="en" className={geist.className}>
			<QueryProvider>
				<body className={roboto.className}>{children}</body>
			</QueryProvider>
		</html>
	);
}
