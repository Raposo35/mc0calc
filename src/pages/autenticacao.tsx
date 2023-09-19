/* eslint-disable @next/next/no-img-element */
import AuthInput from '@/components/auth/AuthInput';
import { IconWarn } from '@/components/icons';
import useAuth from '@/data/hook/useAuth';
import { useState } from 'react';

const Autenticacao = () => {
	const { cadastrar, login } = useAuth();

	const [modo, setModo] = useState<'login' | 'cadastro'>('login');
	const [email, setEmail] = useState('');
	const [senha, setSenha] = useState('');
	const [erro, setErro] = useState(null);

	const exibiErro = (msg: any, tempoEmSegundos = 5) => {
		setErro(msg);
		setTimeout(() => setErro(null), tempoEmSegundos * 1000);
	};

	async function submeter() {
		try {
			if (modo === 'login') {
				await login?.(email, senha);
			} else {
				await cadastrar?.(email, senha);
			}
		} catch (e) {
			exibiErro('Erro desconhecido');
		}
	}

	return (
		<div className={`flex h-screen items-center justify-center `}>
			<div className="hidden md:block md:w-1/2 lg:w-2/3">
				<img
					src="images/Balanco.png"
					alt="Imagem fa Tela de Autenticação"
					className="h-screen w-full object-cover"
				/>
			</div>
			<div className=" m-10 w-full md:w-1/2 lg:w-1/3">
				<h1
					className={`
			text-xl font-bold mb-5
			`}
				>
					{modo === 'login'
						? 'Entre com a sua conta'
						: 'Cadastre-se na Plataforma'}
				</h1>

				{erro ? (
					<div
						className={`
				flex px-4 py-3 rounded-lg
				bg-red-400 text-white
				border border-red-700
				items-center
				`}
					>
						{IconWarn}
						<span className="ml-3">{erro}</span>
					</div>
				) : (
					false
				)}

				<AuthInput
					label="Email"
					valor={email}
					valorMudou={setEmail}
					tipo="email"
					obrigatorio
				/>
				<AuthInput
					label="Senha"
					valor={senha}
					valorMudou={setSenha}
					tipo="password"
					obrigatorio
				/>
				<button
					onClick={submeter}
					className={`
			w-full bg-indigo-500 hover:bg-indigo-400
			text-white rounded-lg px-4 py-3 mt-6
			
			`}
				>
					{modo === 'login' ? 'Entrar' : 'Cadastrar'}
				</button>
				<hr className="my-6 border-gray-300 w-full" />

				{modo === 'login' ? (
					<p className="mt-3">
						Novo por aqui?
						<a
							onClick={() => setModo('cadastro')}
							className={`
						text-blue-500 hover:text-blue-700 font-semibold
						cursor-pointer ml-2 
						`}
						>
							Crie uma conta gratuitamente!
						</a>
					</p>
				) : (
					<p className="mt-3">
						Já faz parte da nossa comunidade?
						<a
							onClick={() => setModo('login')}
							className={`
						text-blue-500 hover:text-blue-700 font-semibold
						cursor-pointer ml-2 
						`}
						>
							Entre com suas credenciais!
						</a>
					</p>
				)}
			</div>
		</div>
	);
};

export default Autenticacao;
