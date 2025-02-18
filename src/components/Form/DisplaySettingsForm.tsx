'use client';

import { displayInchAtom, dpiAtom, resolutionPxAtom } from '@/utils/atoms';
import { Close, Monitor } from '@mui/icons-material';
import {
	Box,
	Button,
	Dialog,
	DialogContent,
	DialogContentText,
	DialogTitle,
	FormControl,
	FormLabel,
	TextField,
	Typography,
} from '@mui/material';
import { useAtom, useAtomValue } from 'jotai';
import { useState } from 'react';
import { NumberInput } from '../Elements';

export function DisplaySettingsForm() {
	const [resolutionPx, setResolutionPx] = useAtom(resolutionPxAtom);
	const [displayInch, setDisplayInch] = useAtom(displayInchAtom);

	const dpi = useAtomValue(dpiAtom);

	const [open, setOpen] = useState(false);

	return (
		<>
			{/* ダイアログを開くボタン */}
			<Button variant='outlined' startIcon={<Monitor />} onClick={toggle} fullWidth>
				ディスプレイ設定
			</Button>

			{/* ダイアログ */}
			<Dialog open={open}>
				<DialogTitle display='flex' alignItems='center' gap={2}>
					<Monitor fontSize='large' />
					ディスプレイ設定
				</DialogTitle>
				<DialogContent sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
					<DialogContentText>ディスプレイ設定を変更できます。</DialogContentText>

					<FormControl sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
						<FormLabel>解像度</FormLabel>
						<Box display='flex' alignItems='center' gap={1}>
							<NumberInput
								label='幅 (px)'
								numberValue={resolutionPx.width}
								setNumberValue={setResolutionPxWidth}
							/>
							<Typography variant='h4'>×</Typography>
							<NumberInput
								label='高さ (px)'
								numberValue={resolutionPx.height}
								setNumberValue={setResolutionPxHeight}
							/>
						</Box>
					</FormControl>

					<FormControl sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
						<FormLabel>サイズ</FormLabel>
						<NumberInput label='inch' numberValue={displayInch} setNumberValue={setDisplayInch} />
					</FormControl>

					<FormControl sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
						<FormLabel>DPI（自動算出）</FormLabel>
						<TextField value={dpi} disabled />
					</FormControl>

					<Button variant='outlined' onClick={toggle} startIcon={<Close />}>
						閉じる
					</Button>
				</DialogContent>
			</Dialog>
		</>
	);

	function toggle() {
		setOpen((prev) => !prev);
	}

	function setResolutionPxHeight(number: number) {
		setResolutionPx({ ...resolutionPx, height: number });
	}
	function setResolutionPxWidth(number: number) {
		setResolutionPx({ ...resolutionPx, width: number });
	}

	function onChangeDisplayInch(event: React.ChangeEvent<HTMLInputElement>) {
		const number = Number(event.target.value);
		if (Number.isNaN(number)) return;
		setDisplayInch(number);
	}
}
