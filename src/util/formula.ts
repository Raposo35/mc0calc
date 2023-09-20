export function cargaLajeM(e: number) {
	const carga = (e / 100) * 2550 + 204;
	if (carga >= 408) {
		return carga.toFixed(0);
	} else if (e == 0) {
		return 0;
	} else {
		return 480;
	}
}

export function cargaLajeF(e: number) {
	const carga = (e / 100) * 2550 + 102;
	if (carga >= 408) {
		return carga.toFixed(0);
	} else if (e == 0) {
		return 0;
	} else {
		return 408;
	}
}

export function compEI(e: number) {
	const EI = Math.pow(e / 10, 3) * 100;
	const EI_result = (EI / 12) * 70000;
	if (e == 0) {
		return 0;
	} else {
		return EI_result.toFixed(0);
	}
}

export function compMomento(e: number) {
	const momento = Math.pow(e / 10, 2);
	const momento_result = (momento / 6) * 68;
	if (e == 0) {
		return 0;
	} else {
		return momento_result.toFixed(2);
	}
}

export function vaoPeloMomentoComp(carga: number, momentoAdm: number) {
	const parcial = (8 * momentoAdm) / carga;
	const resultado = Math.pow(parcial, 0.5) * 100;
	if (resultado === 0) {
		return 0;
	} else {
		return resultado;
	}
}

export function vaoPeloMomentoPerfil(carga: any, momentoAdm: any) {
	const parcial = (8 * momentoAdm) / carga;
	const resultado = Math.pow(parcial, 0.5) * 100;
	if (resultado === 0) {
		return 0;
	} else {
		return resultado;
	}
}

export function pesoLaje(e: number, cargaFlecha: number) {
	const parcial = (e / 1000) * 600;
	const resultado = parcial + cargaFlecha;
	return resultado;
}

export function flechaAdotado(pFlecha: any, LMomento: any, rigidez: any) {
	const pesoFlecha = pFlecha;
	let lvao = LMomento;
	const EI = rigidez;

	function vaoPelaFlechaComp(pesoFlecha: number, LMomento: number, EI: number) {
		const passo1 = (5 * pesoFlecha) / 100;
		const passo2 = Math.pow(LMomento, 4);
		const passo3 = (384 * EI) / 10;
		const resultado = (passo1 * passo2) / passo3;
		return resultado;
	}

	let flechaLimite = (lvao * 10) / 500 + 1;

	let flechaAtual = vaoPelaFlechaComp(pesoFlecha, lvao, EI);
	let iteracoes = 0;

	while (flechaAtual > flechaLimite) {
		lvao -= 0.1; // Reduz a carga a cada iteração
		flechaLimite = (lvao * 10) / 500 + 1;
		flechaAtual = vaoPelaFlechaComp(pesoFlecha, lvao, EI);
		iteracoes++;

		if (iteracoes > 5000) {
			console.log(
				'Não foi possível atingir a flecha admissível com as iterações fornecidas.'
			);
			break;
		}
	}

	return +lvao.toFixed(0);
}

export function espComp(maxVao: number, dimComp: string) {
	if (dimComp === '0') {
		let valor = maxVao;
		switch (true) {
			case valor >= 18.33 && valor <= 19.9: //Case 18.33 To 19.9
				return 18.33;
			case valor >= 20 && valor <= 21.9: // Case 20.0 To 21.9
				return 20;
			case valor >= 22 && valor <= 24.3: //  Case 22.0 To 24.3
				return 22;
			case valor >= 24.4 && valor <= 27.4: // Case 24.4 To 27.4
				return 24.4;
			case valor >= 27.5 && valor <= 31.3: // Case 27.5 To 31.3
				return 27.5;
			case valor >= 31.4 && valor <= 36.6: // Case 31.4 To 36.6
				return 31.4;
			case valor >= 36.7 && valor <= 43.9: // Case 36.7 To 43.9
				return 36.7;
			case valor >= 44 && valor <= 54.9: // Case 44.0 To 54.9
				return 44;
			case valor >= 55 && valor <= 73.2: // Case 55 To 73.2
				return 55;
			case valor > 73.2:
				return 73.2;
			default:
		}
		return valor;
	} else {
		const valor = maxVao;
		switch (true) {
			case valor >= 18.76 && valor <= 20.32: //18.76 To 20.32
				return 18.76;
			case valor >= 20.33 && valor <= 22.17: //20.33 To 22.17
				return 20.33;
			case valor >= 22.18 && valor <= 24.3: // 22.18 To 24.3
				return 22.18;
			case valor >= 24.4 && valor <= 27: // Case 24.4 To 27.0
				return 24.4;
			case valor >= 27.1 && valor <= 30.49: // Case 27.1 To 30.49
				return 27.1;
			case valor >= 33.5 && valor <= 34.89: // Case 30.5 To 34.89
				return 33.5;
			case valor >= 34.9 && valor <= 40.69: //  Case 34.9 To 40.69
				return 34.9;
			case valor >= 40.7 && valor <= 48.79: // Case 40.7 To 48.79
				return 40.7;
			case valor >= 48.8 && valor <= 60.99: // Case 48.8 To 60.99
				return 48.8;
			case valor >= 61 && valor <= 81.3: //  Case 61 To 81.3
				return 61;
			case valor > 81.3: // Case Is > 81.3
				return 81.3;
			default:
		}
		return valor;
	}
}

export function hViga(viga: string) {
	let altura = 0;
	switch (viga) {
		case '0':
			return (altura = 5);
		case '1':
			return (altura = 7.5);
		case '2':
			return (altura = 15);
		case '3':
			return (altura = 12);
		case '4':
			return (altura = 20);
		case '5':
			return (altura = 22.5);
		case '6':
			return (altura = 20.6);
		case '7':
			return (altura = 30.9);
		default:
			break;
	}
	return altura;
}

export function eiViga(viga: string) {
	let valor = 0;
	switch (viga) {
		case '0':
			return (valor = 15.84 * 2140672.7828746).toExponential(2);
		case '1':
			return (valor = 55.33 * 2140672.7828746).toExponential(2);
		case '2':
			return (valor = 328.57 * 713557.5942915).toExponential(2);
		case '3':
			return (valor = 252.28 * 2140672.7828746).toExponential(2);
		case '4':
			return (valor = 2317 * 713557.5942915).toExponential(2);
		case '5':
			return (valor = 2029 * 2140672.7828746).toExponential(2);
		case '6':
			return (valor = 5500 * 2140672.7828746).toExponential(2);
		case '7':
			return (valor = 4673 * 107000).toExponential(2);
		default:
			break;
	}

	return valor;
}

export function mViga(viga: string) {
	let valor = 0;
	switch (viga) {
		case '0':
			return (valor = 133);
		case '1':
			return (valor = 206);
		case '2':
			return (valor = 550);
		case '3':
			return (valor = 556);
		case '4':
			return (valor = 500);
		case '5':
			return (valor = 2240);
		case '6':
			return (valor = 3398);
		case '7':
			return (valor = 6141);
		default:
			break;
	}
	return valor;
}

export function pViga(viga: string) {
	let valor = 0;
	switch (viga) {
		case '0':
			return (valor = 6.2);
		case '1':
			return (valor = 6.5);
		case '2':
			return (valor = 4.5);
		case '3':
			return (valor = 10.2);

		default:
			break;
	}

	return valor;
}

export const isoCalc_3 = (carga: number, vao1: number, vao2: number) => {
	const v1 = vao1 / 100;
	const v2 = vao2 / 100;

	const RA = carga * (v1 / 2);
	const RB = carga * ((v1 + v2) / 2);
	const RC = carga * (v2 / 2);
	const resultado = Math.max(RA, RB, RC);

	return resultado.toFixed(0);
};

export const isoCalc_4 = (
	carga: number,
	vao1: number,
	vao2: number,
	vao3: number
) => {
	const v1 = vao1 / 100;
	const v2 = vao2 / 100;
	const v3 = vao3 / 100;

	const RA = carga * (v1 / 2);
	const RB = carga * ((v1 + v2) / 2);
	const RC = carga * ((v2 + v3) / 2);
	const RD = carga * (v3 / 2);
	const resultado = Math.max(RA, RB, RC, RD);

	return resultado.toFixed(0);
};

export const hiperCalc_3 = (carga: number, vao1: number, vao2: number) => {
	const v1 = vao1 / 100;
	const v2 = vao2 / 100;

	// caso 0: Determinar beta-10
	// Barra AB
	const R0A = (3 * carga * v1) / 8;
	const R0B1 = (5 * carga * v1) / 8;
	const M0b1 = ((carga * Math.pow(v1, 2)) / 8) * -1;

	// Barra BC
	const M0b2 = (carga * Math.pow(v2, 2)) / 8;
	const R0B2 = (5 * carga * v2) / 8;
	const R0C = (3 * carga * v2) / 8;

	const beta_10 = M0b1 + M0b2;

	// caso 1: Determinar beta-11
	// Barra AB
	const R1A = 3 / Math.pow(v1, 2);
	const R1B1 = (3 / Math.pow(v1, 2)) * -1;
	const M1b1 = 3 / v1;

	// Barra BC
	const M1b2 = 3 / v2;
	const R1B2 = 3 / Math.pow(v2, 2);
	const R1C = (3 / Math.pow(v2, 2)) * -1;

	const beta_11 = M1b1 + M1b2;

	// Determinar delta_1

	const delta_1 = (beta_10 / beta_11) * -1;

	// Determinar as reações

	const RA = R0A + R1A * delta_1;
	const RB = R0B1 + R0B2 + (R1B1 + R1B2) * delta_1;
	const RC = R0C + R1C * delta_1;

	const resultado = Math.max(RA, RB, RC);

	return resultado.toFixed(0);
};

export const hiperCalc_4 = (
	carga: number,
	vao1: number,
	vao2: number,
	vao3: number
) => {
	const v1 = vao1 / 100;
	const v2 = vao2 / 100;
	const v3 = vao3 / 100;

	// caso 0: Determinar beta-10 e beta 20
	// Barra AB
	const R0A = (3 * carga * v1) / 8;
	const R0B1 = (5 * carga * v1) / 8;
	const M0b1 = ((carga * Math.pow(v1, 2)) / 8) * -1;

	// Barra BC
	const M0b2 = (carga * Math.pow(v2, 2)) / 12;
	const R0B2 = (carga * v2) / 2;
	const R0C1 = (carga * v2) / 2;
	const M0c1 = ((carga * Math.pow(v2, 2)) / 12) * -1;

	// Barra CD
	const M0c2 = (carga * Math.pow(v3, 2)) / 8;
	const R0C2 = (5 * carga * v3) / 8;
	const R0D = (3 * carga * v3) / 8;

	const beta_10 = M0b1 + M0b2;
	const beta_20 = M0c1 + M0c2;

	// caso 1: Determinar beta-11 e beta-21
	// Barra AB
	const R1A = 3 / Math.pow(v1, 2);
	const R1B1 = (3 / Math.pow(v1, 2)) * -1;
	const M1b1 = 3 / v1;

	// Barra BC
	const M1b2 = 4 / v2;
	const R1B2 = 6 / Math.pow(v2, 2);
	const R1C1 = (6 / Math.pow(v2, 2)) * -1;
	const M1c1 = 2 / v2;

	const beta_11 = M1b1 + M1b2;
	const beta_21 = M1c1;

	// caso 2: Determinar beta-12 e beta-22

	// Barra BC
	const M2b2 = 2 / v2;
	const R2B2 = 6 / Math.pow(v2, 2);
	const R2C1 = (6 / Math.pow(v2, 2)) * -1;
	const M2c1 = 4 / v2;

	// Barra CD
	const M2c2 = 3 / v3;
	const R2C2 = 3 / Math.pow(v3, 2);
	const R2D = (3 / Math.pow(v3, 2)) * -1;

	const beta_12 = M2b2;
	const beta_22 = M2c1 + M2c2;

	// Determinar delta 1 e delta 2

	const D = beta_11 * beta_22 - beta_21 * beta_12;
	const D1 = -1 * beta_10 * beta_22 - beta_21 * (beta_20 * -1);
	const D2 = beta_11 * (beta_20 * -1) - beta_10 * -1 * beta_12;

	const delta_1 = D1 / D;
	const delta_2 = D2 / D;

	// Determinar as Reações

	const RA = R0A + R1A * delta_1;
	const RB = R0B1 + R0B2 + (R1B1 + R1B2) * delta_1 + R2B2 * delta_2;
	const RC = R0C1 + R0C2 + R1C1 * delta_1 + (R2C1 + R2C2) * delta_2;
	const RD = R0D + R2D * delta_2;

	const resultado = Math.max(RA, RB, RC, RD);

	return resultado.toFixed(0);
};

export const isoCalc_3Esc = (carga: number, vao1: number, vao2: number) => {
	const v1 = vao1 / 100;
	const v2 = vao2 / 100;

	const RA = carga * (v1 / 2);
	const RB = carga * ((v1 + v2) / 2);
	const RC = carga * (v2 / 2);

	const resultado = [RA, RB, RC];

	return resultado;
};

export const isoCalc_4Esc = (
	carga: number,
	vao1: number,
	vao2: number,
	vao3: number
) => {
	const v1 = vao1 / 100;
	const v2 = vao2 / 100;
	const v3 = vao3 / 100;

	const RA = carga * (v1 / 2);
	const RB = carga * ((v1 + v2) / 2);
	const RC = carga * ((v2 + v3) / 2);
	const RD = carga * (v3 / 2);

	const resultado = [RA, RB, RC, RD];

	return resultado;
};

export const hiperCalc_3Esc = (carga: number, vao1: number, vao2: number) => {
	const v1 = vao1 / 100;
	const v2 = vao2 / 100;

	// caso 0: Determinar beta-10
	// Barra AB
	const R0A = (3 * carga * v1) / 8;
	const R0B1 = (5 * carga * v1) / 8;
	const M0b1 = ((carga * Math.pow(v1, 2)) / 8) * -1;

	// Barra BC
	const M0b2 = (carga * Math.pow(v2, 2)) / 8;
	const R0B2 = (5 * carga * v2) / 8;
	const R0C = (3 * carga * v2) / 8;

	const beta_10 = M0b1 + M0b2;

	// caso 1: Determinar beta-11
	// Barra AB
	const R1A = 3 / Math.pow(v1, 2);
	const R1B1 = (3 / Math.pow(v1, 2)) * -1;
	const M1b1 = 3 / v1;

	// Barra BC
	const M1b2 = 3 / v2;
	const R1B2 = 3 / Math.pow(v2, 2);
	const R1C = (3 / Math.pow(v2, 2)) * -1;

	const beta_11 = M1b1 + M1b2;

	// Determinar delta_1

	const delta_1 = (beta_10 / beta_11) * -1;

	// Determinar as reações

	const RA = R0A + R1A * delta_1;
	const RB = R0B1 + R0B2 + (R1B1 + R1B2) * delta_1;
	const RC = R0C + R1C * delta_1;

	const resultado = [RA, RB, RC];

	return resultado;
};

export const hiperCalc_4Esc = (
	carga: number,
	vao1: number,
	vao2: number,
	vao3: number
) => {
	const v1 = vao1 / 100;
	const v2 = vao2 / 100;
	const v3 = vao3 / 100;

	// caso 0: Determinar beta-10 e beta 20
	// Barra AB
	const R0A = (3 * carga * v1) / 8;
	const R0B1 = (5 * carga * v1) / 8;
	const M0b1 = ((carga * Math.pow(v1, 2)) / 8) * -1;

	// Barra BC
	const M0b2 = (carga * Math.pow(v2, 2)) / 12;
	const R0B2 = (carga * v2) / 2;
	const R0C1 = (carga * v2) / 2;
	const M0c1 = ((carga * Math.pow(v2, 2)) / 12) * -1;

	// Barra CD
	const M0c2 = (carga * Math.pow(v3, 2)) / 8;
	const R0C2 = (5 * carga * v3) / 8;
	const R0D = (3 * carga * v3) / 8;

	const beta_10 = M0b1 + M0b2;
	const beta_20 = M0c1 + M0c2;

	// caso 1: Determinar beta-11 e beta-21
	// Barra AB
	const R1A = 3 / Math.pow(v1, 2);
	const R1B1 = (3 / Math.pow(v1, 2)) * -1;
	const M1b1 = 3 / v1;

	// Barra BC
	const M1b2 = 4 / v2;
	const R1B2 = 6 / Math.pow(v2, 2);
	const R1C1 = (6 / Math.pow(v2, 2)) * -1;
	const M1c1 = 2 / v2;

	const beta_11 = M1b1 + M1b2;
	const beta_21 = M1c1;

	// caso 2: Determinar beta-12 e beta-22

	// Barra BC
	const M2b2 = 2 / v2;
	const R2B2 = 6 / Math.pow(v2, 2);
	const R2C1 = (6 / Math.pow(v2, 2)) * -1;
	const M2c1 = 4 / v2;

	// Barra CD
	const M2c2 = 3 / v3;
	const R2C2 = 3 / Math.pow(v3, 2);
	const R2D = (3 / Math.pow(v3, 2)) * -1;

	const beta_12 = M2b2;
	const beta_22 = M2c1 + M2c2;

	// Determinar delta 1 e delta 2

	const D = beta_11 * beta_22 - beta_21 * beta_12;
	const D1 = -1 * beta_10 * beta_22 - beta_21 * (beta_20 * -1);
	const D2 = beta_11 * (beta_20 * -1) - beta_10 * -1 * beta_12;

	const delta_1 = D1 / D;
	const delta_2 = D2 / D;

	// Determinar as Reações

	const RA = R0A + R1A * delta_1;
	const RB = R0B1 + R0B2 + (R1B1 + R1B2) * delta_1 + R2B2 * delta_2;
	const RC = R0C1 + R0C2 + R1C1 * delta_1 + (R2C1 + R2C2) * delta_2;
	const RD = R0D + R2D * delta_2;

	const resultado = [RA, RB, RC, RD];

	return resultado;
};

export const escoras = (altura: number, escora: string) => {
	let carga: any = 0;
	if (escora === '0') {
		if (altura < 180) {
			return 'MUDAR ESCORA';
		} else if (altura >= 180 && altura < 230) {
			return (carga = 2500);
		} else if (altura >= 230 && altura < 240) {
			return (carga = 2400);
		} else if (altura >= 240 && altura < 250) {
			return (carga = 2250);
		} else if (altura >= 250 && altura < 260) {
			return (carga = 2100);
		} else if (altura >= 260 && altura < 270) {
			return (carga = 1950);
		} else if (altura >= 270 && altura < 280) {
			return (carga = 1800);
		} else {
			return 'MUDAR ESCORA';
		}
	} else if (escora === '1') {
		if (altura < 200) {
			return 'MUDAR ESCORA';
		} else if (altura >= 200 && altura < 230) {
			return (carga = 2500);
		} else if (altura >= 230 && altura < 240) {
			return (carga = 2400);
		} else if (altura >= 240 && altura < 250) {
			return (carga = 2250);
		} else if (altura >= 250 && altura < 260) {
			return (carga = 2100);
		} else if (altura >= 260 && altura < 270) {
			return (carga = 1950);
		} else if (altura >= 270 && altura < 280) {
			return (carga = 1800);
		} else if (altura >= 280 && altura < 290) {
			return (carga = 1650);
		} else if (altura >= 290 && altura < 300) {
			return (carga = 1500);
		} else if (altura >= 300 && altura < 310) {
			return (carga = 1350);
		} else if (altura >= 310 && altura < 320) {
			return (carga = 1200);
		} else {
			return 'MUDAR ESCORA';
		}
	} else if (escora === '2') {
		if (altura < 240) {
			return 'MUDAR ESCORA';
		} else if (altura >= 240 && altura < 270) {
			return (carga = 2500);
		} else if (altura >= 270 && altura < 280) {
			return (carga = 2400);
		} else if (altura >= 280 && altura < 290) {
			return (carga = 2300);
		} else if (altura >= 290 && altura < 300) {
			return (carga = 2150);
		} else if (altura >= 300 && altura < 310) {
			return (carga = 2000);
		} else if (altura >= 310 && altura < 320) {
			return (carga = 1850);
		} else if (altura >= 320 && altura < 330) {
			return (carga = 1700);
		} else if (altura >= 330 && altura < 340) {
			return (carga = 1550);
		} else if (altura >= 340 && altura < 350) {
			return (carga = 1400);
		} else if (altura >= 350 && altura < 360) {
			return (carga = 1250);
		} else if (altura >= 360 && altura < 370) {
			return (carga = 1100);
		} else if (altura >= 370 && altura < 380) {
			return (carga = 1000);
		} else if (altura >= 380 && altura < 390) {
			return (carga = 900);
		} else if (altura >= 390 && altura < 400) {
			return (carga = 800);
		} else if (altura >= 400 && altura < 410) {
			return (carga = 700);
		} else if (altura >= 410 && altura < 420) {
			return (carga = 600);
		} else {
			return 'MUDAR ESCORA';
		}
	} else if (escora === '3') {
		if (altura < 230) {
			return 'MUDAR ESCORA';
		} else if (altura >= 230 && altura < 260) {
			return (carga = 3500);
		} else if (altura >= 260 && altura < 270) {
			return (carga = 3290);
		} else if (altura >= 260 && altura < 270) {
			return (carga = 3290);
		} else if (altura >= 270 && altura < 280) {
			return (carga = 3000);
		} else if (altura >= 270 && altura < 280) {
			return (carga = 3000);
		} else if (altura >= 280 && altura < 290) {
			return (carga = 2860);
		} else if (altura >= 290 && altura < 300) {
			return (carga = 2800);
		} else if (altura >= 300 && altura < 310) {
			return (carga = 2500);
		} else if (altura >= 310 && altura < 320) {
			return (carga = 2340);
		} else if (altura >= 320 && altura < 330) {
			return (carga = 2200);
		} else if (altura >= 330 && altura < 340) {
			return (carga = 2070);
		} else if (altura >= 340 && altura < 400) {
			return (carga = 2000);
		} else {
			return 'MUDAR ESCORA';
		}
	} else if (escora === '4') {
		if (altura < 320) {
			return 'MUDAR ESCORA';
		} else if (altura >= 320 && altura < 340) {
			return (carga = 7050);
		} else if (altura >= 340 && altura < 350) {
			return (carga = 6800);
		} else if (altura >= 350 && altura < 360) {
			return (carga = 6600);
		} else if (altura >= 360 && altura < 370) {
			return (carga = 6400);
		} else if (altura >= 370 && altura < 380) {
			return (carga = 6200);
		} else if (altura >= 380 && altura < 390) {
			return (carga = 6000);
		} else if (altura >= 390 && altura < 400) {
			return (carga = 5800);
		} else if (altura >= 400 && altura < 410) {
			return (carga = 5600);
		} else if (altura >= 410 && altura < 420) {
			return (carga = 5400);
		} else if (altura >= 420 && altura < 430) {
			return (carga = 5200);
		} else if (altura >= 430 && altura < 440) {
			return (carga = 4850);
		} else if (altura >= 440 && altura < 450) {
			return (carga = 4550);
		} else if (altura >= 450 && altura < 460) {
			return (carga = 4300);
		} else if (altura >= 460 && altura < 470) {
			return (carga = 4050);
		} else if (altura >= 470 && altura < 480) {
			return (carga = 3800);
		} else if (altura >= 480 && altura < 490) {
			return (carga = 3600);
		} else if (altura >= 490 && altura < 500) {
			return (carga = 3400);
		} else if (altura >= 500 && altura < 510) {
			return (carga = 3200);
		} else if (altura >= 510 && altura < 520) {
			return (carga = 3100);
		} else if (altura >= 520 && altura < 530) {
			return (carga = 2900);
		} else if (altura >= 530 && altura < 540) {
			return (carga = 2750);
		} else if (altura >= 540 && altura < 550) {
			return (carga = 2600);
		} else if (altura >= 550 && altura < 560) {
			return (carga = 2500);
		} else if (altura >= 560 && altura < 570) {
			return (carga = 2300);
		} else if (altura >= 570 && altura < 580) {
			return (carga = 2200);
		} else if (altura >= 580 && altura < 590) {
			return (carga = 2100);
		} else if (altura >= 590 && altura < 600) {
			return (carga = 2000);
		} else {
			return 'MUDAR ESCORA';
		}
	}
	return carga;
};

export const torres = (torres: string, baseLTT: string, baseExtra: string) => {
	let carga: any = 0;
	if (torres === '0') {
		if (baseLTT === '0') {
			return (carga = 3000);
		} else if (baseLTT === '1') {
			return (carga = 3000);
		} else if (baseLTT === '2') {
			return (carga = 3000);
		} else if (baseLTT === '3') {
			return (carga = 3000);
		} else if (baseLTT === '4') {
			return (carga = 2850);
		} else if (baseLTT === '5') {
			return (carga = 2700);
		} else if (baseLTT === '6') {
			return (carga = 2550);
		} else if (baseLTT === '7') {
			return (carga = 2400);
		} else if (baseLTT === '8') {
			return (carga = 2250);
		} else if (baseLTT === '9') {
			return (carga = 2100);
		}
	} else if (torres === '1') {
		if (baseExtra === '0') {
			return (carga = 6000);
		}
	}
	return carga;
};

export const prolongador = (altura: number, escora: string) => {
	let carga: any = 0;

	if (escora === '0' || escora === '1') {
		if (altura < 240) {
			return 'MUDAR ESCORA';
		} else if (altura >= 240 && altura < 270) {
			return (carga = 2500);
		} else if (altura >= 270 && altura < 280) {
			return (carga = 2400);
		} else if (altura >= 280 && altura < 290) {
			return (carga = 2300);
		} else if (altura >= 290 && altura < 300) {
			return (carga = 2150);
		} else if (altura >= 300 && altura < 310) {
			return (carga = 2000);
		} else if (altura >= 310 && altura < 320) {
			return (carga = 1850);
		} else if (altura >= 320 && altura < 330) {
			return (carga = 1700);
		} else if (altura >= 330 && altura < 340) {
			return (carga = 1550);
		} else if (altura >= 340 && altura < 350) {
			return (carga = 1400);
		} else if (altura >= 350 && altura < 360) {
			return (carga = 1250);
		} else if (altura >= 360 && altura < 370) {
			return (carga = 1100);
		} else if (altura >= 370 && altura < 380) {
			return (carga = 1000);
		} else if (altura >= 380 && altura < 390) {
			return (carga = 900);
		} else if (altura >= 390 && altura < 400) {
			return (carga = 800);
		} else if (altura >= 400 && altura < 410) {
			return (carga = 700);
		} else if (altura >= 410 && altura < 420) {
			return (carga = 600);
		} else {
			return 'MUDAR ESCORA';
		}
	} else if (escora === '4') {
		if (altura < 500) {
			return 'SOMENTE COM H > 5,00m';
		} else if (altura >= 500 && altura < 510) {
			return (carga = 3200);
		} else if (altura >= 510 && altura < 520) {
			return (carga = 3100);
		} else if (altura >= 520 && altura < 530) {
			return (carga = 2900);
		} else if (altura >= 530 && altura < 540) {
			return (carga = 2750);
		} else if (altura >= 540 && altura < 550) {
			return (carga = 2600);
		} else if (altura >= 550 && altura < 560) {
			return (carga = 2500);
		} else if (altura >= 560 && altura < 570) {
			return (carga = 2300);
		} else if (altura >= 570 && altura < 580) {
			return (carga = 2200);
		} else if (altura >= 580 && altura < 590) {
			return (carga = 2100);
		} else if (altura >= 590 && altura < 600) {
			return (carga = 2000);
		} else {
			return 'SOMENTE COM H > 5,00m';
		}
	}
	return carga;
};
