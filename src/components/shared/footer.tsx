import Link from 'next/link';
import styles from './footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';

function Footer() {
	return (
		<>
			<footer className={styles.footer}>
				<div className={styles.footer_container}>
					<div className={styles.footer_socials}>
						<Link
							href='#'
							target='_blank'
							className='social-icon'
						>
							<span className='sr-only'>Facebook Icon</span>
							<FontAwesomeIcon
								icon={faFacebook}
								className='size-4'
							/>
						</Link>
						<Link
							href='#'
							target='_blank'
							className='social-icon'
						>
							<span className='sr-only'>Instagram Icon</span>
							<FontAwesomeIcon
								icon={faInstagram}
								className='size-4'
							/>
						</Link>
						<Link
							href='#'
							target='_blank'
							className='social-icon'
						>
							<span className='sr-only'>LinkedIn Icon</span>
							<FontAwesomeIcon
								icon={faLinkedin}
								className='size-4'
							/>
						</Link>
						<Link
							href='#'
							target='_blank'
							className='social-icon'
						>
							<span className='sr-only'>Youtube Icon</span>
							<FontAwesomeIcon
								icon={faYoutube}
								className='size-4'
							/>
						</Link>
					</div>
				</div>
				<p>&copy; 2024 TechOdyssey | All Rights Reserved.</p>
			</footer>
		</>
	);
}

export default Footer;
