import { auth, signIn } from '@/utils/auth';
import { Box, Button } from '@mui/material';

export async function AuthContainer() {
	const session = await auth();
	return (
		<Box>
			<Button onClick={onClickSignIn}>aa</Button>
		</Box>
	);

	function onClickSignIn() {
		signIn('google');
	}
}
