import { Formik, Form } from "formik";
import { useState } from "react";
import StepsDashBoard from "./StepsDashBoard.js";
import StepThree from "./formSteps/StepThree.js";
import StepOne from "./formSteps/StepOne.js";
import StepTwo from "./formSteps/StepTwo.js";
import StepFour from "./formSteps/StepFour.js";
import StepFive from "./formSteps/StepFive.js";

const FormikContainer = () => {
	const [step, setStep] = useState(1);
	const initialValues = {
		group: {},
		treatement: {},
		city: {},
		district: {},
		date: {},
		time: {},
	};
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
				<Form className="w-full px-5">
					<StepsDashBoard step={step} setStep={setStep} />
					{step === 1 && <StepOne formik={formik} setStep={setStep} />}
					{step === 2 && <StepTwo formik={formik} setStep={setStep} />}
					{step === 3 && <StepThree formik={formik} setStep={setStep} />}
					{step === 4 && <StepFour formik={formik} setStep={setStep} />}
					{step === 5 && <StepFive formik={formik} setStep={setStep} />}
					{step === 6 && <button type="submit">submit</button>}
				</Form>
			)}
		</Formik>
	);
};

export default FormikContainer;
