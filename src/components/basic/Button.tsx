import React from 'react';

interface ButtonProps {
	label?: string;
	onClick: () => void;
}

const Button = ({ label, onClick }: ButtonProps) => {
	return (
		<button
			className=" bg-red-200 text-sm font-semibold p-2 w-28 text-black rounded-md hover:bg-red-300"
			onClick={onClick}
		>
			{label}
		</button>
	);
};

export default Button;
