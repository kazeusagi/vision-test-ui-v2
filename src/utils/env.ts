export async function getEnv(name: string) {
	if (isServer()) {
		return process.env[name];
	}
	const response = await fetch(`/api/env?name=${name}`);
	const text = await response.text();
	return text;
}

function isServer() {
	return typeof window === 'undefined';
}
