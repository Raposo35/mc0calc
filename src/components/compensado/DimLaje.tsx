import { PropCompContext } from '@/data/context/PropCompContext';
import { useContext } from 'react';

export const DimLaje = () => {
	const ctxPropComp = useContext(PropCompContext);

	const handleAlturaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const newValue = event.target.value;
		ctxPropComp?.setAltura(newValue);
	};

	const handlePeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const newValue = event.target.value;
		ctxPropComp?.setPeDireito(newValue);
	};

	const cargaLajeMomento = ctxPropComp?.cargaLajeMomento;
	const cargaLajeFlecha = ctxPropComp?.cargaLajeFlecha;

	return (
		<div className="w-1/2 bg-gray-100 p-3 rounded-lg sm:w-full ">
			<h1 className="text-center text-lg p-2  dark:text-black">
				Dimensão Laje
			</h1>

			<div className="w-full flex justify-between mb-3 p-2 bg-red-200 rounded-md  dark:text-black ">
				<span className="text-sm">Altura da laje (cm) = </span>
				<input
					className="w-32 rounded-md px-2 text-sm  dark:text-black"
					type="number"
					value={ctxPropComp?.altura}
					onChange={handleAlturaChange}
				/>
			</div>
			<div className="w-full flex justify-between p-2 bg-red-200 mb-3 rounded-md  dark:text-black ">
				<span className="text-sm">Pé direito (cm) = </span>
				<input
					className="w-32 rounded-md px-2 text-sm  dark:text-black "
					type="number"
					value={ctxPropComp?.peDireito}
					onChange={handlePeChange}
				/>
			</div>
			<div className="flex flex-col justify-between ">
				<div className="p-2 bg-red-200 mb-3 rounded-md text-sm  dark:text-black">
					Carga pelo Momento (kgf/m²) = {cargaLajeMomento}
				</div>
				<div className="p-2 bg-red-200 mb-3 rounded-md text-sm  dark:text-black">
					Carga pela Flecha (kgf/m²) = {cargaLajeFlecha}
				</div>
			</div>
		</div>
	);
};
