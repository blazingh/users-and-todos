import { useEffect, useState } from "react";
import data from "../../data";

const StepThree = ({ formik, setStep }) => {
	const [clinics, setClinics] = useState(
		data.clinics.filter((x) => x.district === formik.values.district.id),
	);
	const [clinicList, setClinicList] = useState(clinics);
	const [filter, setFilter] = useState({ rating: 3, language: "all" });
	const [sort, setSort] = useState(0);
	const [option, setOption] = useState(null);

	useEffect(() => {
		handleFilter();
	}, [filter]);

	useEffect(() => {
		setOption(null);
		setClinicList(handleSort(clinicList, sort));
	}, [sort]);

	const handleFilter = () => {
		let newList = [...clinics];
		setOption(null);
		newList = newList.filter((x) => x.rating >= filter.rating);
		newList = newList.filter((x) => x.language.includes(filter.language));
		setClinicList(handleSort(newList, sort));
	};
	const handleSort = (list, sort) => {
		let newList = list;
		switch (sort) {
			case 1:
				return newList.sort((a, b) => a.rating - b.rating);
			case 2:
				return newList.sort((a, b) => b.rating - a.rating);
			case 3:
				return newList.sort((a, b) => (a.name > b.name ? 1 : -1));
			case 4:
				return newList.sort((a, b) => (a.name < b.name ? 1 : -1));
			default:
				return list;
		}
	};
	return (
		<div>
			<div className="flex justify-between relative">
				<div className="w-1/3">
					<label
						onClick={() => {
							option === "filter" ? setOption(null) : setOption("filter");
						}}
						className={`w-full flex border-2 rounded-xl justify-center text-lg p-1 cursor-pointer ${
							option === "filter"
								? "bg-blue-10 text-white border-blue-10 rounded-b-none"
								: "border-dark-1 text-dark-1"
						}`}
					>
						Filter
					</label>
					<div
						className={` z-10 absolute pb-4 left-0 w-full rounded-xl rounded-tl-none bg-dark-3 text-white flex-wrap justify-center select-none ${
							option === "filter" ? "flex" : "hidden"
						}`}
					>
						<label className="w-full flex justify-center my-2">Rating</label>
						<div>
							<input
								type="radio"
								name="rating"
								id="rating3"
								className="peer hidden"
								defaultChecked={true}
							/>
							<label
								htmlFor="rating3"
								onClick={() => {
									setFilter({ ...filter, rating: 3 });
								}}
								className="mx-1 h-9 w-9 flex justify-center items-center rounded-lg border peer-checked:border-blue-10 peer-checked:bg-blue-10 peer-checked:text-white"
							>
								3+
							</label>
						</div>
						<div>
							<input
								type="radio"
								name="rating"
								id="rating4"
								className="peer hidden"
							/>
							<label
								htmlFor="rating4"
								onClick={() => {
									setFilter({ ...filter, rating: 4 });
								}}
								className="mx-1 h-9 w-9 flex justify-center items-center rounded-lg border peer-checked:border-blue-10 peer-checked:bg-blue-10 peer-checked:text-white"
							>
								4+
							</label>
						</div>
						<div>
							<input
								type="radio"
								name="rating"
								id="rating5"
								className="peer hidden"
							/>
							<label
								htmlFor="rating5"
								onClick={() => {
									setFilter({ ...filter, rating: 5 });
								}}
								className="mx-1 h-9 w-9 flex justify-center items-center rounded-lg border peer-checked:border-blue-10 peer-checked:bg-blue-10 peer-checked:text-white"
							>
								5
							</label>
						</div>
						<label className="w-full flex justify-center my-2">Launguage</label>
						<div>
							<input
								type="radio"
								name="lang"
								id="langall"
								className="peer hidden"
								defaultChecked={true}
							/>
							<label
								htmlFor="langall"
								onClick={() => {
									setFilter({ ...filter, language: "all" });
								}}
								className="mx-1 px-2 h-9 flex justify-center items-center rounded-lg border peer-checked:border-blue-10 peer-checked:bg-blue-10 peer-checked:text-white"
							>
								all
							</label>
						</div>
						<div>
							<input
								type="radio"
								name="lang"
								id="langen"
								className="peer hidden"
							/>
							<label
								htmlFor="langen"
								onClick={() => {
									setFilter({ ...filter, language: "english" });
								}}
								className="mx-1 px-2 h-9 flex justify-center items-center rounded-lg border peer-checked:border-blue-10 peer-checked:bg-blue-10 peer-checked:text-white"
							>
								English
							</label>
						</div>
						<div>
							<input
								type="radio"
								name="lang"
								id="langtr"
								className="peer hidden"
							/>
							<label
								htmlFor="langtr"
								onClick={() => {
									setFilter({ ...filter, language: "turkish" });
								}}
								className="mx-1 px-2 h-9 flex justify-center items-center rounded-lg border peer-checked:border-blue-10 peer-checked:bg-blue-10 peer-checked:text-white"
							>
								Turkish
							</label>
						</div>
					</div>
				</div>
				<div className="w-1/3">
					<label
						onClick={() => {
							option === "sort" ? setOption(null) : setOption("sort");
						}}
						className={`w-full flex border-2 rounded-xl justify-center text-lg p-1 cursor-pointer ${
							option === "sort"
								? "bg-blue-10 text-white border-blue-10 rounded-b-none"
								: "border-dark-1 text-dark-1"
						}`}
					>
						Sort
					</label>
					<div
						className={` z-10 absolute pb-4 pt-2 left-0 w-full rounded-xl rounded-tr-none bg-dark-3 text-white flex-col flex-wrap justify-center px-20  select-none ${
							option === "sort" ? "flex" : "hidden"
						}`}
					>
						<div>
							<input
								type="radio"
								name="sort"
								id="sort0"
								className="peer hidden"
								defaultChecked={true}
							/>
							<label
								htmlFor="sort0"
								onClick={() => {
									setSort(0);
								}}
								className="mx-1 px-2 my-1 h-9 flex justify-center items-center rounded-lg border peer-checked:border-blue-10 peer-checked:bg-blue-10 peer-checked:text-white"
							>
								no sorting
							</label>
						</div>
						<div>
							<input
								type="radio"
								name="sort"
								id="sort1"
								className="peer hidden"
							/>
							<label
								htmlFor="sort1"
								onClick={() => {
									setSort(1);
								}}
								className="mx-1 px-2 my-1 h-9 flex justify-center items-center rounded-lg border peer-checked:border-blue-10 peer-checked:bg-blue-10 peer-checked:text-white"
							>
								by Ratings
							</label>
						</div>
						<div>
							<input
								type="radio"
								name="sort"
								id="sort2"
								className="peer hidden"
							/>
							<label
								htmlFor="sort2"
								onClick={() => {
									setSort(2);
								}}
								className="mx-1 px-2 my-1 h-9 flex justify-center items-center rounded-lg border peer-checked:border-blue-10 peer-checked:bg-blue-10 peer-checked:text-white"
							>
								Ratings - reverse
							</label>
						</div>
						<div>
							<input
								type="radio"
								name="sort"
								id="sort3"
								className="peer hidden"
							/>
							<label
								htmlFor="sort3"
								onClick={() => {
									setSort(3);
								}}
								className="mx-1 px-2 my-1 h-9 flex justify-center items-center rounded-lg border peer-checked:border-blue-10 peer-checked:bg-blue-10 peer-checked:text-white"
							>
								By Name
							</label>
						</div>
						<div>
							<input
								type="radio"
								name="sort"
								id="sort4"
								className="peer hidden"
							/>
							<label
								htmlFor="sort4"
								onClick={() => {
									setSort(4);
								}}
								className="mx-1 px-2 my-1 h-9 flex justify-center items-center rounded-lg border peer-checked:border-blue-10 peer-checked:bg-blue-10 peer-checked:text-white"
							>
								Name - Reverse
							</label>
						</div>
					</div>
				</div>
			</div>
			{clinicList.map((clinic) => {
				const district = data.disctricts.find((x) => x.id === clinic.district);
				const city = data.cities.find((x) => x.id === district.city);
				return (
					<div
						key={clinic.id}
						className="border-2 border-blue-10 text-dark-1 w-full p-2 rounded-xl grid grid-cols-4 my-4"
					>
						<div className=" aspect-square overflow-hidden col-span-1 flex justify-center items-center ">
							<img
								src={`https://picsum.photos/200?" ${clinic.id} `}
								alt="img"
								className=" rounded object-cover"
							/>
						</div>
						<div className=" col-span-3 ml-2 flex items-center relative">
							<label className=" font-semibold text-lg ">{clinic.name}</label>
							<label className=" absolute top-0 right-0">
								{clinic.rating} / 5
							</label>
							<label className=" absolute bottom-0 right-0">
								{clinic.language.map((lang) => lang != "all" && lang + " ")}
							</label>
							<label className=" absolute bottom-0 left-0">
								{city.name} - {district.name}
							</label>
						</div>
						<div className="col-span-4 mt-2 flex justify-center items-center">
							<button
								type="button"
								className="button w-full"
								onClick={() => {
									formik.setFieldValue("clinic", clinic);
									setStep(4);
								}}
							>
								select
							</button>
						</div>
					</div>
				);
			})}
			<label
				onClick={() => {
					setClinics(data.clinics);
					handleFilter();
				}}
			>
				show all clinics
			</label>
		</div>
	);
};

export default StepThree;
