interface TituloProps {
	titulo: string;
}

const Titulo = (props: TituloProps) => {
	return (
		<div>
			<h1
				className={`
				font-black text-3xl  text-gray-900 dark:text-gray-100 sm: overflow-y-hidden    
      `}
			>
				{props.titulo}
			</h1>
		</div>
	);
};

export default Titulo;
