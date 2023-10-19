import { useContext } from 'react';
import Select from '../basic/Select';

import { PropPrimContext } from '@/data/context/PropPrimContext';

export const PropSec = () => {
	const ctxPropPrim = useContext(PropPrimContext);

	const handleSelectChange = (event: any) => {
		ctxPropPrim?.setPerfilSec(event.target.value);
	};

	const options = ['C-05', 'C-7,5', 'AL-15'];

	return (
		<div className="w-1/2 bg-gray-100 p-3 rounded-lg sm:w-full">
			<h1 className="text-center text-lg p-2  dark:text-black">
				Propriedade Perfil Secundário
			</h1>

			<div className="w-full flex justify-between p-2 bg-red-200 mb-3 rounded-md  dark:text-black ">
				<span className="text-sm">Tipo de viga = </span>
				<Select
					options={options}
					value={ctxPropPrim?.perfilSec}
					onChange={handleSelectChange}
				/>
			</div>
			<div className="flex flex-col">
				<div className="p-2 bg-red-200 mb-3 rounded-md text-sm  dark:text-black">
					Altura viga (cm) = {ctxPropPrim?.alturaVigaSec}
				</div>
				<div className="p-2 bg-red-200 mb-3 rounded-md text-sm  dark:text-black">
					Rigidez EI (kgf/cm²) = {ctxPropPrim?.rigVigaSec}
				</div>
				<div className="p-2 bg-red-200 mb-3 rounded-md text-sm  dark:text-black">
					Momento admissível (kgf.m) = {ctxPropPrim?.momentoVigaSec}
				</div>
			</div>
		</div>
	);
};
