import React from 'react';

interface ButtonProps {
	label: string;
	isSelected: boolean;
	onClick: () => void;
	value: any;
}

const ButtonCarga = ({ label, isSelected, value, onClick }: ButtonProps) => {
	return (
		<button
			className={` ${
				isSelected
					? 'bg-gray-300 w-96  text-sm rounded-md  dark:text-black'
					: 'w-96 p-2 text-center  rounded-md text-sm  dark:text-black'
			}`}
			onClick={onClick}
			value={value}
		>
			{label}
		</button>
	);
};

export default ButtonCarga;
