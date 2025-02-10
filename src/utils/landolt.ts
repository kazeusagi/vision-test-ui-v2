type Args = {
	standard?: 'JIS' | 'ISO';
	distance: number;
	vision: number;
};
/**
 * ランドルト環の直径（ミリメートル）を算出する
 * @param standard 規格: JIS (default) または ISO
 * @param distance 距離（メートル）
 * @param vision 視力
 * @returns {number} ランドルト環の直径（ミリメートル）
 * */
export function getLandoltDiameterMm({ standard = 'JIS', distance, vision }: Args): number {
	// 1メートル先から1.0の視力で見えるランドルト環の直径（ミリメートル）
	let standardDiameterMm: number;
	// 規格によって計算方法が違う（JIS: 1.5, ISO: 約1.45）
	if (standard === 'JIS') {
		// 固定値
		standardDiameterMm = 1.5;
	} else {
		// 半径1メートルの円の1分角を認識できれば視力1.0となる
		const arcminute = 1 / (360 * 60); // 1分角
		const arcminuteRad = Math.PI / (arcminute * 2); // ラジアンは180度で1πであるため、360度基準の角度をラジアンに変換するためには2を掛ける
		const arcminuteMm = arcminuteRad * 1000; // ミリメートルに直す
		standardDiameterMm = arcminuteMm;
	}

	// 距離と視力に応じたランドルト環の直径を算出する
	let diameterMm = standardDiameterMm;
	// 距離
	diameterMm *= distance;
	// 視力
	diameterMm /= vision;

	// 0除算されていた場合には0を返す
	if (diameterMm === Number.POSITIVE_INFINITY) {
		return 0;
	}

	return diameterMm;
}

/**
 * ミリメートルをピクセル数に変換する
 * @param mm ミリメートル
 * @param dpmm 1ミリあたりのピクセル数
 * @returns {number} ピクセル数
 * */
export function mmToPx(mm: number, dpmm: number): number {
	return mm * dpmm;
}
