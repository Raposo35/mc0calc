import Link from 'next/link';

interface MenuItemProps {
	texto: string;
	icone: any;
	url?: string;
	className?: string;
	onClick?: (event: any) => void;
}

export const MenuItem = (props: MenuItemProps) => {
	const renderizarLink = () => {
		return (
			<a
				className={`
        flex flex-col justify-center items-center h-24 w-24 dark:text-red-500 text-red-500 ${props.className}
        `}
			>
				{props.icone}
				<span
					className={`
            text-xs font-light  dark:text-gray-200 text-gray-800
          `}
				>
					{props.texto}
				</span>
			</a>
		);
	};

	return (
		<li
			onClick={props.onClick}
			className={`
      hover:bg-gray-200 dark:hover:bg-gray-700
			cursor-pointer
  
    `}
		>
			{props.url ? (
				<Link href={props.url} legacyBehavior>
					{renderizarLink()}
				</Link>
			) : (
				renderizarLink()
			)}
		</li>
	);
};

export default MenuItem;
