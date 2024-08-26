'use client';
import Button from './Button';
import React, { forwardRef, useState } from 'react';

const FilterMultiSelectButton = forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(({ id, ...props }, ref) => {
	const [isSelected, setIsSelected] = useState(() => (id == '1' ? true : false));

	const onClick = () => {
		setIsSelected((prev) => !prev);
	};

	return <Button ref={ref} variant={'option'} {...props} isSelected={isSelected} onClick={onClick} />;
});

export default FilterMultiSelectButton;
