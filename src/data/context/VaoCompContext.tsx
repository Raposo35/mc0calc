import {
	espComp,
	flechaAdotado,
	pesoLaje,
	vaoPeloMomentoComp,
} from '@/util/formula';
import React, { ReactNode, createContext, useContext, useState } from 'react';

import { PropCompContext } from './PropCompContext';

interface VaoCompContextType {
	espAdotado: any;
	setEspAdotado: (n: any) => void;
	pesoLajeMomento: any;
	espCompensado: any;
	barraComp: any;
}

export const VaoCompContext = createContext<VaoCompContextType | null>(null);

export const VaoCompContextProvider = ({
	children,
}: {
	children: ReactNode;
}) => {
	const ctxPropComp = useContext(PropCompContext);
	const [espAdotado, setEspAdotado] = useState(44);

	const cargaMomento = ctxPropComp?.cargaLajeMomento;
	const cargaFlecha = ctxPropComp?.cargaLajeFlecha;
	const momentoAdm = ctxPropComp?.momentoAdm;
	const espessuraComp = ctxPropComp?.espessura;
	const eI = ctxPropComp?.EI;

	const pesoLajeFlecha = pesoLaje(espessuraComp, +cargaFlecha);
	const pesoLajeMomento = pesoLaje(espessuraComp, +cargaMomento);
	const lMomento = vaoPeloMomentoComp(cargaMomento, momentoAdm);

	const lFlecha = flechaAdotado(pesoLajeFlecha, lMomento, eI);

	const minVao = Math.min(lMomento, lFlecha) + 7.5;
	const valueComp = ctxPropComp?.dimComp;
	const espCompensado = espComp(minVao, valueComp).toFixed(0);

	const barraComp = Math.ceil((espAdotado / +espCompensado) * 100);

	const contextValue = {
		espAdotado,
		setEspAdotado,
		pesoLajeMomento,
		espCompensado,
		barraComp,
	};

	return (
		<VaoCompContext.Provider value={contextValue}>
			{children}
		</VaoCompContext.Provider>
	);
};
