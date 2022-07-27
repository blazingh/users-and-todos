import { FormikFullList } from "../FormikItems.js";
import data from "../../data.js";

const StepTwo = ({ formik, setStep }) => {
	return (
		<FormikFullList
			formik={formik}
			setStep={setStep}
			title={"Select Location"}
			mainfield={"city"}
			list={data.cities}
			subfield={"district"}
			sublist={data.disctricts.filter((x) => x.city === formik.values.city.id)}
			step={3}
		/>
	);
};

export default StepTwo;
