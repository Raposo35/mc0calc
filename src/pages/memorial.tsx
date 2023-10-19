import React, { useState } from 'react';
import StudentForm from '../components/pdf/StudentForm';
import PdfGenerator from '../components/pdf/PdfGenerator';
import { BtnContextProvider } from '@/data/context/BtnContext';
import { PropCompContextProvider } from '@/data/context/PropCompContext';
import { VaoCompContextProvider } from '@/data/context/VaoCompContext';
import { PropPrimContextProvider } from '@/data/context/PropPrimContext';

const Memorial = () => {
	const [datas, setDatas] = useState([]);

	const addData = (data: never) => {
		setDatas([...datas, data]);
	};

	return (
		<BtnContextProvider>
			<PropCompContextProvider>
				<VaoCompContextProvider>
					<PropPrimContextProvider>
						<div>
							<h1>Sistema de Alunos e Notas</h1>
							<StudentForm onSubmit={addData} />
							<PdfGenerator students={datas} />
						</div>
					</PropPrimContextProvider>
				</VaoCompContextProvider>
			</PropCompContextProvider>
		</BtnContextProvider>
	);
};

export default Memorial;
