import { Metadata } from 'next';
import { cn } from '@/lib/utils';
import Circle from '@/components/shared/circle';
import { accent100, accent200 } from '@/lib/font';
import { aboutItems } from '@/components/about/about';
import styles from '../../components/about/about.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const metadata: Metadata = {
	title: 'About',
};

function AboutPage() {
	return (
		<section className='relative animate-fadeIn opacity-0 py-[100px] overflow-y-auto overflow-x-hidden px-4 lg:px-10'>
			<Circle />
			<h1 className={cn(accent100.className, 'page-title text-4xl lg:text-5xl tracking-[2px]')}>
				ABOUT
			</h1>
			<div>
				<div className='lg:text-center mx-auto lg:px-[20%]'>
					<p className='text-[#c3c3c3]'>
						At the heart of our pursuit is a commitment to pioneering technological advancements.
						Embark on a journey with us, where each innovation contributes to shaping the future of
						technology. We invite you to explore the boundless possibilities and collaborate in
						crafting solutions that transcend expectations.
					</p>
				</div>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center my-10'>
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
