import React from 'react';
import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';

const cardVariants = cva('flex flex-col rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden', {
	variants: {
		variant: {
			theme: 'border-2 rounded-4xl rounded-tr-none rounded-bl-none',
		},
	},
	defaultVariants: {
		variant: 'theme',
	},
});

export interface CardProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof cardVariants> {}

const Card = React.forwardRef<HTMLDivElement, CardProps>(({ children, variant, className, ...props }, ref) => {
	return (
		<div ref={ref} className={cn(cardVariants({ ...props, className }))}>
			{children}
		</div>
	);
});


Card.displayName = 'Card';
export default Card;
