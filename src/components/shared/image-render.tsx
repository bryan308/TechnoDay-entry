'use client';

import Image from 'next/image';
import { useState } from 'react';

type TImageRender = {
	src: string;
	alt: string;
	width: number;
	height: number;
	className?: string;
	priority?: boolean;
};

export default function ImageRender({ src, alt, width, height, className, ...props }: TImageRender) {
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
			{...props}
			src={src}
			alt={alt}
			quality={100}
			style={style}
			width={width}
			height={height}
			className={className}
			onLoad={handleLoading}
			aria-label={isLoading ? 'Loading...' : ''}
		/>
	);
}
