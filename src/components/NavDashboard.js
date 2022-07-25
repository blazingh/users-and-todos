const NavDashboard = ({ handleStep, step }) => {
	return (
		<div className="fixed bottom-16 w-full max-w-lg flex justify-around">
			<button
				className="border px-3 py-1 rounded-md bg-dark text-white"
				onClick={() => {
					handleStep(-1);
				}}
			>
				back
			</button>
			<button
				className={`border px-3 py-1 rounded-md text-white ${
					step.next ? "bg-dark" : "bg-gray-400"
				}`}
				onClick={() => {
					handleStep(+1);
				}}
			>
				next
			</button>
		</div>
	);
};

export default NavDashboard;
