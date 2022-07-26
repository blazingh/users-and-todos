import { Formik, Form } from "formik";
import { useState } from "react";
import StepsDashBoard from "./StepsDashBoard.js";
import Step1 from "./step1.js";
import Step2 from "./step2.js";

const FormikContainer = () => {
	const [step, setStep] = useState(1);
	const initialValues = { group: {}, treatement: {}, city: {}, district: {} };
	const onSubmit = (values) => {
		console.log(values);
	};
	return (
		<Formik
			initialValues={initialValues}
			onSubmit={onSubmit}
			className="w-full"
		>
			{(formik) => (
				<Form className="w-full">
					<StepsDashBoard step={step} setStep={setStep} />
					{step === 1 && <Step1 formik={formik} setStep={setStep} />}
					{step === 2 && <Step2 formik={formik} setStep={setStep} />}
					<button type="submit">submit</button>
				</Form>
			)}
		</Formik>
	);
};

export default FormikContainer;
