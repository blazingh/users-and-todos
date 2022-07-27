import { useState } from "react";
import arrow from "../../media/arrow.png";

const StepFive = ({ formik, setStep }) => {
	const dayInMilla = 3600 * 1000 * 24;
	const today = new Date();
	const tomorrow = new Date(today.getTime() + dayInMilla);
	const times = [
		{ hour: "10", min: "05" },
		{ hour: "12", min: "20" },
		{ hour: "14", min: "00" },
		{ hour: "16", min: "30" },
	];
	const [date, setDate] = useState(today.toDateString());
	return (
		<div className="w-full">
			<div className="flex w-full items-center justify-between p-2">
				<img
					src={arrow}
					className="w-6 h-6 rotate-180"
					onClick={() => {
						let newDate = new Date(date);
						if (newDate.getTime() > today.getTime()) {
							newDate.setDate(newDate.getDate() - 1);
							setDate(newDate.toDateString());
							formik.setFieldValue("date", {
								day: newDate.getDate(),
								month: newDate.getMonth() + 1,
							});
						}
					}}
				/>
				<label className=" font-semibold border-2 text-dark-1 w-full text-center mx-10 border-dark-1 rounded px-3 py-1">
					{date === today.toDateString()
						? "today"
						: date === tomorrow.toDateString()
						? "tomorrow"
						: date}
				</label>
				<img
					src={arrow}
					className="w-6 h-6"
					onClick={() => {
						let newDate = new Date(date);
						if (newDate.getTime() < today.getTime() + 6 * dayInMilla) {
							newDate.setDate(newDate.getDate() + 1);
							setDate(newDate.toDateString());
							formik.setFieldValue("date", {
								day: newDate.getDate(),
								month: newDate.getMonth() + 1,
							});
						}
					}}
				/>
			</div>
			<div className="w-full px-5">
				{times.map((time, index) => (
					<div
						key={index}
						className="w-full flex justify-center items-center rounded-lg bg-blue-10 text-white py-2 cursor-pointer my-2 font-semibold text-lg"
						onClick={() => {
							formik.setFieldValue("time", { hour: time.hour, min: time.min });
							setStep(6);
						}}
					>
						{time.hour} : {time.min}
					</div>
				))}
			</div>
		</div>
	);
};

export default StepFive;
