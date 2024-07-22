import { cn } from '@/lib/utils';
import { accent100 } from '@/lib/font';
import styles from '../../components/reach/reach.module.css';
import ImageRender from '@/components/shared/image-render';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Reach Us',
};

function ReachPage() {
	return (
		<section className='animate-fadeIn opacity-0 py-[100px] overflow-y-auto overflow-x-hidden px-4 lg:px-10'>
			<h1 className={cn(accent100.className, 'page-title text-4xl lg:text-5xl tracking-[2px]')}>
				REACH US
			</h1>
			<div className='flex my-10 w-full h-full'>
				<div className='w-[30%] hidden lg:flex items-center justify-center'>
					<ImageRender
						src='/images/contact.png'
						alt='Envelope Icon'
						width={350}
						height={350}
					/>
				</div>
				<div className='w-full lg:w-[70%]'>
					<form className='w-full lg:w-[80%] mx-auto'>
						<h2 className='text-3xl lg:text-5xl font-bold'>For more info</h2>
						<p className='text-[#c3c3c3] text-base font-light'>
							We invite you to establish a connection with us by taking a moment to send us a
							message. Your thoughts and inquiries are important to us, and we look forward to
							hearing from you
						</p>
						<div className='flex flex-col my-2'>
							<label htmlFor='name'>Name</label>
							<input
								type='text'
								id='name'
								spellCheck='false'
								autoComplete='off'
								className={cn(styles.input, 'text-[#e2e2e2]')}
								// className='text-[#e2e2e2]'
							/>
						</div>
						<div className='flex flex-col my-2'>
							<label htmlFor='email'>Email</label>
							<input
								type='email'
								id='email'
								autoComplete='off'
								className={cn(styles.input)}
							/>
						</div>
						<div className='flex flex-col my-2'>
							<label htmlFor='message-box'>Message</label>
							<textarea
								id='message-box'
								spellCheck='false'
								className={cn(styles.textarea)}
								cols={30}
								rows={5}
								maxLength={250}
							></textarea>
						</div>
						<button
							type='submit'
							className={styles.button}
						>
							Send message
						</button>
					</form>
				</div>
			</div>
		</section>
	);
}

export default ReachPage;
