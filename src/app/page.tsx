import Breadcrumb from '@/components/Breadcrumb';
import Button from '@/components/Button';
import Collapsible from '@/components/Collapsible/Collapsible';
import CollapsibleTrigger from '@/components/Collapsible/CollapsibleTrigger';
import CollapsibleContent from '@/components/Collapsible/CollapsibleContent';
import Filter from '@/components/Filter/Filter';
import FilterResponsive from '@/components/Filter/FilterResponsive';
import Pagination from '@/components/Pagination';
import ProductCard from '@/components/ProductCard';
import ToggleSwitch from '@/components/ToggleSwitch';
import { products, ProductType } from '@/DummyData/Products';
import { List, Search } from 'lucide-react';
import Image from 'next/image';
import RangeSlider from '@/components/RangeSlider';

export default function Home() {
	return (
		// <main className='flex min-h-screen flex-col items-center justify-between lg:p-24'>
		<main className='mb-32 px-4 sm:px-6 md:px-8 container max-w-[1400px] xl:px-12 flex flex-col gap-8'>
			<div className='sticky hidden md:flex items-center justify-between mt-12'>
				<Breadcrumb />
				<div className='flex flex-col gap-2'>
					<p>GKV mit Kostenübernahme?</p>
					<Button variant={'theme'} className='border-2 border-primary-foreground'>
						Preisoptionen
					</Button>
				</div>
			</div>
			<div className='flex flex-col gap-6'>
				<div className='hidden lg:flex gap-8 justify-between'>
					<Image src={'/Logo.png'} width={180} height={180} alt={'Blüten'} />
					<div className='flex-1 flex items-center justify-end gap-4'>
						<div className='relative  flex justify-between'>
							<input
								type='text'
								className='pl-2 pr-10 w-full max-w-96 py-1 bg-primary-20 rounded-sm hover:bg-primary-30 transition-colors border border-transparent focus-visible:border-border focus:outline-none'
							/>
							<Search className='w-6 h-6 absolute right-2 top-1/2 -translate-y-1/2 text-border' />
						</div>
						<Collapsible className={'w-fit relative'}>
							<CollapsibleTrigger className='text-sm bg-primary-30 px-3 py-1.5 rounded-sm pr-10 whitespace-nowrap'>
								<span>Sortieren nach</span>
							</CollapsibleTrigger>
							<CollapsibleContent className='absolute gap-0 top-full bg-white w-full h-fit p-2 border-2 border-t-0 z-20 divide-y-2 divide-primary-20 '>
								<span className='py-2 hover:bg-primary-10'>Price: Min-Max</span>
								<span className='py-2 hover:bg-primary-10'>Price: Max-Min</span>
							</CollapsibleContent>
						</Collapsible>
						<ToggleSwitch>
							<span>Verfügbarkeit</span>
						</ToggleSwitch>
						<button className='py-0.5 px-1 bg-primary-30 rounded-sm'>
							<List className='w-7 h-7 text-primary-foreground' />
						</button>
					</div>
				</div>
				<div className='flex flex-col lg:flex-row gap-3 lg:gap-20 justify-between'>
					<Filter />
					<FilterResponsive />
					<div className='flex flex-col gap-6'>
						<div className='w-full grid grid-flow-row place-items-center grid-cols-1 sm:grid-cols-2 grid-rows-5 xl:grid-cols-3 xl:grid-rows-3 gap-8 lg:gap-5'>
							{products.map((product: ProductType) => (
								<ProductCard key={product.id} product={product} />
							))}
						</div>
						<Pagination />
					</div>
				</div>
			</div>
		</main>
	);
}
