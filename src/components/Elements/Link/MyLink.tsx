import { type LinkProps, Link as MuiLink } from '@mui/material';
import NextLink from 'next/link';

export function MyLink({ ...props }: LinkProps) {
	return <MuiLink component={NextLink} {...props} />;
}
