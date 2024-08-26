import { cn } from '@/lib/utils';
import React from 'react';

const CardDescription = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ children, className, ...props }, ref) => (
	<div ref={ref} className={cn(className)} {...props}>
		{children}
	</div>
));

export default CardDescription;
