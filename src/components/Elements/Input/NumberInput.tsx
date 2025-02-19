'use client';

import { TextField, type TextFieldProps } from '@mui/material';
import { useState } from 'react';

type Props = {
	numberValue: number;
	setNumberValue: (value: number) => void;
	step?: number;
};

export function NumberInput({
	numberValue,
	setNumberValue,
	step = 1,
	...props
}: Props & TextFieldProps) {
	const [value, setValue] = useState(numberValue.toLocaleString());

	return (
		<TextField
			value={value}
			onChange={onChange}
			onBlur={onBlur}
			onFocus={onFocus}
			onKeyDown={onKeyDown}
			{...props}
		/>
	);

	function onChange(event: React.ChangeEvent<HTMLInputElement>) {
		const number = Number(event.target.value);
		if (Number.isNaN(number)) return;
		setValue(event.target.value);
		setNumberValue(number);
	}

	function onBlur() {
		setValue(numberValue.toLocaleString());
	}

	function onFocus() {
		setValue(numberValue.toString());
	}

	function onKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
		if (event.key === 'ArrowUp') {
			const newNumber = numberValue + step;
			setValue(newNumber.toString());
			setNumberValue(newNumber);
		} else if (event.key === 'ArrowDown') {
			const newNumber = numberValue - step;
			setValue(newNumber.toString());
			setNumberValue(newNumber);
		}
	}
}
