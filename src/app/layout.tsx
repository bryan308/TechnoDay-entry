import './globals.css';
import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import Navbar from '@/components/shared/nav';
import Footer from '@/components/shared/footer';

const poppins = Poppins({ subsets: ['latin'], weight: ['200', '300', '400'] });

export const metadata: Metadata = {
	title: {
		default: 'TechnOdyssey',
		template: 'TechnOdyssey | %s',
	},
	metadataBase: new URL('https://technodyssey.vercel.app'),
	description:
		'Discover the latest in tech on Techno Odyssey, elevate your knowledge with fresh insights and stay ahead in the ever-evolving digital world',
	openGraph: {
		title: 'TechnOdyssey',
		description:
			'Discover the latest in tech on Techno Odyssey, elevate your knowledge with fresh insights and stay ahead in the ever-evolving digital world',
		// images: [`https://cdrcangulo.vercel.app/metaimg.jpg`],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body
				className={cn(poppins.className, 'bg-[#030015] text-white min-h-screen overflow-x-hidden')}
			>
				<video
					className='animate-fadeIn [--duration:3000ms] block absolute -top-[29em] md:-top-[30em] h-[1100px] w-full rotate-180 -z-10'
					src='/vid/blackhole.webm'
					playsInline
					autoPlay
					muted
					loop
				></video>
				<Navbar />
				{/* <div className='circle-element circle-1 left-1/4 bottom-2/4 lg:bottom-40 lg:left-40'></div>
				<div className='circle-element circle-2 right-1/4 bottom-2/4 lg:bottom-40 lg:right-60'></div> */}
				{children}
				<Footer />
			</body>
		</html>
	);
}
