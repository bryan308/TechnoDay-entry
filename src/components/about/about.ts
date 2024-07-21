import {
	faBook,
	faEarthAsia,
	faGlobe,
	faHandshake,
	faLink,
	faRocket,
	IconDefinition,
} from '@fortawesome/free-solid-svg-icons';

type TAbout = {
	header: string;
	desc: string;
	icon: IconDefinition;
}[];

export const aboutItems: TAbout = [
	{
		header: 'Innovate',
		desc: 'Be at the forefront of groundbreaking innovations that redefine the tech landscape.',
		icon: faRocket,
	},
	{
		header: 'Collaborate',
		desc: 'Join forces with brilliant minds to bring your ideas to life and contribute to cutting-edge projects.',
		icon: faHandshake,
	},
	{
		header: 'Explore',
		desc: 'Navigate the uncharted territories of technology, discovering new possibilities and shaping the future.',
		icon: faGlobe,
	},
	{
		header: 'Connect',
		desc: 'Engage with a global network of tech enthusiasts, industry experts, and visionaries.',
		icon: faLink,
	},
	{
		header: 'Learn',
		desc: 'Immerse yourself in a culture of continuous learning, where curiosity is celebrated, and knowledge is shared.',
		icon: faBook,
	},
	{
		header: 'Impact',
		desc: 'Make a meaningful impact on industries, communities, and the world through the power of technology.',
		icon: faEarthAsia,
	},
];
