import { IconMoon, IconSun } from '../icons';

interface BotaoAlternarTemaProps {
	tema?: string;
	alternarTema?: () => void;
}

const BotaoAlternarTema = (props: BotaoAlternarTemaProps) => {
	return props.tema === 'dark' ? (
		<div
			onClick={props.alternarTema}
			className={`
      hidden sm:flex items-center cursor-pointer
      bg-gradient-to-r from-yellow-300 to-yellow-600 
      w-14 lg:w-24 h-8 p-1 rounded-full `}
		>
			<div
				className={`
			flex items-center justify-center bg-white text-yellow-600 
			rounded-full h-6 w-6 ml-1
			
			`}
			>
				{IconSun}
			</div>
			<div
				className={`
			hidden lg:flex items-center ml-3
			text-white
			`}
			>
				<span>Claro</span>
			</div>
		</div>
	) : (
		<div
			onClick={props.alternarTema}
			className={`
      hidden sm:flex items-center justify-end cursor-pointer
      bg-gradient-to-r from-gray-500 to-gray-900 
      w-14 lg:w-24 h-8 p-1 rounded-full `}
		>
			<div
				className={`
			hidden lg:flex items-center 
			text-gray-300
			`}
			>
				<span>Noite</span>
			</div>
			<div
				className={`
			flex items-center justify-center bg-black text-yellow-300 
			rounded-full h-6 w-6 ml-4
			
			`}
			>
				{IconMoon}
			</div>
		</div>
	);
};

export default BotaoAlternarTema;
