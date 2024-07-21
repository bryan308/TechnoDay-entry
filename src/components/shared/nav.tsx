'use client';

import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import styles from './nav.module.css';

type TLinks = { href: string; text: string }[];

const links: TLinks = [
	{ href: '/', text: 'Home' },
	{ href: '/articles', text: 'Articles' },
	{ href: '/innovations', text: 'Innovations' },
	{ href: '/about', text: 'About' },
	{ href: '/reach', text: 'Reach' },
];

function Navbar() {
	const [sidebarOpen, setSidebarOpen] = useState(false);

	return (
		<>
			<nav
				className={cn(
					'h-[75px] w-full py-4 px-4 lg:px-10',
					'flex items-center justify-between',
					'fixed top-0 bg-[#03001417] backdrop-blur-md z-50',
					styles.header
				)}
			>
				<div className='relative flex items-center justify-center size-[50px]'>
					<Image
						className='absolute top-0 height-full select-none'
						src='/images/logo.png'
						alt='logo'
						width={50}
						height={50}
						priority
					/>
				</div>
				<button
					onClick={() => setSidebarOpen(!sidebarOpen)}
					type='button'
					className={cn(
						'p-2 w-10 h-10',
						'md:hidden inline-flex items-center justify-center text-sm text-gray-500 rounded-lg',
						'text-gray-400 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600'
					)}
					aria-controls='navbar-hamburger'
					aria-expanded='false'
				>
					<span className='sr-only'>Open menu</span>
					<svg
						className='w-5 h-5'
						aria-hidden='true'
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 17 14'
					>
						<path
							stroke='currentColor'
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={2}
							d='M1 1h15M1 7h15M1 13h15'
						/>
					</svg>
				</button>
				<div className={cn('md:flex', sidebarOpen ? 'block' : 'hidden')}>
					{links.map((l, i: number) => {
						let style: string = '';

						i === 0 && (style = 'md:rounded-tl-xl md:rounded-bl-xl');
						i === 4 && (style = 'md:rounded-tr-xl md:rounded-br-xl');

						return (
							<div
								key={i}
								className={styles.nav_link}
							>
								<Link
									className={`${style}`}
									href={`${l.href}`}
								>
									{l.text}
								</Link>
							</div>
						);
					})}
				</div>
			</nav>
		</>
	);
}

export default Navbar;
