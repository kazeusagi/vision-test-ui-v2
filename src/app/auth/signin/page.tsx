import { auth } from '@/utils/auth';
import { Box } from '@mui/material';

export default async function page() {
	const session = await auth();
	return <Box>a</Box>;
}
