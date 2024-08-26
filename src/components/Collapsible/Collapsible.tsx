'use client';
import { cn } from '@/lib/utils';
import React, { ReactElement, useId, useState } from 'react';
import CollapsibleContent from './CollapsibleContent';
import CollapsibleTrigger from './CollapsibleTrigger';

const Collapsible = ({ className, children, open, ...props }: { children: ReactElement[]; open?: boolean; className?: string }) => {
	const [isOpen, setIsOpen] = useState<boolean>(open || false);
	const id = useId();

	return (
		<div key={`${id}-collapsible`} className={cn('w-full flex flex-col gap-4 bg-white rounded-b-md', className)} {...props}>
			{React.Children.map(children, (child, i) => {
				return React.cloneElement(child, { isOpen, setIsOpen, key: `${id}-${i}` });
			})}
		</div>
	);
};

export default Collapsible;
