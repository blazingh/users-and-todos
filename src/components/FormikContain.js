import { Formik, Form, Field } from "formik";
import { useState } from "react";
import { usersData, tasksData } from "../testData";
import StepsDashBoard from "./StepsDashBoard";
import UserListItem from "./UserListItem";
import UserSummaryList from "./UserSummaryList";

const FormikContainer = () => {
	//basic user model for testing imported from ./testData.js
	const [users] = useState(usersData);
	//basic task model for testing imported from ./testData.js
	const [tasks, setTasks] = useState(tasksData);

	const [step, setStep] = useState(1);

	const [selectedUser, setSelectedUser] = useState();
	const [selectedTask, setSelectedTask] = useState();

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
			<div className="w-full px-5">
				{step === 1 && (
					<>
						{users.map((user) => (
							<UserListItem
								key={user.id}
								user={user}
								tasks={getTasks([{ filter: "user", value: selectedUser?.id }])}
								selectedUser={selectedUser}
								handleUserSelect={handleUserSelect}
								handleTaskSelect={handleTaskSelect}
							/>
						))}
						<Field as="select" />
					</>
				)}
				{step === 2 && (
					<div className="flex flex-wrap items-center rounded-t bg-dark-2 text-white font-semibold text-base md:text-lg">
						<label className="big-title rounded-t">
							{selectedUser.name} / {selectedTask.name}
						</label>
						<div className="w-full mx-2 my-4 flex items-center justify-around">
							<img
								src={"https://picsum.photos/200?" + selectedTask.id}
								className="h-16 w-16 rounded-xl object-cover"
								alt={selectedTask.id}
							/>
							{!selectedTask.completed ? (
								<>
									<label> complete {selectedTask.name} ?</label>
									<button className="button ml-2" onClick={handleTaskComplete}>
										complete
									</button>
								</>
							) : (
								<label>This Task Is Completed</label>
							)}
						</div>
					</div>
				)}
				{step === 3 && (
					<div>
						<label className="big-title rounded-t">{selectedUser.name}</label>
						<div className="flex w-full justify-center items-start bg-dark-3 py-5 text-white text-base md:text-lg font-semibold">
							<UserSummaryList
								tasks={getTasks([
									{ filter: "user", value: selectedUser.id },
									{ filter: "completed", value: true },
								])}
								status={"Completed"}
							/>
							<UserSummaryList
								tasks={getTasks([
									{ filter: "user", value: selectedUser.id },
									{ filter: "completed", value: false },
								])}
								status={"Incompleted"}
							/>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default FormikContainer;
