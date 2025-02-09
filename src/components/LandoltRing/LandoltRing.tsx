'use client';

import { colorSchemeAtom, distanceAtom, dpmmAtom, visionAtom } from '@/utils/atoms';
import { useAtom, useAtomValue } from 'jotai';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export function LandoltRing() {
	// 1m先から見えた場合に視力1.0となるランドルト環の大きさ(mm)を基準とする
	const ROOT_LANDOLT_DIAMETER_MM = 1.5;

	const colorScheme = useAtomValue(colorSchemeAtom);
	const [direction, setDirection] = useState<number>(0);
	const [vision, setVision] = useAtom(visionAtom);
	const [landoltDiameterPx, setLandoltDiameterPx] = useState(0);
	const distance = useAtomValue(distanceAtom);

	const dpmm = useAtomValue(dpmmAtom);

	// ランドルト環の大きさを計算
	useEffect(() => {
		const landoltDiameterMm = ROOT_LANDOLT_DIAMETER_MM * distance * (1 / vision);
		if (landoltDiameterMm === Number.POSITIVE_INFINITY) return;
		console.log(landoltDiameterMm);
		setLandoltDiameterPx(landoltDiameterMm * dpmm);
	}, [distance, vision]);

	useEffect(() => {
		setDirection(Math.floor(Math.random() * 4) * 90);
	}, [landoltDiameterPx]);

	return (
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
	);
}
