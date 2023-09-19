import { useContext } from 'react';
import Select from '../basic/Select';
import { PropPrimContext } from '@/data/context/PropPrimContext';

export const PropPrim = () => {
	const ctxPropPrim = useContext(PropPrimContext);

	const handleSelectChange = (event: any) => {
		ctxPropPrim?.setPerfil(event.target.value);
	};

	const options = ['C-05', 'C-7,5', 'AL-15', 'C-12', 'SH-20'];

	return (
		<div className="w-1/2 bg-gray-100 p-3 rounded-lg ">
			<h1 className="text-center text-lg p-2  dark:text-black mb-4">
				Propriedade Perfil Primário
			</h1>
			<div className="-mb-3">
				<div className="w-full flex justify-between p-2 bg-red-200 mb-3 rounded-md  dark:text-black ">
					<span className="text-sm">Tipo de viga = </span>
					<Select
						options={options}
						value={ctxPropPrim?.perfil}
						onChange={handleSelectChange}
					/>
				</div>
				<div className="flex flex-col">
					<div className="p-2 bg-red-200 mb-3 rounded-md text-sm  dark:text-black">
						Altura viga (cm) = {ctxPropPrim?.alturaViga}
					</div>
					<div className="p-2 bg-red-200 mb-3 rounded-md text-sm  dark:text-black">
						Rigidez EI (kgf/cm²) = {ctxPropPrim?.rigViga}
					</div>
					<div className="p-2 bg-red-200 mb-3 rounded-md text-sm  dark:text-black">
						Momento admissível (kgf.m) = {ctxPropPrim?.momentoViga}
					</div>
				</div>
			</div>
		</div>
	);
};
