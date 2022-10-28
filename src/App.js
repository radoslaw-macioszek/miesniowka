import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./state/store";
import Home from "./views/Home";

function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Route path="/" exact component={Home} />
			</BrowserRouter>
		</Provider>
	);
}

export default App;
