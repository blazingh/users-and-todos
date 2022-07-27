import { Formik, Form } from "formik";
import { useState } from "react";
import StepsDashBoard from "./StepsDashBoard.js";
import { FormikFullList } from "./FormikItems.js";
import data from "../data.js";
import StepThree from "./formSteps/StepThree.js";

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
				<Form className="w-full px-5">
					<StepsDashBoard step={step} setStep={setStep} />
					{step === 1 && (
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
					)}
					{step === 2 && (
						<FormikFullList
							formik={formik}
							setStep={setStep}
							title={"Select Location"}
							mainfield={"city"}
							list={data.cities}
							subfield={"district"}
							sublist={data.disctricts.filter(
								(x) => x.city === formik.values.city.id,
							)}
							step={3}
						/>
					)}
					{step === 3 && <StepThree formik={formik} setStep={setStep} />}
					{step === 6 && <button type="submit">submit</button>}
				</Form>
			)}
		</Formik>
	);
};

export default FormikContainer;
