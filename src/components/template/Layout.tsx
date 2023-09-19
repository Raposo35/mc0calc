import Conteudo from './Conteudo';
import MenuLateral from './MenuLateral';
import Cabecalho from './Cabecalho';
import useAppData from '@/data/hook/useAppData';
import ForcarAutenticacao from '../auth/ForcarAutenticacao';

interface LayoutProps {
	titulo: string;

	children?: any;
}

const Layout = (props: LayoutProps) => {
	const { tema } = useAppData();

	return (
		<ForcarAutenticacao>
			<div
				className={`
			flex h-full w-screen ${tema} 
			
		`}
			>
				<MenuLateral />
				<div
					className={`w-screen flex flex-col  p-7 bg-gray-300 dark:bg-gray-800 `}
				>
					<Cabecalho titulo={props.titulo} />
					<Conteudo>{props.children}</Conteudo>
				</div>
			</div>
		</ForcarAutenticacao>
	);
};

export default Layout;
