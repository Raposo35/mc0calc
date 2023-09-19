/* eslint-disable @next/next/no-img-element */
import useAuth from '@/data/hook/useAuth';

interface AvatarUsuarioProps {
	className?: string;
}

const AvatarUse = (props: AvatarUsuarioProps) => {
	const { usuario } = useAuth();

	return (
		<img
			className={`h-10 w-10 rounded-full cursor-pointer  ${props.className}`}
			src={usuario?.imagemUrl ?? '/images/avatar.svg'}
			alt="Avatar do Usuário"
		/>
	);
};

export default AvatarUse;
