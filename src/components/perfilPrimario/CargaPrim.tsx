/* eslint-disable @next/next/no-img-element */

import { BtnContext } from '@/data/context/BtnContext';
import { PropPrimContext } from '@/data/context/PropPrimContext';
import { useContext } from 'react';

export const CargaPrim = () => {
	const ctxPropPrim = useContext(PropPrimContext);
	const ctxBtn = useContext(BtnContext);

	return (
		<div className="w-1/2 bg-gray-100 p-3 rounded-lg sm:w-full  ">
			<h1 className="text-center text-lg p-2  dark:text-black">
				Carga atuante no perfil Primário
			</h1>
			<div className="flex justify-center rounded-md h-24">
				{ctxBtn?.btnApoioPrim === '3' ? (
					<>
						<img
							src={`/images/${ctxBtn?.btnApoioPrim}${ctxBtn?.btnIsoPrim}.png`}
							alt="sec"
							width={375}
							className="relative"
						/>
						<span className="absolute mt-16 mr-40 dark:text-black">
							{ctxPropPrim?.vao1} cm
						</span>
						<span className="absolute mt-16 ml-40 dark:text-black">
							{ctxPropPrim?.vao2} cm
						</span>
					</>
				) : (
					<>
						<img
							src={`/images/${ctxBtn?.btnApoioPrim}${ctxBtn?.btnIsoPrim}.png`}
							alt="sec"
							width={380}
							className="relative"
						/>
						<span className="absolute mt-16 -ml-56  dark:text-black">
							{ctxPropPrim?.vao1} cm
						</span>
						<span className="absolute mt-16  dark:text-black">
							{ctxPropPrim?.vao2} cm
						</span>
						<span className="absolute mt-16 ml-56  dark:text-black">
							{ctxPropPrim?.vao3} cm
						</span>
					</>
				)}
			</div>
			<div className="flex flex-col gap-3 mt-5">
				<div className="p-2 bg-red-200  rounded-md text-sm  dark:text-black">
					Carga total (kgf/m²) = {Math.ceil(ctxPropPrim?.pesoLajeSecM)}
				</div>
				<div className="p-2 bg-red-200  rounded-md text-sm  dark:text-black">
					Carga distribuída (kgf/m) = {Math.ceil(ctxPropPrim?.carga)}
				</div>
			</div>
		</div>
	);
};
