import { dpcmAtom, resolutionPxAtom } from '@/utils/atoms';
import { Box, Typography } from '@mui/material';
import { useAtomValue } from 'jotai';

export function Ruler() {
	const resolutionPx = useAtomValue(resolutionPxAtom);
	const dpcm = useAtomValue(dpcmAtom);

	const rulerScaleCount = Math.ceil(resolutionPx.width / dpcm);

	return (
		<Box position='absolute' bottom='0' left='0' width='100dvw' height='2rem' overflow='hidden'>
			<Typography variant='caption'>(cm)</Typography>
			{Array.from({ length: rulerScaleCount }, (_, i) => {
				const is5 = i % 5 === 0;
				return (
					<Box
						key={i}
						position='absolute'
						bottom='0'
						left={`${dpcm * i}px`}
						height={is5 ? '10px' : '5px'}
						borderLeft='1px solid'
						borderColor='text.primary'
					>
						{is5 && (
							<Typography variant='caption' position='absolute' top='-4px' left='1px'>
								{i}
							</Typography>
						)}
					</Box>
				);
			})}
		</Box>
	);
}
