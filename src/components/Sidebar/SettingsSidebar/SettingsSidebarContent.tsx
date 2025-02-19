import { AuthContainer } from '@/components/Auth';
import { MyIconButton } from '@/components/Elements';
import { DisplaySettingsForm } from '@/components/Form';
import { landoltStandardAtom, settingsSidebarOpenAtom } from '@/utils/atoms';
import { Close } from '@mui/icons-material';
import { Box, Divider } from '@mui/material';
import { useAtom, useSetAtom } from 'jotai';

export function SettingsSidebarContent() {
	const [landoltStandard, setLandoltStandard] = useAtom(landoltStandardAtom);
	const toggle = useSetAtom(settingsSidebarOpenAtom);

	return (
		<>
			{/* Header */}
			<Box display='flex' gap={1}>
				<Box flexGrow={1} overflow='hidden'>
					<AuthContainer />
				</Box>

				<Box>
					<MyIconButton onClick={() => toggle()} sx={{ flexShrink: 0 }}>
						<Close />
					</MyIconButton>
				</Box>
			</Box>

			<Divider />

			{/* Content */}
			<Box>
				<DisplaySettingsForm />
			</Box>

			<Divider />

			<Box>{/* <MySelect atom={'a'} options={LandoltStandardOptions} /> */}</Box>
		</>
	);
}
