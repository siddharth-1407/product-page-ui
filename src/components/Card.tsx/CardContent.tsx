import { cn } from '@/lib/utils';
import React from 'react';

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ children, className, ...props }, ref) => (
	<div ref={ref} className={cn('flex flex-col p-6', className)} {...props}>
		{children}
	</div>
));

export default CardContent;
