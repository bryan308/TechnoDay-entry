import { cn } from '@/lib/utils';
import { accent100 } from '@/lib/font';
import { innovations } from '@/components/inno/inno';
import styles from '../../components/inno/inno.module.css';
import ImageRender from '@/components/shared/image-render';

function InnoPage() {
	return (
		<section className='animate-fadeIn opacity-0 relative overflow-y-auto overflwo-x-hidden py-[100px] px-4 lg:px-10'>
			<h1 className={cn(accent100.className, 'page-title text-4xl lg:text-5xl tracking-[2px]')}>
				INNOVATIONS
			</h1>
			<div className='flex h-auto items-center justify-center flex-wrap w-full my-5 gap-[40px]'>
				{innovations.map((inn, i: number) => (
					<div
						key={i}
						className={cn(styles.inn_card, 'flex-col-reverse items-center lg:flex-row')}
					>
						<div>
							<h3 className={styles.inn_title}>{inn.title}</h3>
							<p className='text-[#c3c3c3]'>{inn.desc}</p>
						</div>
						<div className={styles.inn_image}>
							<ImageRender
								src={`${inn.image}`}
								alt={inn.alt}
								width={200}
								height={200}
								priority
								className='animate-float w-[200px] h-[200px]'
							/>
							{/* <div className={cn('animate-floatingRotate', styles.grad_circle)}></div> */}
							<div className={styles.grad_circle}></div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}

export default InnoPage;
