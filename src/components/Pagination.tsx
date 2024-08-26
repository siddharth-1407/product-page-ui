import { MoveLeft, MoveRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

export default function Pagination() {
	return (
		<div className='ml-auto flex gap-4 items-center text-primary-foreground font-semibold'>
			<Link href={'#1-'}>
				<MoveLeft className='w-5 h-5 text-border' />
			</Link>
			<Link href={'#1'}>1</Link>
			<Link href={'#2'}>2</Link>
			<Link href={'#3'}>3</Link>
			<span>...</span>
			<Link href={'#12'}>12</Link>
			<Link href={'#1+'}>
				<MoveRight className='w-5 h-5 text-border' />
			</Link>
		</div>
	);
}
