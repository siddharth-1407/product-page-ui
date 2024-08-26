'use client';
import React from 'react';
import Badge from './Badge';
import Button from './Button';
import Image from 'next/image';
import Card from './Card.tsx/Card';
import CardTitle from './Card.tsx/CardTitle';
import CardHeader from './Card.tsx/CardHeader';
import CardFooter from './Card.tsx/CardFooter';
import CardContent from './Card.tsx/CardContent';
import { ProductType } from '@/DummyData/Products';
import CardDescription from './Card.tsx/CardDescription';
import ProductImage from '../../public/product-picture.jpg';

type Props = {
	product: ProductType;
};

export default function ProductCard({ product }: Props) {
	const addToCart = () => {
		console.log('Product added!');
	};

	return (
		<Card variant={'theme'} className='w-full h-full transition-all'>
			<CardHeader className='border-b-2 pb-1 pt-1 px-0'>
				<div className='my-2'>
					<div className='px-6 flex justify-between'>
						<Badge variant={product.available ? 'green' : 'red'} bullet={true} data-status={product.available ? 'success' : 'danger'}>
							{product.available ? 'sofort lieferbar' : 'nicht lieferbar'}
						</Badge>
						{product.new && (
							<Badge variant={'blue'} size={'sm'} className='font-normal'>
								Nue
							</Badge>
						)}
					</div>
					<div className='grid place-items-center'>
						<Image
							className='w-full h-full'
							src={ProductImage}
							width={310}
							height={150}
							alt='product name'
							placeholder={'blur'}
							loading='lazy'
						/>
					</div>
				</div>
			</CardHeader>
			<CardContent className='flex-1 bg-accent justify-between gap-3 2xl:gap-8'>
				<div className='flex flex-col gap-4'>
					<Badge size={'md'} className='rounded-md border-transparent bg-accent text-primary-foreground'>
						{product.type}
					</Badge>
					<div className='flex gap-2'>
						<Badge size={'lg'} variant={'white'} className='rounded-md text-primary-foreground'>
							<span>THC {product.thc}%</span>
						</Badge>
						{product.cbd < 1 && (
							<Badge size={'lg'} variant={'theme'} className='rounded-md text-secondary'>
								CBD &lt; 1%
							</Badge>
						)}
					</div>
				</div>
				<CardTitle>{product.name}</CardTitle>
				<CardDescription className='text-accent-foreground font-light'>
					<div className='flex '>
						<p className=''>Kultivar</p>
						<div className='flex-1 flex px-1 pb-1.5'>
							<span className='w-full border-b-2 border-accent border-dashed'></span>
						</div>
						<p className=''>{product.cultivar}</p>
					</div>
					<div className='flex '>
						<p className=''>Genetik</p>
						<div className='flex-1 flex px-1 pb-1.5'>
							<span className='w-full border-b-2 border-accent border-dashed'></span>
						</div>
						<p className=''>{product.genetics}</p>
					</div>
				</CardDescription>
			</CardContent>
			<CardFooter className='bg-accent justify-between flex-row'>
				<div className='flex flex-col font-black'>
					<div className='flex gap-1 text-2xl'>
						<span className='text-secondary-foreground'>€</span>
						<span className='text-accent-foreground'>{product.price}</span>
					</div>
					<span className='text-xs font-normal text-primary-foreground'>pro Gramm</span>
				</div>
				<Button onClick={addToCart} variant={'theme'} className='bg-[#ecfeaa] focus-visible:ring-black self-center font-normal'>
					in den Warenkorb
				</Button>
			</CardFooter>
		</Card>
	);
}
