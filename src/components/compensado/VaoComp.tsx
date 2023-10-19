/* eslint-disable @next/next/no-img-element */
import { VaoCompContext } from '@/data/context/VaoCompContext';
import Image from 'next/image';
import { useContext } from 'react';

export const VaoComp = () => {
	const ctxVaoComp = useContext(VaoCompContext);
	const handleEspAdotadoChange = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		const newValue = event.target.value;
		ctxVaoComp?.setEspAdotado(newValue);
	};

	return (
		<div className="flex flex-col w-1/2 bg-gray-100 p-3  rounded-lg sm:w-full ">
			<h1 className="text-center text-lg p-2  dark:text-black">
				Vão Compensado
			</h1>

			<div className="flex items-center justify-center mb-3 rounded-md relative">
				<img src="/images/vaoComp.png" alt="comp" width={230} />
				<span className="absolute mt-6  dark:text-black">
					{ctxVaoComp?.espCompensado} cm
				</span>
			</div>
			<div className="w-full flex justify-between p-2 bg-red-200 mb-3 rounded-md  dark:text-black ">
				<span className="text-sm">
					Carga total (kg/m²) = {Math.ceil(ctxVaoComp?.pesoLajeMomento)}
				</span>
			</div>
			<div className="w-full flex justify-between mb-3 p-2 bg-red-200 rounded-md  dark:text-black ">
				<span className="text-sm">Espaçamento adotado (cm) = </span>
				<input
					className="w-32 rounded-md px-2 text-sm  dark:text-black"
					type="number"
					value={ctxVaoComp?.espAdotado}
					onChange={handleEspAdotadoChange}
				/>
			</div>
		</div>
	);
};
