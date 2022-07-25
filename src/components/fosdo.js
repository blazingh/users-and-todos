{
	({ values, setFieldValue, errors }) => {
		return (
			<Form>
				<div className="main-container">
					<div className="flex flex-col">
						{users.map((user) => (
							<div>
								<input
									Type="checkbox"
									id={user.id}
									className=" peer hidden"
								></input>
								<label
									htmlFor={user.id}
									className=" bg-black text-white peer-checked:bg-gray-500"
								>
									{user.name}
								</label>
								<div className="peer-checked:flex hidden">
									<input
										type="radio"
										name="status"
										id="completed"
										className="peer"
									></input>
									<input
										type="radio"
										name="status"
										id="incompleted"
										className=""
									></input>
								</div>
							</div>
						))}
					</div>
					users list
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
	};
}
