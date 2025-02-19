import { landoltDirectionAtom, visionAtom } from '@/utils/atoms';
import { Box, Button } from '@mui/material';
import { useAtomValue, useSetAtom } from 'jotai';
import { AnswerButton } from './AnswerButton';
import { LandoltRing } from './LandoltRing';

export function LandoltContainer() {
	const landoltDirection = useAtomValue(landoltDirectionAtom);
	const setVision = useSetAtom(visionAtom);

	return (
		<Box
			flexGrow={1}
			display='flex'
			flexDirection='column'
			justifyContent='center'
			alignItems='center'
		>
			<Box>
				<AnswerButton direction='upLeft' />
				<AnswerButton direction='up' />
				<AnswerButton direction='upRight' />
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
	);

	function onClick(direction: string) {
		if (direction === landoltDirection) setVision((prev) => prev + 0.1);
		else setVision((prev) => prev - 0.1);
	}
}
