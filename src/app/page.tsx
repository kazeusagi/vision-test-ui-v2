'use client';

import { LandoltRing } from '@/components/LandoltRing/LandoltRing';
import { ToggleTheme } from '@/components/Mui';
import { Ruler } from '@/components/Ruler';
import { distanceAtom, visionAtom } from '@/utils/atoms';
import { Box, Input, TextField } from '@mui/material';
import { useAtom } from 'jotai';

export default function Home() {
	const [distance, setDistance] = useAtom(distanceAtom);
	const [vision, setVision] = useAtom(visionAtom);

	return (
		<Box height='100dvh' display='flex' flexDirection='column' p={2} gap={2}>
			<Box>
				<TextField type='number' label='距離(m)' value={distance} onChange={onChangeDistance} />
				<Input type='number' />
				<TextField type='number' label='視力' value={vision} onChange={onChangeVision} />
				<ToggleTheme />
			</Box>

			<Box flexGrow={1} display='flex' justifyContent='center' alignItems='center'>
				<LandoltRing />
			</Box>

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
