import { AuthContainer } from '@/components/Auth';
import { MyIconButton } from '@/components/Elements';
import { settingsSidebarOpenAtom } from '@/utils/atoms';
import { Close } from '@mui/icons-material';
import { Box, Divider } from '@mui/material';
import { useSetAtom } from 'jotai';

export function SettingsSidebarContent() {
	const toggle = useSetAtom(settingsSidebarOpenAtom);

	return (
		<>
			{/* Header */}
			<Box display='flex' gap={1}>
				<Box overflow='hidden'>
					<AuthContainer />
				</Box>

				<Box>
					<MyIconButton onClick={() => toggle()} sx={{ flexShrink: 0 }}>
						<Close />
					</MyIconButton>
				</Box>
			</Box>

			<Divider />
		</>
	);
}
