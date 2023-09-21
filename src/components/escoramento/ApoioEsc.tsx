import { useContext, useEffect } from 'react';
import Select from '../basic/Select';
import Button from '../basic/Button';
import { BtnContext } from '@/data/context/BtnContext';
import { PropPrimContext } from '@/data/context/PropPrimContext';

export const ApoioEsc = () => {
	const ctxBtn = useContext(BtnContext);
	const ctxPropPrim = useContext(PropPrimContext);

	const handleSelectButton = () => {
		ctxBtn?.setBtnHandleApoio(
			ctxBtn.btnHandleApoio === 'Torres' ? 'Escoras' : 'Torres'
		);
	};

	const handleSelectTorre = (event: any) => {
		ctxBtn?.setTorre(event.target.value);
	};

	const handleSelectBaseLTT = (event: any) => {
		ctxBtn?.setBaseLTT(event.target.value);
	};

	const handleSelectBaseExtra = (event: any) => {
		ctxBtn?.setBaseExtra(event.target.value);
	};

	const handleSelectEsc = (event: any) => {
		ctxBtn?.setEsc(event.target.value);
	};

	const handleSelectPro = (event: any) => {
		ctxBtn?.setPro(event.target.value);
	};

	const options = ['LTT', 'LTT-EXTRA'];

	const optionsBasesLTT = [
		'BASE REGULÁVEL',
		'CORNETA 00 CM',
		'CORNETA 03 CM',
		'CORNETA 11 CM',
		'CORNETA 19 CM',
		'CORNETA 27 CM',
		'CORNETA 35 CM',
		'CORNETA 43 CM',
		'CORNETA 51 CM',
		'CORNETA 59 CM',
	];
	const optionsBaseExtra = ['BASE REGULÁVEL'];

	const optionsEsc = ['STANDARD', 'PLUS', 'EXTRA', 'SUPER', 'LUME'];
	const optionsPro = ['SEM PROLONGADOR', 'COM PROLONGADOR'];

	const setarProlongador = () => {
		if (ctxBtn?.esc === '2' || ctxBtn?.esc === '3') ctxBtn?.setPro('');
	};

	useEffect(() => {
		setarProlongador();
	});

	return (
		<div className="w-1/3 bg-gray-100 p-3 rounded-lg mt-5 ">
			<div className="flex justify-between mb-3">
				<h1 className="text-center text-lg p-2  dark:text-black">
					Propriedade Apoio
				</h1>
				<Button onClick={handleSelectButton} label={ctxBtn?.btnHandleApoio} />
			</div>
			<div>
				<div className="w-full flex justify-between mb-3 p-2 bg-red-200 rounded-md  dark:text-black ">
					<span className="text-sm">
						Altura do apoio (cm) = {Math.ceil(ctxPropPrim?.alturaApoio)}{' '}
					</span>
				</div>
				{ctxBtn?.btnHandleApoio === 'Torres' ? (
					<>
						<div className="w-full flex justify-between p-2 bg-red-200 mb-3 rounded-md  dark:text-black ">
							<span className="text-sm">Tipo de apoio =</span>
							<Select
								options={options}
								value={ctxBtn?.torre}
								onChange={handleSelectTorre}
							/>
						</div>
						<div className="w-full flex justify-between p-2 bg-red-200 mb-3 rounded-md  dark:text-black ">
							<span className="text-sm">Tipo de base =</span>

							{ctxBtn?.torre === '0' ? (
								<Select
									options={optionsBasesLTT}
									value={ctxBtn?.baseLTT}
									onChange={handleSelectBaseLTT}
								/>
							) : (
								<Select
									options={optionsBaseExtra}
									value={ctxBtn?.baseExtra}
									onChange={handleSelectBaseExtra}
								/>
							)}
						</div>

						<div className="p-2 bg-red-200 rounded-md mb-3 text-sm  dark:text-black">
							Carga Admissível (kgf)= {ctxPropPrim?.cargaTorres}
						</div>
					</>
				) : (
					<>
						<div className="w-full flex justify-between p-2 bg-red-200 mb-3 rounded-md  dark:text-black ">
							<span className="text-sm">Tipo de apoio =</span>
							<Select
								options={optionsEsc}
								value={ctxBtn?.esc}
								onChange={handleSelectEsc}
							/>
						</div>
						<div className="w-full flex justify-between p-2 bg-red-200 mb-3 rounded-md  dark:text-black ">
							{ctxBtn?.esc === '2' ? (
								<span className="text-sm">Prolongador = desabilitado</span>
							) : ctxBtn?.esc === '3' ? (
								<span className="text-sm">Prolongador = desabilitado</span>
							) : (
								<>
									<span className="text-sm">Prolongador =</span>
									<Select
										options={optionsPro}
										value={ctxBtn?.pro}
										onChange={handleSelectPro}
									/>
								</>
							)}
						</div>
						{ctxBtn?.pro === '1' ? (
							<div className="p-2 bg-red-200 rounded-md mb-3 text-sm  dark:text-black">
								Carga Admissível (kgf)= {ctxPropPrim?.cargaProlongador}
							</div>
						) : (
							<div className="p-2 bg-red-200 rounded-md mb-3 text-sm  dark:text-black">
								Carga Admissível (kgf)= {ctxPropPrim?.cargaEscora}
							</div>
						)}
					</>
				)}
			</div>
		</div>
	);
};
