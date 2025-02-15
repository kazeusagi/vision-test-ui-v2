import { Drawer } from '@mui/material';

type Props = {
	anchor: 'left' | 'right';
};

export function Sidebar({ anchor }: Props) {
	return (
		<Drawer anchor={anchor} variant='persistent' open={true} style={{ width: '10rem' }}>
			aaaaaaaaaaaaaa
		</Drawer>
	);
}
