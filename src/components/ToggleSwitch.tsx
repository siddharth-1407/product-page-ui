'use client';
import React, { ReactElement, useId } from 'react';

export default function ToggleSwitch({ children }: { children: ReactElement }) {
	const id = useId();
	return (
		<label
			htmlFor={id}
			className='bg-primary-30 px-3 py-1.5 rounded-sm flex gap-4 items-center select-none text-sm text-primary-foreground font-semibold'>
			<span>{children}</span>
			<span className='relative w-8 h-3 bg-primary rounded-full'>
				<input type='checkbox' id={id} className='peer appearance-none' />
				<span className='w-4 h-4 bg-primary-foreground rounded-full absolute top-1/2 -translate-y-1/2 left-0 peer-checked:left-full peer-checked:-translate-x-full transition-all'></span>
			</span>
		</label>
	);
}
