import useAppData from '@/data/hook/useAppData';
import BotaoAlternarTema from './BotaoAlternarTema';
import Titulo from './Titulo';
import AvatarUse from './AvatarUse';

interface CabecalhoProps {
	titulo: string;
}

const Cabecalho = (props: CabecalhoProps) => {
	const { tema, alternarTema } = useAppData();
	return (
		<div className={`flex p-4`}>
			<Titulo titulo={props.titulo} />
			<div className={`flex flex-grow justify-end items-center`}>
				<BotaoAlternarTema tema={tema} alternarTema={alternarTema} />
				<AvatarUse className="ml-3" />
			</div>
		</div>
	);
};

export default Cabecalho;
