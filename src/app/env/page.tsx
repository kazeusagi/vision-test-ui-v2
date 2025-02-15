'use client';

import { getEnv } from '@/utils/env';
import { Button, TextField } from '@mui/material';
import { useState } from 'react';
import { toast } from 'react-toastify';

export default function Page() {
	const [name, setName] = useState('');

	return (
		<>
			<TextField value={name} onChange={onChange} />
			<Button onClick={onClick}>Get</Button>
		</>
	);

	function onChange(event: React.ChangeEvent<HTMLInputElement>) {
		setName(event.target.value);
	}

	async function onClick() {
		const envValue = await getEnv(name);
		toast.info(envValue || 'undefined');
	}
}
