import { useState } from "react";
import data from "../../data";

const StepFour = ({ formik, setStep }) => {
	const [doctors, setDoctors] = useState(
		data.doctors.filter((x) => x.clinic === formik.values.clinic.id),
	);
	return (
		<div className="w-full">
			{doctors.map((doctor) => (
				<div
					key={doctor.id}
					className=" border-2 border-blue-10 my-4 rounded-xl p-2 flex items-center justify-start relative"
				>
					<div className="w-1/5 aspect-square rounded-md overflow-hidden">
						<img
							className=" w-full object-cover"
							src={`https://i.pravatar.cc/200? ${doctor.id}`}
						/>{" "}
					</div>

					<div className="font-semibold text-dark-1 text-left flex w-1/2 items-center ml-2">
						{doctor.name}
					</div>
					<div className="flex col-span-1 justify-center items-center absolute right-2 ">
						<button
							type="butoon"
							className="button"
							onClick={() => {
								formik.setFieldValue("doctor", doctor);
								setStep(5);
							}}
						>
							select
						</button>
					</div>
				</div>
			))}

			<label
				onClick={() => {
					setDoctors(data.doctors);
				}}
			>
				show all doctors
			</label>
		</div>
	);
};

export default StepFour;
