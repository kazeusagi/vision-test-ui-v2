// https://jotai.org/docs/recipes/atom-with-toggle

import { type WritableAtom, atom } from 'jotai';

export type AtomWithToggle = WritableAtom<boolean, [boolean?], void>;

export function atomWithToggle(initialValue?: boolean): AtomWithToggle {
	const anAtom = atom(initialValue, (get, set, nextValue?: boolean) => {
		const update = nextValue ?? !get(anAtom);
		set(anAtom, update);
	});

	return anAtom as AtomWithToggle;
}
