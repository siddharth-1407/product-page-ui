import { cn } from '@/lib/utils';
import React from 'react';

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ children, className, ...props }, ref) => (
	<div ref={ref} className={cn('flex flex-col space-y-1.5 px-6', className)} {...props}>
		{children}
	</div>
));

export default CardHeader;
