'use client';

import { colorSchemeAtom, distanceAtom, dpmmAtom, visionAtom } from '@/utils/atoms';
import { getLandoltDiameterMm, mmToPx } from '@/utils/landolt';
import { Box } from '@mui/material';
import { useAtom, useAtomValue } from 'jotai';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export function LandoltRing() {
	const [vision, setVision] = useAtom(visionAtom);
	const colorScheme = useAtomValue(colorSchemeAtom);
	const distance = useAtomValue(distanceAtom);
	const dpmm = useAtomValue(dpmmAtom);

	const [landoltDiameterPx, setLandoltDiameterPx] = useState(0);
	const [direction, setDirection] = useState<number>(0);

	// ランドルト環の大きさを計算
	useEffect(() => {
		const landoltDiameterMm = getLandoltDiameterMm({ distance, vision });
		const landoltDiameterPx = mmToPx(landoltDiameterMm, dpmm);
		setLandoltDiameterPx(landoltDiameterPx);
	}, [distance, vision]);

	useEffect(() => {
		setDirection(Math.floor(Math.random() * 4) * 90);
	}, [landoltDiameterPx]);

	return (
		<Box
			width='20rem'
			height='20rem'
			display='flex'
			justifyContent='center'
			alignItems='center'
			border='1px solid'
			borderColor='divider'
			overflow='hidden'
		>
			<Image
				src={`/landoltRing_${colorScheme}.png`}
				width={landoltDiameterPx}
				height={landoltDiameterPx}
				alt=''
				style={{
					transform: `rotate(${direction}deg)`,
					transition: 'transform 0.5s',
				}}
			/>
		</Box>
	);
}
