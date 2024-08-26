import React from 'react';
import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';

const badgeVariants = cva(
	'w-fit inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
	{
		variants: {
			variant: {
				default: '',
				blue: 'border-transparent bg-primary-foreground-10  text-primary-foreground',
				green: 'border-transparent bg-success text-success-foreground',
				red: 'border-transparent bg-destructive text-destructive-foreground',
				white: 'border-secondary bg-secondary text-primary-foreground font-normal',
				theme: 'border-secondary-foreground bg-secondary-foreground text-secondary font-normal ',
			},
			size: {
				sm: 'text-xs px-2.5',
				md: 'text-sm px-2.5',
				lg: 'text-normal',
			},
			bullet: {
				true: 'relative before:z-10 before:absolute before:top-1/2 before:left-2 before:-translate-y-1/2 before:contents-none before:w-1 before:h-1 before:rounded-full data-[status=success]:before:bg-success-foreground data-[status=danger]:before:bg-destructive-foreground pl-4',
				false: '',
			},
		},
		defaultVariants: {
			variant: 'default',
			size: 'sm',
			bullet: false,
		},
	}
);

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(({ className, bullet, ...props }, ref) => (
	<div ref={ref} className={cn(badgeVariants({ ...props, bullet, className }))} {...props} />
));

export default Badge;
