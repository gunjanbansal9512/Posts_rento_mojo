import React from "react";

import { Link } from "react-router-dom";

function Users({ users }) {
	// console.log(users);

	return (
		<div className="users">
			<table className="ui celled table">
				<thead>
					<tr>
						<th>#</th>
						<th>Name</th>
						<th>Company</th>
						<th>Show Posts</th>
					</tr>
				</thead>
				<tbody>
					{users.map((user) => (
						<tr key={user.id}>
							<td>{user.id}</td>
							<td data-label="Name">{user.name}</td>
							<td data-label="Age">{user.company.name}</td>
							<td data-label="Show Post">
								<Link to={`/posts/${user.id}`} className="userLink">
									Show Post
								</Link>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

export default Users;
