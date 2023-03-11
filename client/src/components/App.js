import { BrowserRouter, Route, Link } from "react-router-dom";
import Header from "./Header";
import StreamCreate from "./streams/StreamCreate";
import StreamDelete from "./streams/StreamDelete";
import StreamEdit from "./streams/StreamEdit";
import StreamList from "./streams/StreamList";
import StreamShow from "./streams/StreamShow";

const App = () => {
	return (
		<div className="ui container">
			<BrowserRouter>
				<Header />
				<Route path="/" exact component={StreamList} />
				<Route path="/streams/show" component={StreamShow} />
				<Route path="/stream/edit" exact component={StreamEdit} />
				<Route path="/streams/delete" exact component={StreamDelete} />
				<Route path="/streams/new" exact component={StreamCreate} />
			</BrowserRouter>
		</div>
	);
};

export default App;
