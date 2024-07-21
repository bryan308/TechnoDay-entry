type TArticles = {
	thumbnail: string;
	title: string;
	paragraph: string;
	avatar?: string | null;
	name: string;
	date: string;
}[];

export const articles: TArticles = [
	{
		thumbnail: 'article-img4.jpg',
		title: 'My Life-Changing Week With Apple Vision Pro',
		paragraph:
			'I was right. Watching movies and TV and personal 2D and 3D “spatial videos” recorded with an iPhone 15 Pro on the Vision Pro’s 100-foot virtual screen is such a mind-boggling experience it almost feels impossible that it exists in a headset that fits in your backpack. Taking off the Vision Pro will leave a temporary red imprint of its cushion around your eyes, but you will crave putting it back on to enter the stimulating augmented world of visionOS.',
		avatar: 'source-img4.jpg',
		name: 'Raymond Wong',
		date: 'Feb 08, 2024',
	},
	{
		thumbnail: 'article-img2.webp',
		title: 'Revolutionizing Neuroscience with AI Collaboration',
		paragraph:
			'A new study presents a compelling case for the integration of Large Langiage Models (LLMs) like ChatGPT into neuroscience, highlighting their potential to transform research by analyzing vast datasets beyond human capability. The authors suggest that LLMs can bridge diverse neuroscience fields by communicating with each other, thus accelerating discoveries in areas such as neurodegeneration drug development.',
		avatar: '',
		name: 'McGill University',
		date: 'Feb 09, 2024',
	},
	{
		thumbnail: 'article-img3.jpg',
		title:
			'$70m S’pore AI initiative to develop first large language model with South-east Asian context',
		paragraph:
			'Singapore is pioneering the development of on artificial intelligence (AI) model trained to understand and generate human language that incorporates the diverse cultures and languages of South-east Asia. This large language model (LLM) could eventually be used as the basis of various text-to-speech or text-to-image generative programmers.',
		avatar: 'source-img2.webp',
		name: 'Goh Yan Han',
		date: 'Dec 04, 2023',
	},
	{
		thumbnail: 'article-img1.webp',
		title: 'The next chapter of our Gemini era',
		paragraph:
			'Google’s extensive AI invesments are evident in the Search Generative Experience (SGE) and the groundbreaking Gemini era. Gemini Advanced, previously Bard, now boasts Ultra 1.0, surpassing human expertise. This advanced AI, available on the web and a new app, excels in reasoning, coding, and creative collaboration. It’s part of the Google One AI Premium plan, offering users a consilidated experience with exclusive features.',
		avatar: 'source-img1.webp',
		name: 'Sundar Pichai',
		date: 'Feb 08, 2024',
	},
];
