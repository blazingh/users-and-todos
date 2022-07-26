import { useEffect, useState } from "react";
import data from "../data.js";
import { FormikList, FormikSubList } from "./FormikItems.js";

const Step1 = ({ formik, setStep }) => {
	const [selected, setSelected] = useState(false);
	useEffect(() => {}, [formik.values.group]);
	const handleValueChange = (field, value) => {
		if (field === "group") {
			formik.setFieldValue(field, value);
			formik.setFieldValue("treatement", {});
		}
		if (field === "treatement") {
			setStep(2);
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
				select Treatement
			</label>
			{selected && (
				<div className="w-full">
					<FormikList
						list={data.treatementGroups}
						fieldname="group"
						setFieldValue={handleValueChange}
						selected={formik.values.group}
					>
						<FormikSubList
							list={data.treatements.filter(
								(x) => x.group === formik.values.group.id,
							)}
							fieldname="treatement"
							selected={formik.values.treatement}
							setFieldValue={handleValueChange}
						/>
					</FormikList>
				</div>
			)}
		</>
	);
};

export default Step1;
