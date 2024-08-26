import { cn } from '@/lib/utils';
import React from 'react';

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ children, className, ...props }, ref) => (
	<div ref={ref} className={cn('flex flex-col px-4 pb-4', className)} {...props}>
		{children}
	</div>
));
CardFooter.displayName = 'CardFooter';
export default CardFooter;
