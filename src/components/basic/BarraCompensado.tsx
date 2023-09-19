interface LifeBarProps {
	percent: number;
}

const BarraCompensado: React.FC<LifeBarProps> = ({ percent }) => {
	const getColor = () => {
		if (percent > 100) {
			return 'bg-red-500';
		} else if (percent >= 95) {
			return 'bg-yellow-500';
		} else {
			return 'bg-green-500';
		}
	};

	return (
		<div className="w-3/4  flex items-center px-2 h-5 bg-gray-100 rounded-full">
			<div
				className={` h-1/2  rounded-full ${getColor()}`}
				style={{ width: `${percent}%` }}
			></div>
		</div>
	);
};

export default BarraCompensado;
