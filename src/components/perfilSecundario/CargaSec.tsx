/* eslint-disable @next/next/no-img-element */

import { PropPrimContext } from '@/data/context/PropPrimContext';
import { useContext } from 'react';

export const CargaSec = () => {
	const ctxPropPrim = useContext(PropPrimContext);

	return (
		<div className="w-1/2 bg-gray-100 p-3 rounded-lg ">
			<h1 className="text-center text-lg p-2  dark:text-black">
				Carga atuante no perfil Secundário
			</h1>
			<div className="flex items-center justify-center mb-5 rounded-md relative ">
				<img
					src="/images/vMaximo.png"
					alt="comp"
					width={390}
					className="-mt-3"
				/>
				<span className="absolute mt-11  dark:text-black">
					{ctxPropPrim?.vaoAdotadoSec} cm
				</span>
			</div>

			<div className="p-2 bg-red-200 mb-3 rounded-md text-sm  dark:text-black">
				Carga distribuída (kgf/m) = {ctxPropPrim?.cargaDisPerfilMSec}
			</div>
		</div>
	);
};
