// pages/PdfGenerator.tsx

import React from 'react';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

const PdfGenerator: React.FC = () => {
	const generatePdf = () => {
		// Defina o conteúdo do PDF usando o formato pdfmake
		const documentDefinition: any = {
			content: [
				{
					stack: [
						'Memorial de cálculo',
						{ text: 'Escoramento de laje', style: 'subheader' },
					],
					style: 'header',
				},
				{
					text: [
						"Margins have slightly different behavior than other layout properties. They are not inherited, unlike anything else. They're applied only to those nodes which explicitly ",
						'set margin or style property.\n',
					],
				},
				{
					text: 'This paragraph (consisting of a single line) directly sets top and bottom margin to 20',
					margin: [0, 20],
				},
				{
					stack: [
						{
							text: [
								'This line begins a stack of paragraphs. The whole stack uses a ',
								{ text: 'superMargin', italics: true },
								' style (with margin and fontSize properties).',
							],
						},
						{
							text: [
								'When you look at the',
								{ text: ' document definition', italics: true },
								', you will notice that fontSize is inherited by all paragraphs inside the stack.',
							],
						},
						'Margin however is only applied once (to the whole stack).',
					],
					style: 'superMargin',
				},

				{
					text: 'Exemplo de PDF gerado com pdfmake e Next.js',
					style: 'header',
				},
				{
					text: 'Seção 1 - Título',
					style: 'sectionHeader',
				},
				'Este é um exemplo de conteúdo HTML na primeira seção do PDF.',
				{
					text: 'Seção 2 - Tabela',
					style: 'sectionHeader',
				},
				{
					table: {
						body: [
							['Coluna 1', 'Coluna 2', 'Coluna 3'],
							['Dado 1.1', 'Dado 1.2', 'Dado 1.3'],
							['Dado 2.1', 'Dado 2.2', 'Dado 2.3'],
						],
					},
				},
			],
			styles: {
				header: {
					fontSize: 18,
					bold: true,
					alignment: 'center',
				},
				sectionHeader: {
					fontSize: 16,
					bold: true,
					margin: [0, 10, 0, 5], // [left, top, right, bottom]
				},
			},
		};

		// Gere o PDF
		const pdfDocGenerator = pdfMake.createPdf(documentDefinition);
		pdfDocGenerator.download('exemplo.pdf');
	};

	return (
		<div>
			<h1>Gerar PDF com pdfmake em Next.js</h1>
			<button onClick={generatePdf}>Gerar PDF</button>
		</div>
	);
};

export default PdfGenerator;
