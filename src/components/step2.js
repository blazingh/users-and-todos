import { useEffect, useState } from "react";
import data from "../data.js";
import { FormikList, FormikSubList } from "./FormikItems.js";

const Step2 = ({ formik, setStep }) => {
	const [selected, setSelected] = useState(false);
	useEffect(() => {}, [formik.values.group]);
	const handleValueChange = (field, value) => {
		if (field === "city") {
			formik.setFieldValue(field, value);
			formik.setFieldValue("district", {});
		}
		if (field === "district") {
			setStep(3);
			formik.setFieldValue(field, value);
		}
	};
	return (
		<>
			<label
				onClick={() => {
					setSelected((condition) => !condition);
				}}
				className={` w-full p-3 flex text-lg rounded-xl font-semibold border-2 border-dark-1 select-none cursor-pointer ${
					selected
						? " rounded-b-none bg-blue-10 text-white border-blue-10"
						: "  text-dark-1 "
				}`}
			>
				select Location
			</label>
			{selected && (
				<div className="w-full">
					<FormikList
						list={data.cities}
						fieldname="city"
						setFieldValue={handleValueChange}
						selected={formik.values.city}
					>
						<FormikSubList
							list={data.disctricts.filter(
								(x) => x.city === formik.values.city.id,
							)}
							fieldname="district"
							selected={formik.values.district}
							setFieldValue={handleValueChange}
						/>
					</FormikList>
				</div>
			)}
		</>
	);
};

export default Step2;
