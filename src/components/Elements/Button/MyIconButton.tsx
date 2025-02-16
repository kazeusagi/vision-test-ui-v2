import { IconButton, type IconButtonProps } from '@mui/material';

// ちょっと四角くスタイリングしたボタン
export function MyIconButton({ sx, ...props }: IconButtonProps) {
	return (
		<IconButton
			size='small'
			sx={{ border: '1px solid', borderColor: 'divider', borderRadius: '10px', ...sx }}
			{...props}
		/>
	);
}
