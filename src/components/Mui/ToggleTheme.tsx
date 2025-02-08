'use client';

import { Button, useColorScheme } from '@mui/material';

export function ToggleTheme() {
	const { mode, setMode } = useColorScheme();

	return <Button onClick={onClick}>{mode}</Button>;

	function onClick() {
		setMode(mode === 'light' ? 'dark' : 'light');
	}
}
