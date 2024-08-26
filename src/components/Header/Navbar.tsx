'use client';
import React from 'react';
import Link from 'next/link';
import Badge from '../Badge';
import Header from './Header';
import Button from '../Button';
import Navigation from '../Navigation';
import { SearchIcon, ShoppingCart } from 'lucide-react';
import { NavLinks } from '@/DummyData/Navlinks';

type NavLinkType = {
	id: number;
	link: string;
	title: string;
};

const Navbar = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
	<Header ref={ref} className='hidden lg:flex sticky top-0 bg-white w-full h-12 flex-row items-center gap-8 z-40 mt-8'>
		<div className='flex-1 flex gap-4'>
			<div className='flex-1 flex items-center'>
				<button className='min-w-9 w-full bg-primary-20 hover:bg-primary-30 transition-colors text-primary rounded-full text-normal'>
					<div className='px-3 py-1 flex flex-1 justify-between items-center font-medium'>
						Search <SearchIcon className='text-border w-5 h-5' />
					</div>
				</button>
			</div>
			<Navigation className='items-center gap-4 p-0'>
				{NavLinks.map((nav) => (
					<NavLink key={nav.id} data={nav} />
				))}
			</Navigation>
		</div>
		<div className='flex gap-6'>
			<button className='flex relative ml-1'>
				<ShoppingCart className='w-6 h-7 text-border' />
				<Badge className='absolute top-1/2 translate-x-1/2 -translate-y-1/3 right-0 flex justify-center text-xs font-medium w-[18px] h-[18px] aspect-square bg-accent border-0 text-border'>
					<span>1</span>
				</Badge>
			</button>
			<Button variant={'theme'} className='ml-2 bg-[#ecfeaa] focus-visible:ring-black self-center font-normal text-primary-foreground'>
				Anmelden
			</Button>
		</div>
	</Header>
));

Navbar.displayName = 'Navbar';
export default Navbar;

const NavLink = ({ data }: { data: NavLinkType }) => {
	return (
		<Link
			href={data.link}
			id={data.link}
			className={
				data.id === 1 ? 'flex items-center gap-1 text-primary-foreground font-semibold ' : 'flex items-center gap-1 text-primary-foreground '
			}>
			<span
				className={
					data.id === 1
						? 'w-3 h-3 aspect-square rounded-tl-full rounded-br-full bg-border'
						: 'w-3 h-3 aspect-square rounded-tl-full rounded-br-full bg-accent'
				}></span>
			<span>{data.title}</span>
		</Link>
	);
};
