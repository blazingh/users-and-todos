const StepSix = ({ value }) => {
	return (
		<div className="w-full flex flex-col justify-center items-center">
			<label>Sumary</label>
			<label className="">
				Treatement : {value.group.name} - {value.treatement.name}
			</label>
			<label className="">
				location : {value.city.name} - {value.district.name}
			</label>
			<label className="">clinic : {value.clinic.name}</label>
			<label className="">doctor : {value.doctor.name}</label>
			<label className="">
				on : {value.date.day} / {value.date.month}
			</label>
			<label className="">
				at : {value.time.hour}:{value.time.min}
			</label>
		</div>
	);
};

export default StepSix;
