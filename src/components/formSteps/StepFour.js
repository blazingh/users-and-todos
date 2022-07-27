import { useState } from "react";
import data from "../../data";

const StepFour = ({ formik, setStep }) => {
	const [doctors, setDoctors] = useState(
		data.doctors.filter((x) => x.clinic === formik.values.clinic.id),
	);
	return (
		<div>
			{doctors.map((doctor) => (
				<div
					key={doctor.id}
					className=" border-2 border-blue-10 my-4 rounded-xl p-2 grid grid-cols-4"
				>
					<div className=" h-24 aspect-square rounded-md overflow-hidden">
						<img
							className=" w-full object-cover"
							src={`https://i.pravatar.cc/100? ${doctor.id}`}
						/>{" "}
					</div>

					<div className="font-semibold text-lg text-dark-1 text-left flex items-center col-span-2">
						{doctor.name}
					</div>
					<div className="flex col-span-1 w-full justify-center items-center">
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
