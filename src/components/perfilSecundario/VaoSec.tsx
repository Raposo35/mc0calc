import { PropPrimContext } from '@/data/context/PropPrimContext';

import { useContext } from 'react';

export const VaoSec = () => {
	const ctxPropPrim = useContext(PropPrimContext);

	return (
		<div className="w-1/2 bg-gray-100 p-3 rounded-lg sm:w-full ">
			<h1 className="text-center text-lg p-2  dark:text-black">
				Vão Secundário
			</h1>
			<div className="flex flex-col">
				<div className="p-2 bg-red-200 mb-3 rounded-md text-sm  dark:text-black">
					Vão pelo momento (cm) = {Math.ceil(ctxPropPrim?.vaoSecM)}
				</div>
				<div className="p-2 bg-red-200 mb-3 rounded-md text-sm  dark:text-black">
					Vão pela flecha (cm) = {Math.ceil(ctxPropPrim?.vaoSecF)}
				</div>
				<div className="p-2 bg-red-200 mb-3 rounded-md text-sm  dark:text-black">
					Carga Total (kgf/m²) = {Math.ceil(ctxPropPrim?.pesoLajeSecM)}
				</div>
				<div className="p-2 bg-red-200 mb-3 rounded-md text-sm  dark:text-black">
					Vão máximo do perfil secundário (cm) = {ctxPropPrim?.vaoAdotadoSec}
				</div>
			</div>
		</div>
	);
};
