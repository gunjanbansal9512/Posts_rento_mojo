import "./App.css";
import Users from "./Users";
import { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Posts from "./Posts";
import Post from "./Post";
import Loading from "./Loading";
function App() {
	const apiUrl = "https://jsonplaceholder.typicode.com/users";
	const [users, setUser] = useState({ loading: false, deatils: [] });
	useEffect(() => {
		setUser({ loading: true });

		fetch(apiUrl)
			.then((res) => res.json())
			.then((repos) => {
				setUser({ loading: false, deatils: repos });
			});
	}, [setUser]);
	return (
		<div className="App">
			{users.loading === true ? (
				<Loading />
			) : (
				<div>
					{/* <Users users={users.deatils} /> */}
					<BrowserRouter>
						<Switch>
							<Route path="/posts/:id">
								<Posts />
							</Route>
							<Route exact path="/post/:id">
								<Post />
							</Route>
							<Route exact path="/">
								<Users users={users.deatils} />
							</Route>
							<Route path="*">
								<Users users={users.deatils} />
							</Route>
						</Switch>
					</BrowserRouter>
				</div>
			)}
		</div>
	);
}

export default App;
