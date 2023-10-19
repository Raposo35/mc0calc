import React, { useContext } from 'react';
import Button from '../basic/Button';

import { PropPrimContext } from '@/data/context/PropPrimContext';
import { BtnContext } from '@/data/context/BtnContext';

export const ApoioSec = () => {
	const ctxPropPrim = useContext(PropPrimContext);
	const ctxBtn = useContext(BtnContext);

	const handleBtnApoio = () => {
		ctxBtn?.setBtnApoio(
			ctxBtn.btnApoio === '03 apoios' ? '04 apoios' : '03 apoios'
		);
	};
	const handleBtnIso = () => {
		ctxBtn?.setBtnIso(
			ctxBtn.btnIso === 'Isostático' ? 'Hiperestático' : 'Isostático'
		);
	};

	const handleVao1Change = (event: React.ChangeEvent<HTMLInputElement>) => {
		const newValue = event.target.value;
		ctxPropPrim?.setVao1(newValue);
	};
	const handleVao2Change = (event: React.ChangeEvent<HTMLInputElement>) => {
		const newValue = event.target.value;
		ctxPropPrim?.setVao2(newValue);
	};
	const handleVao3Change = (event: React.ChangeEvent<HTMLInputElement>) => {
		const newValue = event.target.value;
		ctxPropPrim?.setVao3(newValue);
	};

	return (
		<div className="w-1/2 bg-gray-100 p-3 rounded-lg sm:w-full ">
			<div className="flex items-center px-2 justify-between ">
				<h1 className="text-center text-lg py-4  dark:text-black">
					Apoio Secundário
				</h1>
				<div className="flex gap-3 ">
					<Button onClick={handleBtnApoio} label={ctxBtn?.btnApoio} />
					<Button onClick={handleBtnIso} label={ctxBtn?.btnIso} />
				</div>
			</div>

			<div className="flex flex-col">
				<div className="w-full flex justify-between mb-3 p-2 bg-red-200 rounded-md  dark:text-black ">
					<span className="text-sm">Vão 01 (cm) = </span>
					<input
						className="w-32 rounded-md px-2 text-sm  dark:text-black"
						type="number"
						value={ctxPropPrim?.vao1}
						onChange={handleVao1Change}
					/>
				</div>
				<div className="w-full flex justify-between mb-3 p-2 bg-red-200 rounded-md  dark:text-black ">
					<span className="text-sm">Vão 02 (cm) = </span>
					<input
						className="w-32 rounded-md px-2 text-sm  dark:text-black"
						type="number"
						value={ctxPropPrim?.vao2}
						onChange={handleVao2Change}
					/>
				</div>
				<div className="w-full flex justify-between mb-3 p-2 bg-red-200 rounded-md  dark:text-black ">
					{ctxBtn?.btnApoio === '04 apoios' ? (
						<>
							<span className="text-sm">Vão 03 (cm) = </span>
							<input
								className="w-32 rounded-md px-2 text-sm  dark:text-black"
								type="number"
								value={ctxPropPrim?.vao3}
								onChange={handleVao3Change}
							/>
						</>
					) : (
						<span className="text-sm">Vão desabilitado</span>
					)}
				</div>

				<div className="p-2 bg-red-200 rounded-md text-sm  dark:text-black">
					Vão máximo do perfil primário (cm) = {ctxPropPrim?.vaoMaximo}
				</div>
			</div>
		</div>
	);
};
