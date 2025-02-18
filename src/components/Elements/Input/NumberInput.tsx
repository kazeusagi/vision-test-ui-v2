'use client';

import { TextField, type TextFieldProps } from '@mui/material';
import { useState } from 'react';

type Props = {
	numberValue: number;
	setNumberValue: (value: number) => void;
};

export function NumberInput({ numberValue, setNumberValue, ...props }: Props & TextFieldProps) {
	const [value, setValue] = useState(numberValue.toLocaleString());

	return (
		<TextField value={value} onChange={onChange} onBlur={onBlur} onFocus={onFocus} {...props} />
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
}
