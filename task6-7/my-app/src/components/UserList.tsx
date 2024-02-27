import { useEffect, useState } from 'react';

type User = {
	id: number;
	firstName: string;
	lastName: string;
	age: number;
	company: {
		address: any;
		department: string;
		name: string;
		title: string;
	};
};

async function getUserList(url: string): Promise<User[]> {
	return fetch(url).then((res) => res.json());
}

const UserList = () => {
	const [users, setUsers] = useState<User[] | null>(null);

	useEffect(() => {
		getUserList('https://dummyjson.com/users').then((data: any) => {
			if (data) {
				setUsers(data.users);
			}
		});
	}, []);

	if (!users) {
		return null;
	}

	return (
		<div>
			{users.map((user) => {
				return (
					<div>
						<h2>
							{user.firstName} {user.lastName}
						</h2>

						<p>ID: {user.id}</p>
						<p>Возраст: {user.age}</p>
						{/* <p>Email: {user.email}</p> */}
					</div>
				);
			})}
		</div>
	);
};

export default UserList;

// fetch('https://dummyjson.com/users')
// .then(res => res.json())
// .then(res => res.users)
// .then(console.log);

// getUserList('https://dummyjson.com/users')

// async function getUserList(url:string):Promise<User[]>{
//     const response = await fetch(url).then(res => res.json())
//     response.users.forEach((element:any) => {
//         console.log(element.id +" "+ element.firstName)
//         return <div>element.id</div>
//     });
//     console.log(response.users as User[])

//     return response.users as User[]
// };

// getUserList('https://dummyjson.com/users')
