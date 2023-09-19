import React from 'react';

interface SelectComponentProps {
	options: string[];
	value?: string;
	onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Select: React.FC<SelectComponentProps> = ({
	options,
	value,
	onChange,
}) => {
	return (
		<select
			className="px-3 rounded-md text-xs cursor-pointer"
			value={value}
			onChange={onChange}
		>
			<option value="">Selecione um tipo</option>
			{options.map((option, index) => (
				<option key={index} value={index}>
					{option}
				</option>
			))}
		</select>
	);
};

export default Select;
