'use client';

import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import styles from './nav.module.css';

type TLinks = { href: string; text: string }[];

const links: TLinks = [
	{ href: '/', text: 'Home' },
	{ href: '/articles', text: 'Articles' },
	{ href: '/innovations', text: 'Innovations' },
	{ href: '/about', text: 'About' },
	{ href: '/reach', text: 'Reach Us' },
];

function Navbar() {
	const [sidebarOpen, setSidebarOpen] = useState(false);
	const pathname = usePathname();

	return (
		<>
			<nav
				className={cn(
					'w-full py-4 px-4 lg:px-10',
					'md:flex md:items-center md:justify-between',
					'fixed top-0 bg-[#03001417] backdrop-blur-md z-50',
					styles.header,
					sidebarOpen ? 'h-96 md:h-[75px]' : 'md:h-[75px]'
				)}
			>
				<div className='flex items-center justify-between'>
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
							styles.toggle_button,
							'p-2 w-10 h-10',
							'md:hidden inline-flex items-center justify-center text-sm rounded-lg',
							'text-neutral-200 focus:outline-none focus:ring-2 focus:ring-gray-600'
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
				</div>
				<div className={`md:flex mt-8 md:mt-0 ${sidebarOpen ? 'block' : 'hidden'}`}>
					{links.map((l, i: number) => {
						let style: string = 'text-[#e1a9ff] border border-solid border-[#a6a5a525]';

						const isActive = pathname === l.href;

						isActive
							? (style =
									'text-white border border-solid border-[#c8c8c862] shadow-[0_0_4px_2px_#c280ff44]')
							: '';

						return (
							<div
								key={i}
								className={styles.nav_link}
							>
								<Link
									onClick={() => setSidebarOpen(false)}
									className={`${style} ${
										i === 0
											? 'md:rounded-tl-xl md:rounded-bl-xl'
											: i === 4
											? 'md:rounded-tr-xl md:rounded-br-xl'
											: ''
									} uppercase md:capitalize md:inline block text-center rounded-xl md:rounded-none my-4 md:m-0`}
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
