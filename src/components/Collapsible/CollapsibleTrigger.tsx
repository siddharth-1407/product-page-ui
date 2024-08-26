'use client';
import React, { useEffect, useId } from 'react';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';
import { cva, VariantProps } from 'class-variance-authority';

const collapsibleTriggerVariants = cva(
	'relative w-full bg-transparent py-1.5 text-normal text-primary-foreground text-center font-semibold flex justify-center items-center',
	{
		variants: {
			isOpen: {
				true: '',
				false: '',
			},
		},
		defaultVariants: {
			isOpen: false,
		},
	}
);

export interface CollapsibleTriggerProps extends React.HTMLAttributes<HTMLButtonElement>, VariantProps<typeof collapsibleTriggerVariants> {
	isOpen?: boolean;
	setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

const CollapsibleTrigger = React.forwardRef<HTMLButtonElement, CollapsibleTriggerProps>(
	({ isOpen, setIsOpen, className, children, ...props }, ref) => {
		const id = useId();

		return (
			<button
				key={`${id}-trigger`}
				onClick={() => {
					typeof setIsOpen == 'function' && setIsOpen((prev) => !prev);
				}}
				ref={ref}
				className={cn(collapsibleTriggerVariants({ ...props, className }), className)}>
				<span className='mx-auto'>{children}</span>
				<ChevronDown className={isOpen ? 'absolute right-2 rotate-180 transition-all' : 'absolute right-2 rotate-0 transition-all'} />
			</button>
		);
	}
);

export default CollapsibleTrigger;
