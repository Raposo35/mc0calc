import { PropPrimContextProvider } from '@/data/context/PropPrimContext';
import { ApoioEsc } from '../escoramento/ApoioEsc';
import { CargaEsc } from '../escoramento/CargaEsc';
import { Verifica } from '../escoramento/Verifica';
import { ApoioSec } from '../perfilPrimario/ApoioSec';
import { CargaPrim } from '../perfilPrimario/CargaPrim';
import { PropPrim } from '../perfilPrimario/PropPrim';
import { CargaSec } from '../perfilSecundario/CargaSec';
import { PropSec } from '../perfilSecundario/PropSec';
import { VaoSec } from '../perfilSecundario/VaoSec';
import { DimLaje } from '../compensado/DimLaje';
import { PropComp } from '../compensado/PropComp';
import { VaoComp } from '../compensado/VaoComp';
import { PropCompContextProvider } from '@/data/context/PropCompContext';
import { VaoCompContextProvider } from '@/data/context/VaoCompContext';

import { BtnContextProvider } from '@/data/context/BtnContext';

export const EscLaje = () => {
	return (
		<BtnContextProvider>
			<PropCompContextProvider>
				<VaoCompContextProvider>
					<PropPrimContextProvider>
						<>
							<div className="w-full  flex flex-wrap gap-5  items-center  lg:flex-nowrap sm:justify-center sm:w-full">
								<DimLaje />
								<PropComp />
								<VaoComp />
							</div>
							<div className="w-full flex flex-wrap gap-5 mt-5  items-center  lg:flex-nowrap sm:w-full ">
								<CargaSec />
								<PropSec />
								<VaoSec />
							</div>
							<div className="w-full flex flex-wrap gap-5 mt-5  items-center  lg:flex-nowrap sm:w-full ">
								<CargaPrim />
								<PropPrim />
								<ApoioSec />
							</div>
							<div className="w-full mt-5">
								<CargaEsc />
							</div>

							<div className="flex flex-col gap-5 lg:flex-row">
								<ApoioEsc />
								<Verifica />
							</div>
						</>
					</PropPrimContextProvider>
				</VaoCompContextProvider>
			</PropCompContextProvider>
		</BtnContextProvider>
	);
};
