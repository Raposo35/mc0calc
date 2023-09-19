import { cargaLajeF, cargaLajeM, compEI, compMomento } from '@/util/formula';
import React, { ReactNode, createContext, useState } from 'react';

interface PropCompContextType {
	altura: any;
	setAltura: (n: any) => void;
	peDireito: any;
	setPeDireito: (n: any) => void;
	cargaLajeMomento: any;
	cargaLajeFlecha: any;
	espessura: any;
	setEspessura: (n: any) => void;
	dimComp: any;
	setDimComp: (n: any) => void;
	EI: any;
	momentoAdm: any;
}

export const PropCompContext = createContext<PropCompContextType | null>(null);

export const PropCompContextProvider = ({
	children,
}: {
	children: ReactNode;
}) => {
	const [altura, setAltura] = useState(12);
	const [peDireito, setPeDireito] = useState(286);

	const cargaLajeMomento = cargaLajeM(altura);
	const cargaLajeFlecha = cargaLajeF(altura);
	const [espessura, setEspessura] = useState(12);
	const [dimComp, setDimComp] = useState('0');

	const EI = compEI(espessura);
	const momentoAdm = compMomento(espessura);

	const contextValue = {
		altura,
		setAltura,
		peDireito,
		setPeDireito,
		cargaLajeMomento,
		cargaLajeFlecha,
		espessura,
		setEspessura,
		dimComp,
		setDimComp,
		EI,
		momentoAdm,
	};

	return (
		<PropCompContext.Provider value={contextValue}>
			{children}
		</PropCompContext.Provider>
	);
};
