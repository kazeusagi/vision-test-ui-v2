import type { AtomWithToggle } from '@/utils/jotai';
import { Menu } from '@mui/icons-material';
import { Box, Drawer } from '@mui/material';
import { useAtom } from 'jotai';
import { MyIconButton } from '../Elements';

type Props = {
	anchor: 'left' | 'right';
	openAtom: AtomWithToggle;
	openIcon?: React.ReactNode;
	content?: React.ReactNode;
};

export function Sidebar({ anchor, openAtom, content, openIcon = <Menu /> }: Props) {
	const [open, toggle] = useAtom(openAtom);

	return (
		<>
			{/* Sidebar */}
			<Drawer anchor={anchor} variant='temporary' open={open} onClose={() => toggle()}>
				<Box width='20rem' display='flex' flexDirection='column' p={1} gap={1}>
					{content}
				</Box>
			</Drawer>

			{/* Sidebar外のボタン */}
			<Box position='absolute' top={8} sx={{ ...{ [anchor]: 8 } }}>
				<MyIconButton onClick={() => toggle()}>{openIcon}</MyIconButton>
			</Box>
		</>
	);
}
