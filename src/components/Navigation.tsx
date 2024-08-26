import { cn } from '@/lib/utils';
import React from 'react';

const Navigation = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ children, className, ...props }, ref) => (
	<nav ref={ref} className={cn('flex p-6', className)} {...props}>
		{children}
	</nav>
));
Navigation.displayName = 'Navigation';
export default Navigation;
