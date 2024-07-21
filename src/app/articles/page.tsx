import Image from 'next/image';
import { cn } from '@/lib/utils';
import { accent100, accent200 } from '@/lib/font';
import { articles } from '@/components/articles/articles';
import styles from '../../components/articles/article.module.css';
import ImageRender from '@/components/shared/image-render';

function ArticlesPage() {
	return (
		<>
			<section className='animate-fadeIn opacity-0 relative overflow-y-auto overflwo-x-hidden py-[100px] px-10'>
				<h1 className={cn(accent100.className, 'page-title tracking-[2px]')}>ARTICLES</h1>
				<div className='flex flex-wrap justify-center m-5 gap-[40px]'>
					{articles.map((a, i: number) => (
						<div
							key={i}
							className={cn(
								styles.article_card,
								'min-h-[500px]',
								'rounded-[10px] backdrop-blur-lg',
								'border border-solid border-[#a6a5a525]'
							)}
						>
							<div className='h-[250px]'>
								<ImageRender
									src={`/images/sources/${a.thumbnail}`}
									alt={`${a.title}`}
									width={1360}
									height={907}
									className='h-full w-full object-cover rounded-tl-[10px] rouned-tr-[10px]'
								/>
							</div>
							<div className='p-5 pt-0'>
								<h3 className={cn(accent200.className, styles.article_title)}>{a.title}</h3>
								<p className='text-[#c3c3c3]'>{a.paragraph}</p>
								<div className='flex items-center my-4 gap-4'>
									{a.avatar && (
										<ImageRender
											src={`/images/sources/${a.avatar}`}
											className='rounded-full'
											alt={`${a.name}`}
											height={50}
											width={50}
										/>
									)}
									<div>
										<p>{a.name}</p>
										<span className='text-[#c3c3c3]'>{a.date}</span>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</section>
		</>
	);
}

export default ArticlesPage;
