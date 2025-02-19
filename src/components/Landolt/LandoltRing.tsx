'use client';

import {
	colorSchemeAtom,
	distanceAtom,
	dpmmAtom,
	landoltDirectionAtom,
	visionAtom,
} from '@/utils/atoms';
import { getLandoltDiameterMm, mmToPx } from '@/utils/landolt';
import { Box } from '@mui/material';
import { useAtom, useAtomValue } from 'jotai';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export function LandoltRing() {
	const [landoltDirection, setLandoltDirectionAtom] = useAtom(landoltDirectionAtom);
	const [vision, setVision] = useAtom(visionAtom);
	const colorScheme = useAtomValue(colorSchemeAtom);
	const distance = useAtomValue(distanceAtom);
	const dpmm = useAtomValue(dpmmAtom);

	const [landoltDiameterPx, setLandoltDiameterPx] = useState(0);

	// ランドルト環の大きさを計算
	useEffect(() => {
		const landoltDiameterMm = getLandoltDiameterMm({ distance, vision });
		const landoltDiameterPx = mmToPx(landoltDiameterMm, dpmm);
		setLandoltDiameterPx(landoltDiameterPx);
	}, [distance, vision]);

	useEffect(() => {
		const rand = Math.floor(Math.random() * 4);
		if (rand === 0) setLandoltDirectionAtom('up');
		if (rand === 1) setLandoltDirectionAtom('right');
		if (rand === 2) setLandoltDirectionAtom('down');
		if (rand === 3) setLandoltDirectionAtom('left');
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
				alt=''
				src={`/landoltRing_${colorScheme}.png`}
				width={landoltDiameterPx}
				height={landoltDiameterPx}
				priority
				style={{
					transform: `rotate(${getRotate()}deg)`,
				}}
			/>
		</Box>
	);

	function getRotate() {
		if (landoltDirection === 'up') return 0;
		if (landoltDirection === 'right') return 90;
		if (landoltDirection === 'down') return 180;
		if (landoltDirection === 'left') return 270;
	}
}
