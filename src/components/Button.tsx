import React from 'react';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

const buttonVariants = cva(
	'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
	{
		variants: {
			variant: {
				default: 'bg-primary text-primary-foreground hover:bg-primary/90',
				option: 'px-3 py-1.5 rounded-sm',
				theme: 'rounded-none rounded-br-full rounded-tl-full px-5 text-sm py-2 hover:rounded-tr-full hover:rounded-bl-full hover:rounded-br-none hover:rounded-tl-none focus-visible:rounded-tr-full focus-visible:rounded-bl-full focus-visible:rounded-br-none focus-visible:rounded-tl-none transition-all',
			},
			isSelected: {
				default: '',
				true: 'bg-primary text-secondary',
				false: 'bg-accent text-primary-foreground',
			},
		},
		defaultVariants: {
			variant: 'default',
			isSelected: 'default',
		},
	}
);

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
	asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, isSelected, variant, ...props }, ref) => (
	<button className={cn(buttonVariants({ isSelected, variant, className }))} ref={ref} {...props} />
));

Button.displayName = 'Button';

export default Button;
