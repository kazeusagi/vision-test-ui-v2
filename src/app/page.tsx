'use client';

import { LandoltContainer } from '@/components/Landolt/LandoltContainer';
import { ToggleTheme } from '@/components/Mui';
import { Ruler } from '@/components/Ruler';
import { SettingsSidebar } from '@/components/Sidebar/SettingsSidebar';
import { distanceAtom, loadingStatusAtom, visionAtom } from '@/utils/atoms';
import { Box, Button, TextField } from '@mui/material';
import { useAtom, useSetAtom } from 'jotai';

export default function Home() {
	const [distance, setDistance] = useAtom(distanceAtom);
	const [vision, setVision] = useAtom(visionAtom);
	const setLoadingStatus = useSetAtom(loadingStatusAtom);

	return (
		<Box height='100dvh' display='flex' flexDirection='column' p={2} gap={2}>
			<SettingsSidebar />
			<Box>
				<TextField type='number' label='距離(m)' value={distance} onChange={onChangeDistance} />
				<TextField type='number' label='視力' value={vision} onChange={onChangeVision} />
				<ToggleTheme />

				<Button onClick={() => setLoadingStatus('loading')}>loading</Button>
				<Button onClick={() => setLoadingStatus('success')}>success</Button>
				<Button onClick={() => setLoadingStatus('error')}>error</Button>
			</Box>

			<LandoltContainer />

			<Ruler />
		</Box>
	);

	function onChangeDistance(event: React.ChangeEvent<HTMLInputElement>) {
		setDistance(Number(event.target.value));
	}

	function onChangeVision(event: React.ChangeEvent<HTMLInputElement>) {
		setVision(Number(event.target.value));
	}
}
