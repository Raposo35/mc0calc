import { EscLaje } from '@/components/laje/EscLaje';
import Layout from '@/components/template/Layout';

const Home = () => {
	return (
		<div className="w-screen">
			<Layout titulo="Cálculo de Escoramento de Laje">
				<EscLaje />
			</Layout>
		</div>
	);
};

export default Home;
