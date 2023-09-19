import route from 'next/router';
import firebase from '@/firebase/config';
import Usuario from '@/model/Usuario';
import { createContext, useEffect, useState } from 'react';
import Cookies from 'js-cookie';

interface AuthContextProps {
	usuario?: Usuario;
	carregando?: boolean;
	login?: (email: string, senha: string) => Promise<void>;
	loginGoogle?: () => Promise<void> | undefined;
	cadastrar?: (email: string, senha: string) => Promise<void>;
	logout?: () => Promise<void>;
}

const AuthContext = createContext<AuthContextProps>({});

async function usuarioNormalizado(
	usuarioFirebase: firebase.User
): Promise<Usuario> {
	const token = await usuarioFirebase.getIdToken();
	return {
		uid: usuarioFirebase.uid,
		nome: usuarioFirebase.displayName,
		email: usuarioFirebase.email,
		token,
		provedor: usuarioFirebase.providerData[0]?.providerId,
		imagemUrl: usuarioFirebase.photoURL,
	};
}

function gerenciarCookie(logado: any) {
	if (logado) {
		Cookies.set('admin-mc-cal-auth', logado, {
			expires: 7,
		});
	} else {
		Cookies.remove('admin-mc-cal-auth');
	}
}

export const AuthProvider = (props: any) => {
	const [carregando, setCarregando] = useState(true);
	const [usuario, setUsuario] = useState<Usuario>();

	async function configurarSessao(usuarioFirebase: any) {
		if (usuarioFirebase?.email) {
			const usuario = await usuarioNormalizado(usuarioFirebase);
			setUsuario(usuario);
			gerenciarCookie(true);
			setCarregando(false);
			return usuario.email;
		} else {
			setUsuario(undefined);
			gerenciarCookie(false);
			setCarregando(false);
			return false;
		}
	}

	async function login(email: string, senha: string) {
		try {
			setCarregando(true);
			const resp = await firebase
				.auth()
				.signInWithEmailAndPassword(email, senha);

			await configurarSessao(resp.user);
			route.push('/');
		} finally {
			setCarregando(false);
		}
	}

	async function cadastrar(email: string, senha: string) {
		try {
			setCarregando(true);
			const resp = await firebase
				.auth()
				.createUserWithEmailAndPassword(email, senha);
			await configurarSessao(resp.user);
			route.push('/');
		} finally {
			setCarregando(false);
		}
	}

	async function loginGoogle() {
		try {
			setCarregando(true);
			const resp = await firebase
				.auth()
				.signInWithPopup(new firebase.auth.GoogleAuthProvider());

			await configurarSessao(resp.user);
			route.push('/');
		} finally {
			setCarregando(false);
		}
	}

	async function logout() {
		try {
			setCarregando(true);
			await firebase.auth().signOut();
			await configurarSessao(null);
			//route.push('/autenticacao');
		} finally {
			setCarregando(false);
		}
	}

	useEffect(() => {
		if (Cookies.get('admin-mc-cal-auth')) {
			const cancelar = firebase.auth().onIdTokenChanged(configurarSessao);
			return () => cancelar();
		} else {
			setCarregando(false);
		}
	}, []);

	return (
		<AuthContext.Provider
			value={{
				usuario,
				carregando,
				loginGoogle,
				login,
				cadastrar,
				logout,
			}}
		>
			{props.children}
		</AuthContext.Provider>
	);
};

export default AuthContext;
