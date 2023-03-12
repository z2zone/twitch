import React from "react";

class GoogleAuth extends React.Component {
	componentDidMount() {
		window.gapi.load("client:auth2", () => {
			console.log("client auth loaded");
		});
	}
	render() {
		return <div>Google Auth</div>;
	}
}

export default GoogleAuth;
