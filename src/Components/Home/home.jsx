import { useEffect, useState } from "react";
import { getUsers, addUser, updateUser, deleteUser } from "../../Services/axios.service";
import "./home.css";

const Home = () => {
    const [users, setUsers] = useState([]);

    const getAllUsers = async () => {
        const response = await getUsers();
        setUsers(response.data);
    }

    const createUser = async () => {
        const payload = {
            "name": "Leanne Graham",
            "username": "Bret",
            "email": "Sincere@april.biz",
            "address": {
                "street": "Kulas Light",
                "suite": "Apt. 556",
                "city": "Gwenborough",
                "zipcode": "92998-3874",
                "geo": {
                    "lat": "-37.3159",
                    "lng": "81.1496"
                }
            },
            "phone": "1-770-736-8031 x56442",
            "website": "hildegard.org",
            "company": {
                "name": "Romaguera-Crona",
                "catchPhrase": "Multi-layered client-server neural-net",
                "bs": "harness real-time e-markets"
            }
        };

        const response = await addUser(payload);
        console.log("New User Added By Axios: ", response.data);
    }

    const updateExistingUser = async () => {
        const payload = {
            "name": "Bret Graham",
            "username": "Bret",
            "email": "Sincere@april.biz",
            "address": {
                "street": "Kulas Light",
                "suite": "Apt. 556",
                "city": "Gwenborough",
                "zipcode": "92998-3874",
                "geo": {
                    "lat": "-37.3159",
                    "lng": "81.1496"
                }
            },
            "phone": "1-770-736-8031 x56442",
            "website": "hildegard.org",
            "company": {
                "name": "Romaguera-Crona",
                "catchPhrase": "Multi-layered client-server neural-net",
                "bs": "harness real-time e-markets"
            }
        };

        const response = await updateUser(1, payload);
        console.log("The existing user's name is updated using axios", response.data);
    }

    const deleteUserById = async () => {
        const response = await deleteUser(1);
        console.log("User has been deleted", response.data);
    }

    useEffect(() => {
        getAllUsers();
    }, []);

    return (
        <div>
            <h1>Axios Task</h1>
            <div className="buttons">
                <button className="btn addUser" onClick={createUser}>Add a new user</button>
                <button className="btn updateUser" onClick={updateExistingUser}>Update user</button>
                <button className="btn deleteUser" onClick={deleteUserById}>Delete user</button>
            </div>
            <h2>User details are fetched from mock API using axios. </h2>
            <div className="users">
                {users.map((user, index) => (
                    <div className="user" key={index}>
                        <div><span className="details name">Name: </span>{user.name}</div>
                        <div><span className="details email">Email: </span>{user.email}</div>
                        <div><span className="details phoneNumber">Phone number: </span>{user.phone}</div>
                        <div><span className="details website">Company: </span>{user.company.name}</div>
                    </div>
                ))}
            </div>

        </div>
    );
}

export default Home;