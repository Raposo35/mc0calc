/* eslint-disable @next/next/no-img-element */

import { PropPrimContext } from '@/data/context/PropPrimContext';
import { useContext } from 'react';
import Button from '../basic/Button';
import { BtnContext } from '@/data/context/BtnContext';
import ButtonCarga from '../basic/ButtonCarga';

export const CargaEsc = () => {
	const ctxPropPrim = useContext(PropPrimContext);
	const ctxBtn = useContext(BtnContext);

	const handleButtonClick3 = (button: number, value: any) => {
		ctxPropPrim?.setSelectedButton3(button);
		const valor = ctxPropPrim?.setValor(value);
		return valor;
	};

	const handleButtonClick4 = (button: number, value: any) => {
		ctxPropPrim?.setSelectedButton4(button);
		const valor = ctxPropPrim?.setValor(value);
		return valor;
	};

	const handleBtnApoio1 = () => {
		ctxBtn?.setBtnApoioEsc(
			ctxBtn?.btnApoioEsc === '03 apoios' ? '04 apoios' : '03 apoios'
		);
	};
	const handleBtnIso1 = () => {
		ctxBtn?.setBtnIsoEsc(
			ctxBtn?.btnIsoEsc === 'Isostático' ? 'Hiperestático' : 'Isostático'
		);
	};

	const handleVao4Change = (event: React.ChangeEvent<HTMLInputElement>) => {
		const newValue = event.target.value;
		ctxPropPrim?.setVao4(newValue);
	};
	const handleVao5Change = (event: React.ChangeEvent<HTMLInputElement>) => {
		const newValue = event.target.value;
		ctxPropPrim?.setVao5(newValue);
	};
	const handleVao6Change = (event: React.ChangeEvent<HTMLInputElement>) => {
		const newValue = event.target.value;
		ctxPropPrim?.setVao6(newValue);
	};

	return (
		<div className="w-full bg-gray-100 p-4 rounded-lg  ">
			<div className="flex justify-end">
				<div className="flex gap-3">
					<h1 className=" flex-1 text-lg p-2 mr-4 dark:text-black">
						Apoio primário
					</h1>
					<Button onClick={handleBtnApoio1} label={ctxBtn?.btnApoioEsc} />
					<Button onClick={handleBtnIso1} label={ctxBtn?.btnIsoEsc} />
				</div>
			</div>
			{ctxBtn?.btnApoioPrim === '3' && ctxBtn.btnApoioEsc_ === '3' ? (
				<div className="flex justify-center mt-4 rounded-md h-3/4">
					<img
						src={`images/${ctxBtn?.img}.png`}
						alt="sec"
						width={700}
						className="relative"
					/>
					<span className="absolute mt-12 -ml-64  dark:text-black lg:mt-14 ">
						{ctxPropPrim?.vao1} cm
					</span>
					<span className="absolute mt-12 ml-40  dark:text-black lg:mt-14 ">
						{ctxPropPrim?.vao2} cm
					</span>
					<div className="absolute mt-40 mr-4 -rotate-90 dark:text-black lg:mt-44 lg:mr-4">
						<input
							type="number"
							className=" w-14 text-right cursor-pointer"
							value={ctxPropPrim?.vao4}
							onChange={handleVao4Change}
						/>
						<span>cm</span>
					</div>
					<div className="absolute mt-80 mr-4 -rotate-90 dark:text-black lg:mt-96 lg:mr-4">
						<input
							type="number"
							className=" w-14 text-right cursor-pointer"
							value={ctxPropPrim?.vao5}
							onChange={handleVao5Change}
						/>
						<span>cm</span>
					</div>
				</div>
			) : (
				false
			)}
			{ctxBtn?.btnApoioPrim === '3' && ctxBtn.btnApoioEsc_ === '4' ? (
				<div className="flex justify-center mt-4 rounded-md h-3/4 relative">
					<img src={`images/${ctxBtn?.img}.png`} alt="sec" width={700} />
					<span className="absolute mt-12 -ml-60  dark:text-black lg:mt-14 lg:-ml-60">
						{ctxPropPrim?.vao1} cm
					</span>
					<span className="absolute mt-12 ml-40  dark:text-black lg:mt-14 lg:ml-40">
						{ctxPropPrim?.vao2} cm
					</span>
					<div className="absolute mt-40  mr-4 -rotate-90 dark:text-black lg:mt-44  lg:mr-4">
						<input
							type="number"
							className=" w-14 text-right cursor-pointer"
							value={ctxPropPrim?.vao4}
							onChange={handleVao4Change}
						/>
						<span>cm</span>
					</div>
					<div className="absolute mt-80 mr-4 -rotate-90 dark:text-black lg:mt-96 lg:mr-4 ">
						<input
							type="number"
							className=" w-14 text-right cursor-pointer"
							value={ctxPropPrim?.vao5}
							onChange={handleVao5Change}
						/>
						<span>cm</span>
					</div>
					<div className="absolute bottom-32 mr-4 -rotate-90 dark:text-black lg:bottom-36 lg:mr-4">
						<input
							type="number"
							className=" w-14 text-right cursor-pointer"
							value={ctxPropPrim?.vao6}
							onChange={handleVao6Change}
						/>
						<span>cm</span>
					</div>
				</div>
			) : (
				false
			)}
			{ctxBtn?.btnApoioPrim === '4' && ctxBtn.btnApoioEsc_ === '3' ? (
				<div className="flex justify-center mt-4 rounded-md h-3/4 relative">
					<img src={`images/${ctxBtn?.img}.png`} alt="sec" width={780} />
					<span className="absolute mt-8 -ml-96  dark:text-black lg:mt-11 lg:-ml-96">
						{ctxPropPrim?.vao1} cm
					</span>
					<span className="absolute mt-8  dark:text-black lg:mt-11 ">
						{ctxPropPrim?.vao2} cm
					</span>
					<span className="absolute mt-8 -mr-72  dark:text-black lg:mt-11 lg:-mr-96 ">
						{ctxPropPrim?.vao3} cm
					</span>
					<div className="absolute mt-32 mr-44 -rotate-90 dark:text-black lg:mt-36 lg:-ml-9">
						<input
							type="number"
							className=" w-14 h-3 lg:h5 text-right cursor-pointer"
							value={ctxPropPrim?.vao4}
							onChange={handleVao4Change}
						/>
						<span>cm</span>
					</div>
					<div className="absolute mt-72 mr-44 -rotate-90 dark:text-black lg:mt-80 lg:-ml-9">
						<input
							type="number"
							className=" w-14 h-3 lg:h5 text-right cursor-pointer"
							value={ctxPropPrim?.vao5}
							onChange={handleVao5Change}
						/>
						<span>cm</span>
					</div>
				</div>
			) : (
				false
			)}
			{ctxBtn?.btnApoioPrim === '4' && ctxBtn.btnApoioEsc_ === '4' ? (
				<div className="flex justify-center mt-4 rounded-md h-3/4 relative">
					<img src={`images/${ctxBtn?.img}.png`} alt="sec" width={790} />
					<span className="absolute mt-9 -ml-80  dark:text-black lg:mt-12 lg:-ml-96">
						{ctxPropPrim?.vao1} cm
					</span>
					<span className="absolute mt-9 dark:text-black lg:mt-12">
						{ctxPropPrim?.vao2} cm
					</span>
					<span className="absolute mt-9 -mr-72 dark:text-black lg:mt-12 lg:-mr-96">
						{ctxPropPrim?.vao3} cm
					</span>
					<div className="absolute mt-32 -ml-44 -rotate-90 dark:text-black lg:mt-36  lg:-ml-52">
						<input
							type="number"
							className=" w-14 h-3 lg:h-5 text-right cursor-pointer"
							value={ctxPropPrim?.vao4}
							onChange={handleVao4Change}
						/>
						<span>cm</span>
					</div>
					<div className="absolute mt-72 -ml-44 -rotate-90 dark:text-black lg:mt-80 lg:-ml-52">
						<input
							type="number"
							className=" w-14 h-3 lg:h-5  text-right cursor-pointer"
							value={ctxPropPrim?.vao5}
							onChange={handleVao5Change}
						/>
						<span>cm</span>
					</div>
					<div className="absolute bottom-24 -ml-44 -rotate-90 dark:text-black lg:bottom-28 lg:-ml-52">
						<input
							type="number"
							className=" w-14 h-3 lg:h-5  text-right cursor-pointer"
							value={ctxPropPrim?.vao6}
							onChange={handleVao6Change}
						/>
						<span>cm</span>
					</div>
				</div>
			) : (
				false
			)}

			{ctxBtn?.btnApoioEsc_ === '3' ? (
				<div className=" w-full gap-3 flex justify-between mt-5 rounded-md  bg-red-200">
					<ButtonCarga
						label={`Carga apoio RA (kgf) = ${Math.ceil(ctxPropPrim?.RA)}`}
						isSelected={ctxPropPrim?.selectedButton3 === 1}
						onClick={() => handleButtonClick3(1, Math.ceil(ctxPropPrim?.RA))}
						value={ctxPropPrim?.valor}
					/>
					<ButtonCarga
						label={`Carga apoio RB (kgf) = ${Math.ceil(ctxPropPrim?.RB)}`}
						isSelected={ctxPropPrim?.selectedButton3 === 2}
						onClick={() => handleButtonClick3(2, Math.ceil(ctxPropPrim?.RB))}
						value={ctxPropPrim?.valor}
					/>
					<ButtonCarga
						label={`Carga apoio RC (kgf) = ${Math.ceil(ctxPropPrim?.RC)}`}
						isSelected={ctxPropPrim?.selectedButton3 === 3}
						onClick={() => handleButtonClick3(3, Math.ceil(ctxPropPrim?.RC))}
						value={ctxPropPrim?.valor}
					/>
				</div>
			) : (
				<div className=" w-full gap-3 flex justify-between mt-5 rounded-md  bg-red-200">
					<ButtonCarga
						label={`Carga apoio RA (kgf) = ${Math.ceil(ctxPropPrim?.RA)}`}
						isSelected={ctxPropPrim?.selectedButton4 === 1}
						onClick={() => handleButtonClick4(1, Math.ceil(ctxPropPrim?.RA))}
						value={ctxPropPrim?.valor}
					/>
					<ButtonCarga
						label={`Carga apoio RB (kgf) = ${Math.ceil(ctxPropPrim?.RB)}`}
						isSelected={ctxPropPrim?.selectedButton4 === 2}
						onClick={() => handleButtonClick4(2, Math.ceil(ctxPropPrim?.RB))}
						value={ctxPropPrim?.valor}
					/>
					<ButtonCarga
						label={`Carga apoio RC (kgf) = ${Math.ceil(ctxPropPrim?.RC)}`}
						isSelected={ctxPropPrim?.selectedButton4 === 3}
						onClick={() => handleButtonClick4(3, Math.ceil(ctxPropPrim?.RC))}
						value={ctxPropPrim?.valor}
					/>

					<ButtonCarga
						label={`Carga apoio RD (kgf) = ${Math.ceil(ctxPropPrim?.RD)}`}
						isSelected={ctxPropPrim?.selectedButton4 === 4}
						onClick={() => handleButtonClick4(4, Math.ceil(ctxPropPrim?.RD))}
						value={ctxPropPrim?.valor}
					/>
				</div>
			)}
		</div>
	);
};
