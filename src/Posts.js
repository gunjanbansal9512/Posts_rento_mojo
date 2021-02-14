import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function Posts() {
	const { id } = useParams();
	// console.log(id);
	const apiUrl = "https://jsonplaceholder.typicode.com/posts?userId=";
	const [posts, setPosts] = useState([]);
	const [searchText, setSearchText] = useState("");
	const [data, setData] = useState(posts);
	// console.log(id);
	function getData() {
		axios
			.get(apiUrl + id + "&skip=0&limit=10")
			.then((response) => {
				//console.log(response.data);
				setPosts(response.data);
				setData(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}
	useEffect(() => {
		getData();
		return () => {
			setPosts({}); // This worked for me
		};
	}, []);
	const handleSearch = (event) => {
		const lowercasedValue = event.target.value;
		setSearchText(lowercasedValue);
		if (lowercasedValue === "") {
			setData(posts);
		} else {
			const filteredData = data.filter((item) => {
				return Object.keys(item).some((key) =>
					item[key].toString().toLowerCase().includes(lowercasedValue)
				);
			});
			setData(filteredData);
		}
	};
	// console.log();
	return (
		<div className="posts">
			<div className="ui category search">
				<div className="ui icon input">
					<input
						className="prompt"
						type="text"
						placeholder="Search Post..."
						value={searchText}
						onChange={handleSearch}
					/>
					<i className="search icon"></i>
				</div>
			</div>
			<div className="ui middle aligned divided list">
				{data.map((post, index) => (
					<div className="item" key={index}>
						<Link to={`/post/${post.id}`} key={post.id}>
							<div className="content">{post.title}</div>
						</Link>
					</div>
				))}
			</div>
		</div>
	);
}

export default Posts;
