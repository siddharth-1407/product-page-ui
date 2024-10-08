import type { Metadata } from 'next';
import { Sora } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Header/Navbar';
import NavbarResponsive from '@/components/Header/NavbarResponsive';
import Footer from '@/components/Footer';

const sora = Sora({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={sora.className}>
				<Navbar />
				<NavbarResponsive />
				{children}
				<Footer />
			</body>
		</html>
	);
}
