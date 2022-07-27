import { useState } from "react";

const StepThree = () => {
	const [option, setOption] = useState(null);
	return (
		<div className="flex justify-between relative">
			<div className="w-1/3">
				<label
					onClick={() => {
						option === "filter" ? setOption(null) : setOption("filter");
					}}
					className={`w-full flex border-2 rounded-xl justify-center text-lg p-1 ${
						option === "filter"
							? "bg-blue-10 text-white border-blue-10 rounded-b-none"
							: "border-dark-1 text-dark-1"
					}`}
				>
					Filter
				</label>
				{option === "filter" && (
					<div className=" absolute pb-4 left-0 w-full rounded-xl rounded-tl-none bg-dark-3 text-white flex flex-wrap justify-center select-none">
						<label className="w-full flex justify-center my-2">Rating</label>
						<div>
							<input
								type="radio"
								name="rating"
								id="rating3"
								className="peer hidden"
							/>
							<label
								htmlFor="rating3"
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
								id="langen"
								className="peer hidden"
							/>
							<label
								htmlFor="langen"
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
								className="mx-1 px-2 h-9 flex justify-center items-center rounded-lg border peer-checked:border-blue-10 peer-checked:bg-blue-10 peer-checked:text-white"
							>
								Turkish
							</label>
						</div>
					</div>
				)}
			</div>
			<div className="w-1/3">
				<label
					onClick={() => {
						option === "sort" ? setOption(null) : setOption("sort");
					}}
					className={`w-full flex border-2 rounded-xl justify-center text-lg p-1 ${
						option === "sort"
							? "bg-blue-10 text-white border-blue-10 rounded-b-none"
							: "border-dark-1 text-dark-1"
					}`}
				>
					Sort
				</label>
				{option === "sort" && (
					<div className=" absolute pb-4 pt-2 left-0 w-full rounded-xl rounded-tr-none bg-dark-3 text-white flex flex-col flex-wrap justify-center px-20  select-none">
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
								className="mx-1 px-2 my-1 h-9 flex justify-center items-center rounded-lg border peer-checked:border-blue-10 peer-checked:bg-blue-10 peer-checked:text-white"
							>
								Name - Reverse
							</label>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default StepThree;
