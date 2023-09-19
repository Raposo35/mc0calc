const Logo = () => {
	return (
		<div
			className={`bg-white h-12 w-12 rounded-full flex flex-col items-center justify-center`}
		>
			<div className="h-4 w-4 rounded-full bg-red-600 mb-0.5" />
			<div className="flex mt-0.5">
				<div className="h-4 w-4 rounded-full bg-green-600 mr-0.5" />
				<div className="h-4 w-4 rounded-full bg-blue-600 ml-0.5" />
			</div>
		</div>
	);
};

export default Logo;
