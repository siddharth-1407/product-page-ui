'use client';
import React from 'react';
import Button from '../Button';
import { X } from 'lucide-react';
import { filters } from '@/DummyData/Filters';
import FilterByTerpenes from './FilterByTerpenes';
import FilterByManufacturer from './FilterByManufacturer';
import FilterMultiSelectButton from '../FilterMultiSelectButton';
import useWindowResize from '@/hooks/useWindowResize';

export default function Filter() {
	const window = useWindowResize();
	return (
		<aside>
			<div className='hidden lg:flex flex-col min-w-62 sticky top-12'>
				<header className='w-full h-fit py-0.5 text-center bg-primary-10 rounded-sm'>
					<p className='w-full font-semibold text-2xl text-primary-foreground'>Filter</p>
				</header>
				<section className='divide-y-2 divide-accent'>
					<section className={'py-6'}>{window.width >= 1024 && <FilterByManufacturer />}</section>
					{filters.map((item) => {
						return (
							<section key={item.filterTitle} className='py-6 flex flex-col gap-6'>
								<header className='text-primary-foreground text-center font-semibold '>{item.filterTitle}</header>
								<div className='flex gap-2'>
									{item.Options.map((filterOption) => (
										<FilterMultiSelectButton key={filterOption.id} className='w-full' id={filterOption.id}>
											{filterOption.title}
										</FilterMultiSelectButton>
									))}
								</div>
							</section>
						);
					})}
					<section className='py-6'>
						<FilterByTerpenes />
					</section>
					<section className='py-6 '>
						<Button className='bg-transparent p-0 rounded-none w-full py-1.5 flex gap-1 items-center justify-center text-black hover:underline'>
							<span>
								<X className='w-5 h-5 text-border' />
							</span>
							<span>alle Filter zurücksetzen</span>
						</Button>
					</section>
				</section>
			</div>
		</aside>
	);
}
