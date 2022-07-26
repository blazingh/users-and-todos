import arrow from "../arrow.png";

export const FormikList = ({
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
				className={`border-b relative w-full flex text-lg  p-3 cursor-pointer select-none ${
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
