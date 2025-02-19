import type { SelectOption } from './select';

// 方向
export const LandoltDirection = {
	up: 0,
	upRight: 45,
	right: 90,
	downRight: 135,
	down: 180,
	downLeft: 225,
	left: 270,
	upLeft: 315,
} as const;
export type LandoltDirectionType = keyof typeof LandoltDirection;

// 規格
export const LandoltStandard = {
	JIS: 'JIS(日本規格)',
	ISO: 'ISO(国際規格)',
} as const;
export type LandoltStandardType = keyof typeof LandoltStandard;
export const LandoltStandardOptions: SelectOption[] = Object.entries(LandoltStandard).map(
	([value, label]) => ({ value, label }),
);
