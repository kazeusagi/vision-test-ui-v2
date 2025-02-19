import type { SelectOption } from '@/types/select';
import type { SelectChangeEvent } from '@mui/material';
import { useAtom, type PrimitiveAtom } from 'jotai';

type Props<T> = {
	atom: PrimitiveAtom<T>;
	options: SelectOption[];
};

export function MySelect<T>({ atom, options }: Props<T>) {
	const [value, setValue] = useAtom(atom);

	return (
		<></>
		// <Select value={value} onChange={onChange}>
		// 	{options.map((option) => (
		// 		<MenuItem key={option.value} value={option.value}>
		// 			{option.label}
		// 		</MenuItem>
		// 	))}
		// </Select>
	);

	function onChange(event: SelectChangeEvent) {
		setValue(event.target.value as T);
	}
}
