import { BrowserRouter, Route } from "react-router-dom";

const App = () => {
	return (
		<div>
			<BrowserRouter>
				<Route path="/" exact component={App} />
			</BrowserRouter>
		</div>
	);
};

export default App;
