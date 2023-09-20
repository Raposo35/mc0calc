import { useContext, useEffect } from 'react';

import { VaoCompContext } from '@/data/context/VaoCompContext';
import Barra from '../basic/Barra';
import { PropPrimContext } from '@/data/context/PropPrimContext';
import { BtnContext } from '@/data/context/BtnContext';

export const Verifica = () => {
	const ctxComp = useContext(VaoCompContext);
	const ctxPropPrim = useContext(PropPrimContext);
	const ctxBtn = useContext(BtnContext);

	const setarProlongador = () => {
		if (ctxBtn?.esc === '2' || ctxBtn?.esc === '2') ctxBtn?.setPro('');
	};

	useEffect(() => {
		setarProlongador();
	});

	return (
		<div className="w-full bg-gray-100 p-2 rounded-lg mt-5 ">
			<div className="flex justify-between mb-2">
				<h1 className="text-center text-lg p-2  dark:text-black">
					Verificações (%)
				</h1>
			</div>
			<div>
				<div className="w-full flex justify-between mb-3 p-2 bg-red-200 rounded-md  dark:text-black ">
					<div className="text-sm w-32">Compensado</div>
					<Barra percent={ctxComp?.barraComp} />
					<div>{ctxComp?.barraComp}%</div>
				</div>
				<div className="w-full flex justify-between mb-3 p-2 bg-red-200 rounded-md  dark:text-black ">
					<div className="text-sm w-32">Perfil Secundário</div>
					<Barra percent={ctxPropPrim?.barraSec} />
					<div>{ctxPropPrim?.barraSec}%</div>
				</div>
				<div className="w-full flex justify-between mb-3 p-2 bg-red-200 rounded-md  dark:text-black ">
					<div className="text-sm w-32">Perfil Primário</div>
					<Barra percent={ctxPropPrim?.barraPrim} />
					<div>{ctxPropPrim?.barraPrim}%</div>
				</div>
				<div className="w-full flex justify-between mb-3 p-2 bg-red-200 rounded-md  dark:text-black ">
					{ctxBtn?.btnHandleApoio === 'Torres' ? (
						<>
							<div className="text-sm w-32">Carga no apoio</div>
							<Barra percent={ctxPropPrim?.barraApoioTorre} />
							<div>{Math.ceil(ctxPropPrim?.barraApoioTorre)}%</div>
						</>
					) : (
						<>
							<div className="text-sm w-32">Carga no apoio</div>
							{ctxBtn?.pro === '0' ? (
								<>
									<Barra percent={ctxPropPrim?.barraApoioEsc} />
									<div>{Math.ceil(ctxPropPrim?.barraApoioEsc)}%</div>
								</>
							) : ctxBtn?.pro === '' ? (
								<>
									<Barra percent={ctxPropPrim?.barraApoioEsc} />
									<div>{Math.ceil(ctxPropPrim?.barraApoioEsc)}%</div>
								</>
							) : (
								<>
									<Barra percent={ctxPropPrim?.barraApoioPro} />
									<div>{Math.ceil(ctxPropPrim?.barraApoioPro)}%</div>
								</>
							)}
						</>
					)}
				</div>
			</div>
		</div>
	);
};
