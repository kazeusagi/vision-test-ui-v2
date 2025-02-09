'use client';

import { colorSchemeAtom } from '@/utils/atoms';
import { Button, useColorScheme } from '@mui/material';
import { useSetAtom } from 'jotai';

export function ToggleTheme() {
	const { mode, setMode } = useColorScheme();
	const setColorScheme = useSetAtom(colorSchemeAtom);

	return <Button onClick={onClick}>{mode}</Button>;

	function onClick() {
		const newMode = mode === 'light' ? 'dark' : 'light';
		setMode(newMode);
		setColorScheme(newMode);
	}
}
