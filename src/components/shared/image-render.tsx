'use client';

import Image from 'next/image';
import { useState } from 'react';

type TImageRender = {
	src: string;
	alt: string;
	width: number;
	height: number;
	className?: string;
};

export default function ImageRender({ src, alt, width, height, className }: TImageRender) {
	const [isLoading, setisLoading] = useState(true);

	const handleLoading = () => {
		setisLoading(false);
	};

	const style = {
		filter: isLoading ? 'blur(3px) grayscale(1)' : `none`,
		transition: 'filter 700ms ease-in-out',
	};

	return (
		<Image
			src={src}
			alt={alt}
			quality={100}
			style={style}
			width={width}
			height={height}
			// placeholder='blur'
			className={className}
			onLoad={handleLoading}
			aria-label={isLoading ? 'Loading...' : ''}
		/>
	);
}
