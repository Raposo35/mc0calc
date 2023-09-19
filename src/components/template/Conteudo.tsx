interface ConteudoProps {
	children?: any;
}

const Conteudo = (props: ConteudoProps) => {
	return (
		<div
			className={`
   flex flex-col mt-7
	 dark:text-gray-200
	 w-full
  `}
		>
			{props.children}
		</div>
	);
};

export default Conteudo;
