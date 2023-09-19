import Image from 'next/image';
import route from 'next/router';
import loading from '../../../public/images/loading.gif';
import useAuth from '@/data/hook/useAuth';
import Head from 'next/head';

const ForcarAutenticacao = (props: any) => {
	const { usuario, carregando } = useAuth();

	const renderizarConteudo = () => {
		return (
			<>
				<Head>
					<script
						dangerouslySetInnerHTML={{
							__html: `
						if(!document.cookie?.includes("admin-mc-cal-auth")) {
							window.location.href = "/autenticacao"
						}
						
						`,
						}}
					/>
				</Head>
				{props.children}
			</>
		);
	};

	const renderizarCarregando = () => {
		return (
			<div
				className={`
      flex justify-center items-center h-screen        
      `}
			>
				<Image src={loading} alt="loading" />
			</div>
		);
	};

	if (!carregando && usuario?.email) {
		return renderizarConteudo();
	} else if (carregando) {
		return renderizarCarregando();
	} else {
		route.push('/autenticacao');
		return null;
	}
};

export default ForcarAutenticacao;
