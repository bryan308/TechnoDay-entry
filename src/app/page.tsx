import Image from 'next/image';
import { cn } from '@/lib/utils';
import { accent100 } from '@/lib/font';
import styles from '../components/home/home.module.css';
import ImageRender from '@/components/shared/image-render';

export default function Home() {
	return (
		<section className='animate-fadeIn opacity-0 h-dvh overflow-hidden px-4 lg:px-[30px]'>
			<div className='flex flex-col-reverse lg:flex-row min-h-dvh items-center justify-center'>
				<div className='w-full lg:w-2/4 lg:mx-5'>
					<h1
						className={cn(
							accent100.className,
							styles.text_title,
							'text-4xl md:text-7xl font-bold leading-normal lg:mb-2',
							'text-center lg:text-left'
						)}
					>
						Techno Odyssey
					</h1>
					<p className={cn(styles.sub_title, 'text-lg md:text-2xl text-center lg:text-left')}>
						Embrace the beat of the future
					</p>
					<p
						className={cn(
							styles.sub_text,
							'w-full px-8 lg:px-0 lg:max-w-[600px]',
							'text-sm md:text-base text-center lg:text-left text-[#c3c3c3]'
						)}
					>
						Discover the latest in tech on Techno Odyssey, elevate your knowledge with fresh
						insights and stay ahead in the ever-evolving digital world
					</p>
				</div>
				<div className={cn('w-full lg:w-2/4 mx-auto')}>
					<ImageRender
						src='/images/object2.png'
						alt='Hero Image'
						width={888}
						height={500}
						className='animate-float'
					/>
				</div>
			</div>
		</section>
	);
}
