import { useState } from "react";
import FormikContainer from "./components/FormikContainer";
import NavDashboard from "./components/NavDashboard";
import StepsDashBoard from "./components/StepsDashBoard";

function App() {
	const [step, setStep] = useState({ current: 1, next: null });

	const handleStep = (delta) => {
		setStep(step + delta);
	};

	return (
		<div className="flex flex-col justify-center items-center w-screen max-w-lg">
			<FormikContainer />
		</div>
	);
}

export default App;
