import { cn } from '@/lib/utils';
import React from 'react';

const Header = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ children, className, ...props }, ref) => (
	<header ref={ref} className={cn('container max-w-[1400px] flex px-4 sm:px-6 md:px-8 xl:px-12 lg:py-6', className)} {...props}>
		{children}
	</header>
));
Header.displayName = 'Header';
export default Header;
