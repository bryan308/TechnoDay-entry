import React from 'react';
import { cn } from '@/lib/utils';
import { accent100, accent200 } from '@/lib/font';
import { aboutItems } from '@/components/about/about';
import styles from '../../components/about/about.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function AboutPage() {
	return (
		<section className='animate-fadeIn opacity-0 py-[100px] px-10 overflow-y-auto overflow-x-hidden'>
			<h1 className={cn(accent100.className, 'page-title tracking-[2px]')}>ABOUT</h1>
			<div>
				<div className='text-center mx-auto px-[20%]'>
					<p className='text-[#c3c3c3]'>
						At the heart of our pursuit is a commitment to pioneering technological advancements.
						Embark on a journey with us, where each innovation contributes to shaping the future of
						technology. We invite you to explore the boundless possibilities and collaborate in
						crafting solutions that transcend expectations.
					</p>
				</div>
				<div className='flex flex-wrap justify-center my-10'>
					{aboutItems.map((item, i: number) => (
						<div
							key={i}
							className={styles.about_item}
						>
							<FontAwesomeIcon
								icon={item.icon}
								className='size-[5em] text-[#a98fffa7]'
							/>
							<div className={styles.about_item_text}>
								<h2 className={cn(accent200.className, 'text-2xl')}>{item.header}</h2>
								<p className='text-[#c3c3c3]'>{item.desc}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default AboutPage;
