const StepSix = ({ value }) => {
	return (
		<div className="w-full flex flex-col justify-center items-center  rounded-lg border-dark-1">
			<label className=" w-full flex justify-center bg-dark-1 text-white py-2 rounded-t-lg text-lg">
				Sumary
			</label>
			<div className="flex flex-col justify-start w-full p-2 px-4 bg-blue-10">
				<div className=" my-2">
					<label className="text-white font-semibold">Treatement : </label>
					<label className="text-white font-thin">
						{value.group.name} - {value.treatement.name}
					</label>
				</div>
				<div className=" my-2">
					<label className="text-white font-semibold">Location : </label>
					<label className="text-white font-thin">
						{value.city.name} - {value.district.name}
					</label>
				</div>
				<div className=" my-2">
					<label className="text-white font-semibold">Clinic : </label>
					<label className="text-white font-thin"> {value.clinic.name}</label>
				</div>
				<div className=" my-2">
					<label className="text-white font-semibold">Doctor : </label>
					<label className="text-white font-thin">{value.doctor.name}</label>
				</div>
				<div className=" my-2 ">
					<label className="text-white font-semibold">on : </label>
					<label className="text-white font-thin">
						{value.date.day} / {value.date.month}
					</label>
				</div>
				<div className=" my-2">
					<label className="text-white font-semibold">at : </label>
					<label className="text-white font-thin">
						{value.time.hour}:{value.time.min}
					</label>
				</div>
			</div>
		</div>
	);
};

export default StepSix;
