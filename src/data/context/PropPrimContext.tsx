import {
	eiViga,
	escoras,
	flechaAdotado,
	hViga,
	hiperCalc_3,
	hiperCalc_3Esc,
	hiperCalc_4,
	hiperCalc_4Esc,
	isoCalc_3,
	isoCalc_3Esc,
	isoCalc_4,
	isoCalc_4Esc,
	mViga,
	pViga,
	prolongador,
	torres,
	vaoPeloMomentoPerfil,
} from '@/util/formula';
import React, { ReactNode, createContext, useContext, useState } from 'react';

import { BtnContext } from './BtnContext';
import { VaoCompContext } from './VaoCompContext';
import { PropCompContext } from './PropCompContext';

interface PropPrimContextType {
	perfil: any;
	setPerfil: (n: any) => void;
	vao1: any;
	setVao1: (n: any) => void;
	vao2: any;
	setVao2: (n: any) => void;
	vao3: any;
	setVao3: (n: any) => void;
	vao4: any;
	setVao4: (n: any) => void;
	vao5: any;
	setVao5: (n: any) => void;
	vao6: any;
	setVao6: (n: any) => void;
	alturaViga: any;
	rigViga: any;
	momentoViga: any;
	pesoLajePrimM: any;
	pesoLajePrimF: any;
	carga: any;
	vaoMaximo: any;
	RA: any;
	RB: any;
	RC: any;
	RD: any;
	// secundário

	perfilSec: any;
	setPerfilSec: (n: any) => void;
	alturaVigaSec: any;
	rigVigaSec: any;
	momentoVigaSec: any;
	espAdotado: any;
	pesoLajeSecM: any;
	cargaDisPerfilMSec: any;
	pesoLajeSecF: any;
	vaoSecM: any;
	vaoSecF: any;
	vaoAdotadoSec: any;
	barraSec: any;
	barraPrim: any;
	alturaApoio: any;
	selectedButton: any;
	setSelectedButton: (n: any) => void;
	valor: any;
	setValor: (n: any) => void;
	cargaEscora: any;
	barraApoioEsc: any;
	cargaTorres: any;
	barraApoioTorre: any;
	cargaProlongador: any;
	barraApoioPro: any;
}

export const PropPrimContext = createContext<PropPrimContextType | null>(null);

export const PropPrimContextProvider = ({
	children,
}: {
	children: ReactNode;
}) => {
	const ctxBtn = useContext(BtnContext);
	const ctxPropComp = useContext(PropCompContext);

	// secundário

	const ctxVaoComp = useContext(VaoCompContext);

	const [perfilSec, setPerfilSec] = useState('1');

	const alturaVigaSec = hViga(perfilSec);
	const rigVigaSec = eiViga(perfilSec);
	const momentoVigaSec = mViga(perfilSec);

	const pesoLajeComp = ctxVaoComp?.pesoLajeMomento;
	const espAdotado = ctxVaoComp?.espAdotado;
	const pesoVigaSec = pViga(perfilSec);
	const pesoTaxa = 100 / espAdotado;
	const pesoLajeSecM = pesoLajeComp + pesoVigaSec * Math.ceil(pesoTaxa);
	const pesoLajeSecF = pesoLajeComp - 102 + pesoVigaSec * Math.ceil(pesoTaxa);
	const cargaDisPerfilMSec = Math.ceil((pesoLajeSecM * espAdotado) / 100);
	const cargaDisPerfilFSec = Math.ceil((pesoLajeSecF * espAdotado) / 100);
	const vaoSecM = vaoPeloMomentoPerfil(cargaDisPerfilMSec, momentoVigaSec);
	const vaoSecF = flechaAdotado(cargaDisPerfilFSec, vaoSecM, +rigVigaSec);

	const vaoAdotadoSec = Math.min(vaoSecM, vaoSecF);

	// primário

	const [perfil, setPerfil] = useState('3');
	const [vao1, setVao1] = useState(50);
	const [vao2, setVao2] = useState(50);
	const [vao3, setVao3] = useState(50);
	const [vao4, setVao4] = useState(100);
	const [vao5, setVao5] = useState(50);
	const [vao6, setVao6] = useState(100);

	const [selectedButton, setSelectedButton] = useState<number>(1);
	const [valor, setValor] = useState<any>(null);

	const alturaViga = hViga(perfil);

	const rigViga = eiViga(perfil);
	const momentoViga = mViga(perfil);
	const pesoViga = pViga(perfil);

	const pesoLajePrimM = Math.ceil(pesoLajeSecM + pesoViga);
	const pesoLajePrimF = Math.ceil(pesoLajeSecF + pesoViga);

	const isoM_3 = isoCalc_3(pesoLajePrimM, vao1, vao2);
	const isoM_4 = isoCalc_4(pesoLajePrimM, vao1, vao2, vao3);
	const hiperM_3 = hiperCalc_3(pesoLajePrimM, vao1, vao2);
	const hiperM_4 = hiperCalc_4(pesoLajePrimM, vao1, vao2, vao3);

	const isoF_3 = isoCalc_3(pesoLajePrimF, vao1, vao2);
	const isoF_4 = isoCalc_4(pesoLajePrimF, vao1, vao2, vao3);
	const hiperF_3 = hiperCalc_3(pesoLajePrimF, vao1, vao2);
	const hiperF_4 = hiperCalc_4(pesoLajePrimF, vao1, vao2, vao3);

	const resultadoM = () => {
		if (ctxBtn?.btnApoioPrim === '3' && ctxBtn?.btnIsoPrim === '1') {
			return isoM_3;
		} else if (ctxBtn?.btnApoioPrim === '3' && ctxBtn?.btnIsoPrim === '2') {
			return hiperM_3;
		} else if (ctxBtn?.btnApoioPrim === '4' && ctxBtn?.btnIsoPrim === '1') {
			return isoM_4;
		} else {
			return hiperM_4;
		}
	};

	const resultadoF = () => {
		if (ctxBtn?.btnApoioPrim === '3' && ctxBtn?.btnIsoPrim === '1') {
			return isoF_3;
		} else if (ctxBtn?.btnApoioPrim === '3' && ctxBtn?.btnIsoPrim === '2') {
			return hiperF_3;
		} else if (ctxBtn?.btnApoioPrim === '4' && ctxBtn?.btnIsoPrim === '1') {
			return isoF_4;
		} else {
			return hiperF_4;
		}
	};

	const vaoMax = Math.max(vao1, vao2, vao3);
	const barraSec = Math.ceil((vaoMax / vaoAdotadoSec) * 100);

	const carga = resultadoM();
	const cargaF = resultadoF();

	const vaoPrimM = vaoPeloMomentoPerfil(+carga, momentoViga);
	const vaoPrimF = flechaAdotado(+cargaF, vaoPrimM, +rigViga);

	const vaoMaximo = Math.min(vaoPrimM, vaoPrimF).toFixed(0);

	const vaoMaxPrim = Math.max(vao4, vao5, vao6);
	const barraPrim = Math.ceil((vaoMaxPrim / +vaoMaximo) * 100);

	const isoF_3Esc = isoCalc_3Esc(+carga, vao4, vao5);
	const isoF_4Esc = isoCalc_4Esc(+carga, vao4, vao5, vao6);
	const hiperF_3Esc = hiperCalc_3Esc(+carga, vao4, vao5);
	const hiperF_4Esc = hiperCalc_4Esc(+carga, vao4, vao5, vao6);

	const resultadoEsc = () => {
		if (ctxBtn?.btnApoioEsc_ === '3' && ctxBtn?.btnIsoEsc_ === '1') {
			return isoF_3Esc;
		} else if (ctxBtn?.btnApoioEsc_ === '3' && ctxBtn?.btnIsoEsc_ === '2') {
			return hiperF_3Esc;
		} else if (ctxBtn?.btnApoioEsc_ === '4' && ctxBtn?.btnIsoEsc_ === '1') {
			return isoF_4Esc;
		} else {
			return hiperF_4Esc;
		}
	};

	const cargas = resultadoEsc();

	const RA = cargas[0];
	const RB = cargas[1];
	const RC = cargas[2];
	const RD = cargas[3];

	const alturaApoio =
		ctxPropComp?.peDireito -
		ctxPropComp?.altura -
		alturaViga -
		alturaVigaSec -
		ctxPropComp?.espessura / 10;

	const cargaEscora = escoras(alturaApoio, ctxBtn?.esc);
	const cargaProlongador = prolongador(alturaApoio, ctxBtn?.esc);

	const barraApoioEsc = (valor / cargaEscora) * 100;
	const barraApoioPro = (valor / cargaProlongador) * 100;

	console.log(cargaProlongador);

	const cargaTorres = torres(ctxBtn?.torre, ctxBtn?.baseLTT, ctxBtn?.baseExtra);

	const barraApoioTorre = Math.ceil((valor / cargaTorres) * 100);

	const contextValue = {
		perfil,
		setPerfil,
		alturaViga,
		rigViga,
		momentoViga,
		pesoLajePrimM,
		pesoLajePrimF,
		vao1,
		setVao1,
		vao2,
		setVao2,
		vao3,
		setVao3,
		vao4,
		setVao4,
		vao5,
		setVao5,
		vao6,
		setVao6,
		carga,
		vaoMaximo,
		RA,
		RB,
		RC,
		RD,
		barraPrim,
		// secundário
		perfilSec,
		setPerfilSec,
		alturaVigaSec,
		rigVigaSec,
		momentoVigaSec,
		espAdotado,
		pesoLajeSecM,
		cargaDisPerfilMSec,
		pesoLajeSecF,
		vaoSecM,
		vaoSecF,
		vaoAdotadoSec,
		barraSec,
		alturaApoio,
		selectedButton,
		setSelectedButton,
		valor,
		setValor,
		cargaEscora,
		barraApoioEsc,
		cargaTorres,
		barraApoioTorre,
		cargaProlongador,
		barraApoioPro,
	};

	return (
		<PropPrimContext.Provider value={contextValue}>
			{children}
		</PropPrimContext.Provider>
	);
};
