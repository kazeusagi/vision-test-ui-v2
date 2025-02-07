'use client';

import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';

type Props = {
	children: React.ReactNode;
};

export function MuiThemeProvider({ children }: Props) {
	const theme = createTheme({});

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			{children}
		</ThemeProvider>
	);
}
