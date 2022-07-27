const StepsDashBoard = ({ step, setStep }) => {
	const steps = [
		{ id: 1, name: "Treatement Options" },
		{ id: 2, name: "Location Selection" },
		{ id: 3, name: "Clinic Selection" },
		{ id: 4, name: "Available Doctors" },
		{ id: 5, name: "choose your apointement" },
		{ id: 6, name: "Comfirmation" },
	];
	return (
		<div className="flex w-full justify-around items-center mt-3 mb-6">
			{steps.map((single) => (
				<div
					key={single.id}
					className={` border-2 border-blue-10 flex justify-center items-center text-lg md:text-xl font-semibold  rounded-full ${
						step === single.id ? "pr-4 bg-blue-10 text-white" : " text-blue-10"
					}`}
				>
					<label
						onClick={() => {
							step > single.id && setStep(single.id);
						}}
						className={` flex justify-center items-center rounded-full ${
							step === single.id ? "w-10 h-10" : "w-7 h-7"
						} ${step > single.id ? "cursor-pointer " : "cursor-default "}`}
					>
						{single.id}
					</label>
					{step === single.id && <label>{single.name}</label>}
				</div>
			))}
		</div>
	);
};

export default StepsDashBoard;
