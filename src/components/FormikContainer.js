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
	const [statusFilter, setStatusFilter] = useState(false);

	const getTasks = (filters) => {
		let output = tasks;
		filters.map((filter) => {
			output = output.filter((task) => task[filter.filter] === filter.value);
		});
		return output;
	};

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
		//clones the tasks state
		let newTasks = [...tasks];
		//and modify the selected task
		newTasks.find((task, index) => {
			if (task.id === selectedTask.id) {
				let newTask = { ...task, completed: true };
				setSelectedTask(newTask);
				newTasks[index] = newTask;
				return;
			}
		});
		// then reset the old tasks list to the new tasks list
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
									className={`  big-title rounded text-center cursor-pointer ${
										selectedUser === user
											? "bg-dark-1 rounded-b-none"
											: "bg-dark-2"
									}`}
								>
									{user.name}
								</div>
								{selectedUser === user && (
									<div className=" bg-dark-2 text-white font-semibold text-lg">
										<div className="flex justify-around border-b border-dark-3">
											<label
												className={`w-1/2 h-9 flex justify-center items-center ${
													statusFilter && "bg-dark-3"
												}`}
												onClick={() => {
													setStatusFilter(false);
												}}
											>
												incomplete
											</label>
											<label
												className={`w-1/2 h-9 flex justify-center items-center ${
													!statusFilter && "bg-dark-3"
												}`}
												onClick={() => {
													setStatusFilter(true);
												}}
											>
												completed
											</label>
										</div>
										{getTasks([
											{ filter: "user", value: selectedUser.id },
											{ filter: "completed", value: statusFilter },
										]).map((task) => (
											<div
												key={task.id}
												className="px-10 py-1 flex items-center justify-between border-b-2 border-dark-3"
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
										))}
									</div>
								)}
							</div>
						))}
					</div>
				)}
				{step === 2 && (
					<div className="w-full px-5 ">
						<div className="big-title">
							{selectedUser.name} / {selectedTask.name}
						</div>
						<div className="flex justify-start items-center p-2 bg-dark-2 text-white font-semibold text-base md:text-lg">
							<div className="w-16 h-16 md:w-20 md:h-20 mr-2 border-4 border-dark-1 rounded-xl overflow-hidden">
								<img
									src={"https://picsum.photos/200?" + selectedTask.id}
									className="w-full"
									alt={selectedTask.id}
								/>
							</div>
							{selectedTask.completed ? (
								<label>This Task Is Completed</label>
							) : (
								<>
									<label>do you to complete {selectedTask.name} ?</label>
									<button
										className="button ml-auto"
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
						<div className="big-title text-center">{selectedUser.name}</div>
						<div className="flex w-full justify-center items-start bg-dark-3 py-5 text-white text-sm md:text-lg font-semibold">
							<div className="w-1/2 flex flex-col px-2">
								<label className="rounded bg-dark-1 p-2 text-center">
									Completed :{" "}
									{
										getTasks([
											{ filter: "user", value: selectedUser.id },
											{ filter: "completed", value: true },
										]).length
									}
								</label>
								<div>
									{getTasks([
										{ filter: "user", value: selectedUser.id },
										{ filter: "completed", value: true },
									]).map((task) => (
										<div
											key={task.id}
											className="px-2 py-1 bg-dark-2 rounded m-1 flex items-center justify-center"
										>
											<label>{task.name}</label>
										</div>
									))}
								</div>
							</div>
							<div className="w-1/2 flex flex-col px-2">
								<label className=" rounded bg-dark-1 p-2 text-center">
									Incomplete :{" "}
									{
										getTasks([
											{ filter: "user", value: selectedUser.id },
											{ filter: "completed", value: false },
										]).length
									}
								</label>
								<div>
									{getTasks([
										{ filter: "user", value: selectedUser.id },
										{ filter: "completed", value: false },
									]).map((task) => (
										<div
											key={task.id}
											className="px-2 py-1 bg-dark-2 rounded m-1 flex items-center justify-center"
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
