import type { Resolution } from '@/types/resolution';
import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';
import type { Session } from 'next-auth';

// 認証
export const sessionAtom = atom<Session | null>(null);

// ランドルト環の大きさを算出するのに必要
export const resolutionPxAtom = atomWithStorage<Resolution>('resolutionPx', {
	width: 1920,
	height: 1080,
});
export const displayInchAtom = atomWithStorage('displayInch', 24.5);
export const distanceAtom = atomWithStorage('distance', 1);
export const visionAtom = atom(1);

// Theme
export const colorSchemeAtom = atomWithStorage<'light' | 'dark'>('colorScheme', 'dark');

// 拡張atom
// 認証
export const isSignedInAtom = atom((get) => get(sessionAtom) !== null);

// ランドルト環の大きさを算出するのに必要
export const dpiAtom = atom((get) => {
	// getter: resolutionとdisplayInchからdpiを算出して返す
	const diagonalPx = Math.sqrt(
		get(resolutionPxAtom).width ** 2 + get(resolutionPxAtom).height ** 2,
	);
	return diagonalPx / get(displayInchAtom);
});
export const dpcmAtom = atom((get) => {
	// getter: dpiをdpcm(dot per cm)に変換して返す
	return get(dpiAtom) / 2.54;
});
export const dpmmAtom = atom((get) => {
	// getter: dpiをdpmm(dot per mm)に変換して返す
	return get(dpiAtom) / 25.4;
});
