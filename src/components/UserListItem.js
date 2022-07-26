import { useState } from "react";

const UserListItem = ({
	user,
	tasks,
	selectedUser,
	handleUserSelect,
	handleTaskSelect,
}) => {
	const [completed, setCompleted] = useState(false);
	return (
		<div key={user.id}>
			<div
				onClick={() => {
					handleUserSelect(user);
				}}
				className={`big-title rounded cursor-pointer mt-1 ${
					selectedUser === user ? "bg-dark-1 rounded-b-none" : "bg-dark-2"
				}`}
			>
				{user.name}
			</div>
			{selectedUser === user && (
				<div className="bg-dark-2 text-white font-semibold text-center text-lg flex flex-wrap flex-row items-stretch">
					<label
						onClick={() => {
							setCompleted(false);
						}}
						className={`p-2 flex-1 ${completed ? "bg-dark-3" : "bg-dark-2"}`}
					>
						incomplete
					</label>
					<label
						onClick={() => {
							setCompleted(true);
						}}
						className={`p-2 flex-1 ${!completed ? "bg-dark-3" : "bg-dark-2"}`}
					>
						completed
					</label>
					{tasks.map(
						(task) =>
							task.completed === completed && (
								<div
									key={task.id}
									className="w-full px-4 py-2 flex items-center justify-between border-b-2 border-dark-3"
								>
									<label>{task.name}</label>
									<button
										className="button"
										onClick={() => {
											handleTaskSelect(task);
										}}
									>
										select
									</button>
								</div>
							),
					)}
				</div>
			)}
		</div>
	);
};

export default UserListItem;
