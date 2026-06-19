import type { Metadata } from 'next';
import './globals.css';
import { QueryProvider } from './common/providers/query-provider';

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
		<html lang="en">
			<QueryProvider>
				<body>{children}</body>
			</QueryProvider>
		</html>
	);
}
