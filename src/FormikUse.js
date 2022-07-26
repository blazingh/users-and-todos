import { Formik, Form, Field } from "formik";
import data from "./data.js";

const FormikUse = () => {
	const initialValues = { group: {}, treatement: {} };
	const onSubmit = (values) => {
		console.log(values);
	};
	return (
		<Formik initialValues={initialValues} onSubmit={onSubmit}>
			{(values, setFieldValue, ...rest) => (
				<Form>
					<div
						onClick={() => {
							console.log(rest);
							console.log(values);
						}}
					>
						asdd
					</div>
					{data.treatementGroups.map((group) => (
						<div
							key={group.id}
							onClick={() => {
								setFieldValue("group", group);
							}}
						>
							{group.name}
						</div>
					))}
				</Form>
			)}
		</Formik>
	);
};

export default FormikUse;
