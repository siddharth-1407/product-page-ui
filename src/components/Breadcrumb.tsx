import { MoveRight } from 'lucide-react';
import React from 'react';

export default function Breadcrumb() {
	return (
		<div className='flex items-center gap-4 font-normal'>
			<span className='text-primary'>Home</span>
			<span>
				<MoveRight className='text-primary' />
			</span>
			<span className='text-primary'>Livebestand</span>
			<span>
				<MoveRight className='text-primary' />
			</span>
			<span className='text-primary-foreground'>Cannabis Blüten</span>
		</div>
	);
}
