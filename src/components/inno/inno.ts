type TInnovations = {
	title: string;
	desc: string;
	image: string;
	alt: string;
}[];

export const innovations: TInnovations = [
	{
		title: 'Artificial Intelligence',
		desc: 'Machines that think, learn, and act like humans, automating tasks and making intelligent decision.',
		image: '/images/ai.png',
		alt: 'AI',
	},
	{
		title: 'Augmented / Virtual Reality',
		desc: 'Merging the real and virtual worlds, AR overlays digital information onto your surroundings, while VR immerse you in completely simulated experiences.',
		image: '/images/vr.png',
		alt: 'AR/VR',
	},
	{
		title: 'Quantum Computing',
		desc: 'Quantum computers harness the bizarre of quantum mechanics to perform calculations at mind-blogging speeds and tackle problems beyond the reach of classical computers.',
		image: '/images/quantum.png',
		alt: 'Quantum Computer',
	},
	{
		title: 'Blockchain',
		desc: 'Blockchain is a decentralized ledger of transactions across a peer-to-peer network. It is a distributed database that maintains a growing list of records, called blocks, that are linked together using cryptography.',
		image: '/images/blockchain.png',
		alt: 'Blockchain',
	},
	{
		title: 'Drones',
		desc: 'Flying robots controlled manually, revolutionizing aerial photography, deliveries, and even disaster relief. Think of them as eyes in the sky, scans in a seconds.',
		image: '/images/drone.png',
		alt: 'Drones',
	},
];
