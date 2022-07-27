import { FormikFullList } from "../FormikItems.js";
import data from "../../data.js";

const StepOne = ({ formik, setStep }) => {
	return (
		<FormikFullList
			formik={formik}
			setStep={setStep}
			title={"Select Treatement"}
			list={data.treatementGroups}
			mainfield={"group"}
			subfield={"treatement"}
			sublist={data.treatements.filter(
				(x) => x.group === formik.values.group.id,
			)}
			step={2}
		/>
	);
};

export default StepOne;
