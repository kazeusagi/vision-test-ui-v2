import type { LandoltDirectionType } from '@/types/landolt';
import { Button } from '@mui/material';

type Props = {
	direction: LandoltDirectionType;
};

export function AnswerButton({ direction }: Props) {
	return <Button>{direction}</Button>;
}
