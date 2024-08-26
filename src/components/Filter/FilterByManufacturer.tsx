import React from 'react';
import Button from '../Button';
import { Check } from 'lucide-react';
import { sellers } from '@/DummyData/Filters';
import Collapsible from '../Collapsible/Collapsible';
import CollapsibleTrigger from '../Collapsible/CollapsibleTrigger';
import CollapsibleContent from '../Collapsible/CollapsibleContent';

export default function FilterByManufacturer() {
	return (
		<Collapsible open={true}>
			<CollapsibleTrigger>
				<span>Hersteller</span>
			</CollapsibleTrigger>
			<CollapsibleContent>
				{sellers.map((seller) => (
					<div key={seller.id} className='flex gap-3'>
						<label htmlFor={seller.id} className='group w-full cursor-pointer flex items-center gap-3'>
							<span className='flex'>
								<input type='checkbox' id={seller.id} className='peer appearance-none' />
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
	);
}
