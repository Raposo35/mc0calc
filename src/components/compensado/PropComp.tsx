import { useContext } from 'react';
import Select from '../basic/Select';
import { PropCompContext } from '@/data/context/PropCompContext';

export const PropComp = () => {
	const ctxPropComp = useContext(PropCompContext);

	const EI = ctxPropComp?.EI;

	const handleEspessuraChange = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		const newValue = event.target.value;
		ctxPropComp?.setEspessura(newValue);
	};

	const handleSelectChange = (event: any) => {
		ctxPropComp?.setDimComp(event.target.value);
	};

	const options = ['110x220', '122x244'];

	return (
		<div className="w-1/2 bg-gray-100 p-3 rounded-lg sm:w-full ">
			<h1 className="text-center text-lg p-2  dark:text-black">
				Propriedade Compensado
			</h1>

			<div className="w-full flex justify-between mb-3 p-2 bg-red-200 rounded-md  dark:text-black ">
				<span className="text-sm">Espessura (mm) = </span>
				<input
					className="w-32 rounded-md px-2 text-sm  dark:text-black"
					type="number"
					value={ctxPropComp?.espessura}
					onChange={handleEspessuraChange}
				/>
			</div>
			<div className="w-full flex justify-between p-2 bg-red-200 mb-3 rounded-md  dark:text-black ">
				<span className="text-sm">Dimensão compensado (cm) = </span>
				<Select
					options={options}
					value={ctxPropComp?.dimComp}
					onChange={handleSelectChange}
				/>
			</div>
			<div className="flex flex-col justify-between ">
				<div className="p-2 bg-red-200 mb-3 rounded-md text-sm  dark:text-black">
					Rigidez EI (kgf/cm²) = {(+EI).toExponential(2)}
				</div>
				<div className="p-2 bg-red-200 mb-3 rounded-md text-sm  dark:text-black">
					Momento admissível (kgf.m) = {ctxPropComp?.momentoAdm}
				</div>
			</div>
		</div>
	);
};
