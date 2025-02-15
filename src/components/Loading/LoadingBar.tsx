'use client';

import { loadingStatusAtom } from '@/utils/atoms';
import { Box, LinearProgress } from '@mui/material';
import { useAtom } from 'jotai';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export function LoadingBar() {
	const pathname = usePathname();

	const [loadingStatus, setLoadingStatus] = useAtom(loadingStatusAtom);

	// 画面遷移時にローディングを完了する
	useEffect(() => {
		setLoadingStatus('success');
	}, [pathname]);

	// ローディング終了時に時間差で待機状態に戻す
	useEffect(() => {
		if (loadingStatus === 'success' || loadingStatus === 'error') {
			const time = loadingStatus === 'success' ? 1000 : 4000;
			const timer = setTimeout(() => {
				setLoadingStatus('idle');
			}, time);
			return () => clearTimeout(timer);
		}
	}, [loadingStatus]);

	return (
		loadingStatus !== 'idle' && (
			<Box position='absolute' top='0' left='0' right='0'>
				<LinearProgress color={color()} variant={variant()} value={100} />
			</Box>
		)
	);

	// 色
	function color(): 'primary' | 'success' | 'error' {
		if (loadingStatus === 'success') return 'success';
		if (loadingStatus === 'error') return 'error';
		return 'primary';
	}

	// バリエーション
	function variant(): 'determinate' | 'indeterminate' {
		if (loadingStatus === 'loading') return 'indeterminate';
		return 'determinate';
	}
}
