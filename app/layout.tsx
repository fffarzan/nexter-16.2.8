import type { Metadata } from 'next';
import './globals.css';
import { QueryProvider } from './providers/query-provider';

export const metadata: Metadata = {
	title: 'Nexter',
	description: 'Next Hecker',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="h-full antialiased">
			<QueryProvider>
				<body className="min-h-full flex flex-col">{children}</body>
			</QueryProvider>
		</html>
	);
}
