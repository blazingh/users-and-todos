const UserSummaryList = ({ tasks, status }) => {
	return (
		<div className="w-1/2 flex flex-col px-2">
			<label className="rounded-t bg-dark-1 p-2 text-center">
				{status} : {tasks.length}
			</label>
			<div>
				{tasks.map((task) => (
					<div
						key={task.id}
						className="px-2 py-1 bg-dark-2 border-y border-dark-3 flex items-center justify-center"
					>
						<label>{task.name}</label>
					</div>
				))}
			</div>
		</div>
	);
};

export default UserSummaryList;
