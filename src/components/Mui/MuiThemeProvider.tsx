'use client';

import { createTheme, CssBaseline, GlobalStyles, ThemeProvider } from '@mui/material';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import InitColorSchemeScript from '@mui/material/InitColorSchemeScript';

type Props = {
	children: React.ReactNode;
};

export function MuiThemeProvider({ children }: Props) {
	const theme = createTheme({
		defaultColorScheme: 'light',
		cssVariables: {
			colorSchemeSelector: 'class',
		},
		colorSchemes: {
			light: {
				palette: {
					background: {
						default: '#ffffff',
						paper: '#f6f6f7',
					},
				},
			},
			dark: {
				palette: {
					text: {
						primary: '#dfdfd6',
					},
					background: {
						default: '#1b1b1f',
						paper: '#0b0b0e',
					},
				},
			},
		},
	});

	return (
		<AppRouterCacheProvider options={{ enableCssLayer: true }}>
			<InitColorSchemeScript modeStorageKey='theme-mode' attribute='class' />
			<ThemeProvider theme={theme} modeStorageKey='theme-mode' defaultMode='light'>
				<CssBaseline />
				<GlobalStyles
					styles={{
						// デフォルトで大文字になってしまうため、ボタンのテキスト変換を無効化
						button: { textTransform: 'none !important' },
					}}
				/>
				{children}
			</ThemeProvider>
		</AppRouterCacheProvider>
	);
}
