import React, { ReactNode, createContext, useContext, useState } from 'react';

interface BtnContextType {
	btnApoio: any;
	setBtnApoio: (n: any) => void;
	btnApoioEsc: any;
	setBtnApoioEsc: (n: any) => void;
	btnIso: any;
	setBtnIso: (n: any) => void;
	btnIsoEsc: any;
	setBtnIsoEsc: (n: any) => void;
	torre: any;
	setTorre: (n: any) => void;
	baseLTT: any;
	setBaseLTT: (n: any) => void;
	baseExtra: any;
	setBaseExtra: (n: any) => void;
	btnHandleApoio: any;
	setBtnHandleApoio: (n: any) => void;
	esc: any;
	setEsc: (n: any) => void;
	pro: any;
	setPro: (n: any) => void;
	btnApoioPrim: any;
	btnIsoPrim: any;
	btnApoioEsc_: any;
	btnIsoEsc_: any;
	img: any;
}

export const BtnContext = createContext<BtnContextType | null>(null);

export const BtnContextProvider = ({ children }: { children: ReactNode }) => {
	const [btnApoio, setBtnApoio] = useState<'03 apoios' | '04 apoios'>(
		'03 apoios'
	);
	const [btnIso, setBtnIso] = useState<'Isostático' | 'Hiperestático'>(
		'Hiperestático'
	);
	const [btnApoioEsc, setBtnApoioEsc] = useState<'03 apoios' | '04 apoios'>(
		'04 apoios'
	);
	const [btnIsoEsc, setBtnIsoEsc] = useState<'Isostático' | 'Hiperestático'>(
		'Isostático'
	);

	const [torre, setTorre] = useState('0');
	const [baseLTT, setBaseLTT] = useState('0');
	const [esc, setEsc] = useState('0');
	const [pro, setPro] = useState('0');
	const [baseExtra, setBaseExtra] = useState('0');
	const [btnHandleApoio, setBtnHandleApoio] = useState<'Torres' | 'Escoras'>(
		'Torres'
	);

	const btnApoioPrim = btnApoio === '03 apoios' ? '3' : '4';
	const btnIsoPrim = btnIso === 'Isostático' ? '1' : '2';
	const btnApoioEsc_ = btnApoioEsc === '03 apoios' ? '3' : '4';
	const btnIsoEsc_ = btnIsoEsc === 'Isostático' ? '1' : '2';

	const img = btnApoioPrim + btnApoioEsc_ + btnIsoPrim + btnIsoEsc_;

	const contextValue = {
		btnApoio,
		setBtnApoio,
		btnIso,
		setBtnIso,
		btnApoioEsc,
		setBtnApoioEsc,
		btnIsoEsc,
		setBtnIsoEsc,
		torre,
		setTorre,
		baseLTT,
		setBaseLTT,
		baseExtra,
		setBaseExtra,
		btnHandleApoio,
		setBtnHandleApoio,
		esc,
		setEsc,
		pro,
		setPro,
		btnApoioPrim,
		btnIsoPrim,
		btnApoioEsc_,
		btnIsoEsc_,
		img,
	};

	return (
		<BtnContext.Provider value={contextValue}>{children}</BtnContext.Provider>
	);
};
