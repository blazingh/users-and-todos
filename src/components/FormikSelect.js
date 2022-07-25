import { Field } from "formik";

const FormikSelect = ({ name, options, noSelection, ...rest }) => {
	return (
		<div>
			<Field
				as="select"
				id={name}
				name={name}
				{...rest}
				className=" bg-transparent w-52 h-10 border rounded-md m-2 appearance-none"
			>
				{noSelection && (
					<option
						key={noSelection}
						value={""}
						className=" bg-gray-700 text-center h-20"
					>
						{noSelection}
					</option>
				)}
				{options.map((option) => (
					<option
						key={option.id}
						value={option.id}
						className=" bg-gray-700 text-center hover:bg-gray-500 h-20 appearance-none focus:bg-slate-500"
					>
						{option.name}
					</option>
				))}
			</Field>
		</div>
	);
};

export default FormikSelect;
