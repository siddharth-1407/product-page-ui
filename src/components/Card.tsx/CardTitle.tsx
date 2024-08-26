import React from 'react';
import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';

const titleVariants = cva('', {
	variants: {
		variant: {
			theme: 'text-lg text-primary-foreground font-semibold',
		},
	},
	defaultVariants: {
		variant: 'theme',
	},
});

export interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement>, VariantProps<typeof titleVariants> {}

const CardTitle = React.forwardRef<HTMLDivElement, CardTitleProps>(({ children, className, ...props }, ref) => (
	<h2 ref={ref} className={cn(titleVariants({ ...props, className }))}>
		{children}
	</h2>
));

CardTitle.displayName = 'CardTitle';
export default CardTitle;
