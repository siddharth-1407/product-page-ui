'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import Badge from '../Badge';
import Button from '../Button';
import Header from './Header';
import { NavLinks } from '@/DummyData/Navlinks';
import { AlignJustify, ShoppingCart } from 'lucide-react';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '../ui/sheet';
import Navigation from '../Navigation';

export default function NavbarResponsive() {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<Header className='lg:hidden sticky top-0 bg-white z-40 p-4 justify-between'>
			<div className='flex gap-3 items-center'>
				<Sheet open={isOpen} onOpenChange={setIsOpen}>
					<SheetTrigger className='font-semibold text-lg underline text-primary-foreground'>
						<AlignJustify className='w-7 h-7' />
					</SheetTrigger>
					<SheetContent side={'left'} className='pt-10 flex flex-col gap-6'>
						<SheetTitle className='w-full h-fit py-0.5 text-center flex justify-center items-center rounded-sm'>
							<Image src={'/logo.png'} width={180} height={180} className='mx-auto' alt='Blüten' />
						</SheetTitle>
						<Navigation className='px-0 flex-col gap-2'>
							{NavLinks.map((nav) => (
								<Link
									onClick={() => setIsOpen(false)}
									key={nav.id}
									href={nav.link}
									className='bg-primary-30 px-2 py-1 rounded-sm text-primary-foreground font-semibold text-lg '>
									{nav.title}
								</Link>
							))}
						</Navigation>
					</SheetContent>
				</Sheet>

				<Link href={'/'} className='self-end'>
					<Image src={'/logo.png'} width={100} height={40} alt='Blüten' />
				</Link>
			</div>
			<div className='flex gap-6'>
				<button className='hidden [@media(width>=500px)]:flex relative ml-1'>
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
	);
}
