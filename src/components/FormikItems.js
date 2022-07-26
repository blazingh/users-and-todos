import { useEffect, useState } from "react";
import arrow from "../media/arrow.png";

export const FormikListTitle = ({ title, selected, setSelected }) => {
	return (
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
			{title}
		</label>
	);
};

export const FormikMainList = ({
	list,
	fieldname,
	children,
	selected,
	setFieldValue,
}) => {
	return list.map((item) => (
		<div key={item.id} className={`w-full  text-white text-center border-x`}>
			<label
				key={item.id}
				className={`border-b relative w-full flex items-center text-lg  p-3 cursor-pointer select-none ${
					selected === item ? "text-blue-10 font-semibold" : "text-dark-1"
				}`}
			>
				<img
					src={arrow}
					className={`w-4 absolute right-5 ${
						selected === item ? "-rotate-90" : "rotate-90"
					} `}
				/>
				{item.name}
				<input
					name={fieldname}
					type="radio"
					onClick={() => {
						selected === item
							? setFieldValue(fieldname, {})
							: setFieldValue(fieldname, item);
					}}
					className="hidden"
				/>
			</label>
			{selected == item && children}
		</div>
	));
};

export const FormikSubList = ({ list, fieldname, setFieldValue, selected }) => {
	return list.map((item) => (
		<div
			key={item.id}
			className=" border-y mx-2 flex justify-between px-2 py-2 text-dark-1"
		>
			<label>{item.name}</label>
			<button
				className="button"
				type="button"
				onClick={() => {
					setFieldValue(fieldname, item);
				}}
			>
				{selected == item ? "selected" : "select"}
			</button>
		</div>
	));
};

export const FormikFullList = ({
	formik,
	setStep,
	title,
	list,
	sublist,
	mainfield,
	subfield,
	step,
}) => {
	const [selected, setSelected] = useState(false);
	useEffect(() => {}, [formik.values.group]);
	const handleValueChange = (field, value) => {
		if (field === mainfield) {
			formik.setFieldValue(field, value);
			formik.setFieldValue(subfield, {});
		}
		if (field === subfield) {
			setStep(step);
			formik.setFieldValue(field, value);
		}
	};
	return (
		<>
			<FormikListTitle
				title={title}
				selected={selected}
				setSelected={setSelected}
			/>
			{selected && (
				<div className="w-full">
					<FormikMainList
						list={list}
						fieldname={mainfield}
						setFieldValue={handleValueChange}
						selected={formik.values[mainfield]}
					>
						<FormikSubList
							list={sublist}
							fieldname={subfield}
							selected={formik.values[subfield]}
							setFieldValue={handleValueChange}
						/>
					</FormikMainList>
				</div>
			)}
		</>
	);
};
