import { Typography, type TypographyProps } from '@mui/material';

export function EllipsisTypography({ ...props }: TypographyProps) {
	return <Typography overflow='hidden' textOverflow='ellipsis' whiteSpace='nowrap' {...props} />;
}
