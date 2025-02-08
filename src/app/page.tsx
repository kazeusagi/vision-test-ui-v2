import { ToggleTheme } from '@/components/Mui/ToggleTheme';
import { Paper, Typography } from '@mui/material';

export default function Home() {
	return (
		<>
			<Paper>Hello</Paper>
			<ToggleTheme />
			<Typography>1.0.0</Typography>
		</>
	);
}
