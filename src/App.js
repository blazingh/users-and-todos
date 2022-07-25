import { Formik, Form, Field } from "formik";
import { useState } from "react";
import FormikSelect from "./components/FormikSelect";
import { usersData, tasksData } from "./testData";

function App() {
	//basic user model for testing imported from ./testData.js
	const [users] = useState(usersData);

	//basic task model for testing imported from ./testData.js
	const [tasks, setTasks] = useState(tasksData);

	const initialValues = { user: "", task: "" };

	const onSubmit = (values) => {
		let newTasks = [...tasks];
		newTasks.find((task, index) => {
			if (task.id == values.task) {
				newTasks[index] = { ...task, status: "completed" };
				return;
			}
		});
		setTasks(newTasks);
	};

	return (
		<div className="flex flex-col justify-center items-center">
			<Formik initialValues={initialValues} onSubmit={onSubmit}>
				{({ values, setFieldValue }) => {
					return (
						<Form>
							<div className="main-container">
								{/* users list */}
								<FormikSelect
									id="user"
									name="user"
									noSelection="select a user"
									options={users}
									onChange={(e) => {
										setFieldValue("user", e.target.value);
										setFieldValue("task", "");
									}}
								/>
								{/* user's tasks list */}
								{values.user && (
									<FormikSelect
										id="task"
										name="task"
										noSelection="select a Task"
										options={tasks.filter(
											({ user, status }) =>
												user == values.user && status === "incomplete",
										)}
									/>
								)}
							</div>
							{/* task editor */}
							{values.task && (
								<div className="main-container flex-col items-center">
									<label className="w-full text-center text-xl font-semibold mb-6">
										{tasks?.find(({ id }) => id == values.task)?.name}
									</label>
									<img
										src={"https://picsum.photos/200?" + values.task}
										className=" rounded-lg border-2 mb-6"
									/>
									<button
										className={`${
											tasks?.find(({ id }) => id == values.task)?.status ===
											"completed"
												? "w-fit border border-dark px-2 py-2 rounded-xl font-semibold bg-green-400 cursor-default"
												: "w-fit border px-2 py-2 rounded-xl font-semibold"
										} `}
									>
										Complete
									</button>
								</div>
							)}
							{/* user's tasks status */}
							{values.user && values.task && (
								<div className="main-container justify-around">
									<label className="text-center">
										Completed:{" "}
										{
											tasks?.filter(
												({ user, status }) =>
													user == values.user && status === "completed",
											).length
										}
									</label>
									<label className="text-center">
										Pending{" "}
										{
											tasks?.filter(
												({ user, status }) =>
													user == values.user && status === "incomplete",
											).length
										}
									</label>
								</div>
							)}
						</Form>
					);
				}}
			</Formik>
		</div>
	);
}

export default App;
