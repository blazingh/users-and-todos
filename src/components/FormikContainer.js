import { Formik, Form, Field } from "formik";
import { useState } from "react";
import { usersData, tasksData } from "../testData";
import StepsDashBoard from "./StepsDashBoard";

const FormikContainer = () => {
	//basic user model for testing imported from ./testData.js
	const [users] = useState(usersData);
	//basic task model for testing imported from ./testData.js
	const [tasks, setTasks] = useState(tasksData);

	const [step, setStep] = useState(1);
	const [selectedUser, setSelectedUser] = useState();
	const [selectedTask, setSelectedTask] = useState();
	const [statusFilter, setStatusFilter] = useState("incomplete");

	const handleUserSelect = (user) => {
		selectedUser
			? selectedUser === user
				? setSelectedUser()
				: setSelectedUser(user)
			: setSelectedUser(user);
	};

	const handleTaskSelect = (task) => {
		setSelectedTask(task);
		setStep(2);
	};

	const handleTaskComplete = () => {
		let newTasks = [...tasks];
		newTasks.find((task, index) => {
			if (task.id === selectedTask.id) {
				let newTask = { ...task, status: "completed" };
				setSelectedTask(newTask);
				newTasks[index] = newTask;
				return;
			}
		});
		setTasks(newTasks);
		setStep(3);
	};

	return (
		<div className="flex flex-col justify-center items-start w-full">
			<StepsDashBoard step={step} setStep={setStep} />
			<div className="w-full ">
				{step === 1 && (
					<div className="w-full px-5">
						{users.map((user) => (
							<div key={user.id}>
								<div
									onClick={() => {
										handleUserSelect(user);
									}}
									className={`  p-2 w-full text-center text-white font-bold text-xl mt-1 rounded select-none cursor-pointer hover:bg-blue-10 ${
										selectedUser === user
											? "bg-blue-10 rounded-b-none"
											: "bg-blue-20"
									}`}
								>
									{user.name}
								</div>
								{selectedUser === user && (
									<div className=" bg-blue-20 text-white font-semibold text-lg">
										<div className="flex justify-around border-b border-blue-30">
											<label
												className={`w-1/2 h-9 flex justify-center items-center ${
													statusFilter != "incomplete" && "bg-blue-30"
												}`}
												onClick={() => {
													setStatusFilter("incomplete");
												}}
											>
												incomplete
											</label>
											<label
												className={`w-1/2 h-9 flex justify-center items-center ${
													statusFilter != "completed" && "bg-blue-30"
												}`}
												onClick={() => {
													setStatusFilter("completed");
												}}
											>
												completed
											</label>
										</div>
										{tasks
											.filter(
												(task) =>
													task.user === user.id && task.status === statusFilter,
											)
											.map((task) => (
												<div
													key={task.id}
													className="px-10 py-1 flex items-center justify-between border-b-2 border-blue-30"
												>
													<label>{task.name}</label>
													<button
														className=" bg-blue-10 p-1 rounded"
														onClick={() => {
															handleTaskSelect(task);
														}}
													>
														select
													</button>
												</div>
											))}
									</div>
								)}
							</div>
						))}
					</div>
				)}
				{step === 2 && (
					<div className="w-full px-5 ">
						<div className=" w-full bg-blue-10 p-2 text-white font-bold text-lg md:text-xl ">
							{selectedUser.name} / {selectedTask.name}
						</div>
						<div className="flex justify-start items-center p-2 bg-blue-20 text-white font-semibold text-sm md:text-lg">
							<div className="w-16 h-16 md:w-20 md:h-20 mr-2 border-4 border-blue-10 rounded-xl overflow-hidden">
								<img
									src={"https://picsum.photos/200?" + selectedTask.id}
									className="w-full"
									alt={selectedTask.id}
								/>
							</div>
							{selectedTask.status === "completed" ? (
								<label>This Task Is Completed</label>
							) : (
								<>
									<label>do you to compled {selectedTask.name} ?</label>
									<button
										className="p-1 ml-auto rounded bg-blue-10"
										onClick={handleTaskComplete}
									>
										complete
									</button>
								</>
							)}
						</div>
					</div>
				)}
				{step === 3 && (
					<div className="w-full px-5">
						<div className="w-full text-center font-bold text-lg md:text-xl bg-blue-10 p-2 text-white">
							{selectedUser.name}
						</div>
						<div className="flex w-full justify-around items-start bg-blue-30 py-5 text-white text-sm md:text-lg font-semibold">
							<div className="text-center">
								<label className=" rounded bg-blue-10 p-2">
									Completed :{" "}
									{
										tasks.filter(
											(task) =>
												task.user === selectedUser.id &&
												task.status === "completed",
										).length
									}
								</label>
								<div className="mt-3">
									{tasks
										.filter(
											(task) =>
												task.user === selectedUser.id &&
												task.status === "completed",
										)
										.map((task) => (
											<div
												key={task.id}
												className="px-10 py-1 bg-blue-20 rounded m-1 flex items-center justify-between"
											>
												<label>{task.name}</label>
											</div>
										))}
								</div>
							</div>
							<div className="text-center">
								<label className=" rounded bg-blue-10 p-2">
									Incomplete :{" "}
									{
										tasks.filter(
											(task) =>
												task.user === selectedUser.id &&
												task.status === "incomplete",
										).length
									}
								</label>
								<div className="mt-3">
									{tasks
										.filter(
											(task) =>
												task.user === selectedUser.id &&
												task.status === "incomplete",
										)
										.map((task) => (
											<div
												key={task.id}
												className="px-10 py-1 bg-blue-20 rounded m-1 flex items-center justify-between"
											>
												<label>{task.name}</label>
											</div>
										))}
								</div>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default FormikContainer;
