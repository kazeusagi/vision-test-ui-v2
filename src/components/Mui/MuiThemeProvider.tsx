'use client';

import { createTheme, CssBaseline, GlobalStyles, ThemeProvider } from '@mui/material';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';

type Props = {
	children: React.ReactNode;
};

export function MuiThemeProvider({ children }: Props) {
	const theme = createTheme({
		colorSchemes: {
			light: {
				palette: {
					background: {},
				},
			},
			dark: {
				palette: {
					background: {},
				},
			},
		},
	});

	return (
		<AppRouterCacheProvider>
			<ThemeProvider theme={theme} defaultMode='dark'>
				<CssBaseline />
				<GlobalStyles
					styles={{
						button: { textTransform: 'none !important' },
					}}
				/>
				{children}
			</ThemeProvider>
		</AppRouterCacheProvider>
	);
}
