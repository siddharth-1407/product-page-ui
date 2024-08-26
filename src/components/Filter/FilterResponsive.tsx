'use client';
import React from 'react';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import FilterByTerpenes from './FilterByTerpenes';
import Button from '../Button';
import { filters, sellers } from '@/DummyData/Filters';
import FilterMultiSelectButton from '../FilterMultiSelectButton';
import FilterByManufacturer from './FilterByManufacturer';
import { Check, X } from 'lucide-react';
import Collapsible from '../Collapsible/Collapsible';
import CollapsibleTrigger from '../Collapsible/CollapsibleTrigger';
import CollapsibleContent from '../Collapsible/CollapsibleContent';

export default function FilterResponsive() {
	return (
		<div className='lg:hidden z-40 flex-1 sticky top-[60px] bg-white w-full py-1.5 px-2'>
			<Sheet>
				<SheetTrigger className='font-semibold text-lg underline text-primary-foreground'>Filter</SheetTrigger>
				<SheetContent side={'left'} className='pt-10'>
					<SheetTitle className='w-full h-fit py-0.5 text-center bg-primary-10 rounded-sm'>
						<p className='w-full font-semibold text-2xl text-primary-foreground'>Filter</p>
					</SheetTitle>
					<section className='divide-y-2 divide-accent'>
						<section className='py-6'>
							<Collapsible open={true}>
								<CollapsibleTrigger>
									<span>Hersteller</span>
								</CollapsibleTrigger>
								<CollapsibleContent>
									{sellers.map((seller, i) => (
										<div key={seller.id} className='flex gap-3'>
											<label htmlFor={seller.id + i} className='group w-full cursor-pointer flex items-center gap-3'>
												<span className='flex'>
													<input type='checkbox' id={seller.id + i} className='peer appearance-none' />
													<span className='w-5 aspect-square hidden border rounded-md peer-checked:block peer-checked:bg-primary-10 peer-checked:border-transparent'>
														<Check className='w-full h-full text-primary-foreground' />
													</span>
													<span className='w-5 aspect-square block bg-transparent border rounded-md border-primary-foreground peer-checked:hidden'></span>
												</span>
												<span className='select-none '>{seller.name}</span>
											</label>
										</div>
									))}
									<Button variant={'theme'} className='py-1.5 border-2 border-[#ecfeaa]'>
										mehr anzeigen
									</Button>
								</CollapsibleContent>
							</Collapsible>
						</section>
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
				</SheetContent>
			</Sheet>
		</div>
	);
}
