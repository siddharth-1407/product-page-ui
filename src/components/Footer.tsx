import React from 'react';
import Navigation from './Navigation';
import Link from 'next/link';

const links = [
	{ id: '1', title: 'Rezept einlösen', path: '/#' },
	{ id: '2', title: 'Live Bestand', path: '/#' },
	{ id: '3', title: 'Videosprechstende', path: '/#' },
	{ id: '4', title: 'FAQs', path: '/#' },
	{ id: '5', title: 'Kontakt', path: '/#' },
];

function NavigationLinks() {
	return (
		<Navigation className='p-0 flex flex-col lg:flex-row lg:items-center gap-y-4 gap-x-6 max-w-96 flex-wrap'>
			{links?.map((data) => {
				return (
					<Link href={data.path} id={data.id} className={'flex whitespace-nowrap gap-1 text-primary-foreground'}>
						<span className={'w-3 h-3 aspect-square rounded-tl-full rounded-br-full bg-border'}></span>
						<span className='text-secondary font-normal '>{data.title}</span>
					</Link>
				);
			})}
		</Navigation>
	);
}

export default function Footer() {
	return (
		<footer className='mt-auto min-h-52 py-16 lg:py-16 flex justify-center items-center rounded-t-[50px] bg-primary-foreground overflow-hidden'>
			<div className='container max-w-[1400px] grid gap-6 lg:gap-0 grid-cols-2  sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xl:flex xl:items-center justify-between'>
				<div className='self-end flex flex-col gap-2 text-xs text-primary'>
					<Link href='#agb'>AGB</Link>
					<Link href='#impressum'>Impressum</Link>
					<Link href='#datenschutz'>Datenschutz</Link>
				</div>
				<NavigationLinks />
				<section className='flex flex-col items gap-4 text text-normal text-secondary w-full max-w-44'>
					<header className='text-xs text-primary'>Standort</header>
					<address className='not-italic'>Bergstraße 49 - 5769469 Weinheim (3 Glocken Quartier)</address>
				</section>
				<section className='flex flex-col gap-4 text text-normal text-secondary not-italic w-full max-w-44'>
					<header className='text-xs text-primary'>Telefon</header>
					<a href='tel:+1234567890'>0223 545 5250</a>
				</section>
				<section className='lg:col-start-4 xl:col-start-5 flex flex-col gap-4 text text-normal text-secondary not-italic w-full max-w-44'>
					<header className='text-xs text-primary'>Öffnungszeiten</header>
					<div>
						<p className='text-xs text-primary'>Mo-Fr</p>
						<time dateTime='09:00'>09:00</time> – <time dateTime='18:00'>18:00</time> Uhr
					</div>
					<div>
						<p className='text-xs text-primary'>Sa</p>
						<time dateTime='09:00'>09:00</time> – <time dateTime='14:00'>14:00</time> Uhr
					</div>
				</section>
			</div>
		</footer>
	);
}
