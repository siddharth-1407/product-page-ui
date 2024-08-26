import React from 'react';
import Collapsible from '../Collapsible/Collapsible';
import CollapsibleContent from '../Collapsible/CollapsibleContent';
import CollapsibleTrigger from '../Collapsible/CollapsibleTrigger';
import { Check } from 'lucide-react';

export default function FilterByTerpenes() {
	return (
		<Collapsible>
			<CollapsibleTrigger>Terpene</CollapsibleTrigger>
			<CollapsibleContent>
				<div className='flex gap-3'>
					<label htmlFor={'#1'} className='w-full cursor-pointer flex items-center gap-3'>
						<span className='flex'>
							<input type='checkbox' id={'#1'} className='peer appearance-none' />
							<span className='w-5 aspect-square hidden border rounded-md peer-checked:block peer-checked:bg-primary-10 peer-checked:border-transparent'>
								<Check className='w-full h-full text-primary-foreground' />
							</span>
							<span className='w-5 aspect-square block bg-transparent border rounded-md border-primary-foreground peer-checked:hidden'></span>
						</span>
						<span className='select-none '>{'option 1'}</span>
					</label>
				</div>
			</CollapsibleContent>
		</Collapsible>
	);
}
