// pages/index.js

import React from 'react';
import Link from 'next/link';

const HomePage = () => {
	return (
		<div>
			<h1>Página Inicial</h1>
			<Link href="/pdf" legacyBehavior>
				<a>Gerar PDF</a>
			</Link>
		</div>
	);
};

export default HomePage;
