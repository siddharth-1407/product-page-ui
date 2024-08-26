'use client';
import React, { useEffect, useId } from 'react';
import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';

const collapsibleContentVariants = cva('flex flex-col gap-2', {
	variants: {
		isOpen: {
			true: 'h-fit flex',
			false: 'h-0 hidden',
		},
	},
	defaultVariants: {
		isOpen: false,
	},
});

export interface CollapsibleContentProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof collapsibleContentVariants> {
	isOpen?: boolean;
	setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

const CollapsibleContent = React.forwardRef<HTMLDivElement, CollapsibleContentProps>(({ isOpen, className, ...props }, ref) => {
	const id = useId();
	useEffect(() => {
		console.log(isOpen);
	}, [isOpen]);
	return <div key={`${id}-content`} ref={ref} className={cn(collapsibleContentVariants({ isOpen }), className)} {...props} />;
});

export default CollapsibleContent;
