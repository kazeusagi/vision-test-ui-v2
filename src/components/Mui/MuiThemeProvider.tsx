'use client';

import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';

type Props = {
	children: React.ReactNode;
};

export function MuiThemeProvider({ children }: Props) {
	const theme = createTheme({});

	return (
		<AppRouterCacheProvider>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				{children}
			</ThemeProvider>
		</AppRouterCacheProvider>
	);
}
