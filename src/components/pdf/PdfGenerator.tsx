import React, { useContext } from 'react';

import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { PropCompContext } from '@/data/context/PropCompContext';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

const PdfGenerator = ({ datas }: any) => {
	const ctxPropComp = useContext(PropCompContext);

	console.log(ctxPropComp?.peDireito);

	const laje = {
		nome: 'L15',
		altura: 15,
		sec: {
			peso: 610,
			perfil: 'C-7,5',
			mAdm: 206,
			espComp: 61,
			carga: 372,
			vaoMax: 192,
		},
		prim: {
			peso: 621,
			perfil: 'C-12',
			mAdm: 556,
			apoio: 'isostático',
			faixa: 145,
			carga: 900,
			vaoMax: 192,
		},
		cimbre: {
			tipo: 'torre-LTT',
			cargaAdm: 2850,
			apoio: 'hiperestático',
			vao4: 100,
			vao5: 100,
			vao6: 192,
			cargaTotal: 1125,
		},
	};

	const generatePdf = () => {
		const studentData = datas.map((data: any) => [data.name, data.grade]);

		const docDefinition: any = {
			content: [
				{ text: 'Relatório de Alunos', style: 'header' },
				{
					table: {
						headers: ['Nome', 'Nota'],
						body: studentData,
					},
				},
			],
			styles: {
				header: {
					fontSize: 18,
					bold: true,
					alignment: 'center',
					margin: [0, 0, 0, 20],
				},
			},
		};

		pdfMake.createPdf(docDefinition).open();
	};

	return (
		<div>
			<h2>Gerar PDF</h2>
			<button onClick={generatePdf}>Gerar PDF</button>
		</div>
	);
};

export default PdfGenerator;
