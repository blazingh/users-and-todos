const StepsDashBoard = ({ step, setStep }) => {
	const steps = [
		{ id: 1, name: "Select User" },
		{ id: 2, name: "Task Editor" },
		{ id: 3, name: "Tasks summary" },
	];
	return (
		<div className="flex w-full justify-around items-center mt-3 mb-6">
			{steps.map((single) => (
				<div
					className={` border-4 border-blue-10 flex justify-center items-center text-2xl font-bold  rounded-full ${
						step === single.id ? "pr-4 bg-blue-10 text-white" : " text-blue-10"
					}`}
				>
					<label
						onClick={() => {
							step > single.id && setStep(single.id);
						}}
						className=" w-10 h-10 flex justify-center items-center rounded-full cursor-pointer"
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
