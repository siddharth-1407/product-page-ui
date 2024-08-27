'use client';
import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

export default function RangeSlider({
	title,
	min = 0,
	max = 100,
	step = 10,
	defaultValue = [min, max],
}: {
	title: string;
	min: number;
	max: number;
	step: number;
	defaultValue: number[];
}) {
	const [range, setRange] = useState({ min: defaultValue[0] || min, max: defaultValue[0] || max });

	const HandleChange = (value: number | number[]) => {
		if (typeof value !== 'number') {
			setRange({ min: value[0], max: value[1] });
		}
		return;
	};

	return (
		<div className='flex flex-col gap-6 '>
			<header className='relative w-full bg-transparent py-1.5 text-normal text-primary-foreground text-center font-semibold flex justify-center items-center'>
				<span>{title}</span>
			</header>
			<Slider
				allowCross={false}
				min={min}
				max={max}
				step={step}
				defaultValue={defaultValue}
				handleStyle={{
					width: '18px',
					height: '18px',
					background: 'hsl(182, 81%, 54%)',
					borderWidth: 0,
					borderRadius: '50px 0px 50px 0px',
				}}
				trackStyle={{ background: 'hsl(182, 81%, 54%)', height: 6 }}
				railStyle={{ backgroundColor: 'hsl(182, 47%, 58%,0.4)', height: 6 }}
				range
				onChange={HandleChange}
			/>
			<div className='flex justify-between gap-2'>
				<div className='flex-1 text-center flex justify-center items-center bg-primary-10 rounded-full text-accent-2'>
					<span>{range.min}%</span>
				</div>
				-
				<div className='flex-1 text-center flex justify-center items-center bg-primary-10 rounded-full text-accent-2'>
					<span>{range.max}%</span>
				</div>
			</div>
		</div>
	);
}
