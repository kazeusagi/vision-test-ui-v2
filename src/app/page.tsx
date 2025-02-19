'use client';

import { LandoltRing } from '@/components/LandoltRing/LandoltRing';
import { ToggleTheme } from '@/components/Mui';
import { Ruler } from '@/components/Ruler';
import { SettingsSidebar } from '@/components/Sidebar/SettingsSidebar';
import { distanceAtom, landoltDirectionAtom, loadingStatusAtom, visionAtom } from '@/utils/atoms';
import { Box, Button, TextField } from '@mui/material';
import { useAtom, useAtomValue, useSetAtom } from 'jotai';

export default function Home() {
	const [distance, setDistance] = useAtom(distanceAtom);
	const [vision, setVision] = useAtom(visionAtom);
	const landoltDirection = useAtomValue(landoltDirectionAtom);
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

			<Box
				flexGrow={1}
				display='flex'
				flexDirection='column'
				justifyContent='center'
				alignItems='center'
			>
				<Box>
					<Button variant='contained' onClick={() => onClick('up')}>
						↑
					</Button>
				</Box>
				<Box display='flex' justifyContent='center' alignItems='center'>
					<Button variant='contained' onClick={() => onClick('left')}>
						←
					</Button>
					<LandoltRing />
					<Button variant='contained' onClick={() => onClick('right')}>
						→
					</Button>
				</Box>
				<Box>
					<Button variant='contained' onClick={() => onClick('down')}>
						↓
					</Button>
				</Box>
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

	function onClick(direction: string) {
		if (direction === landoltDirection) setVision((prev) => prev + 0.1);
		else setVision((prev) => prev - 0.1);
	}
}
