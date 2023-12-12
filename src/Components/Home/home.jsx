import { useEffect, useState } from "react";
import { getUsers, addUser, updateUser, deleteUser } from "../../Services/axios.service";
import "./home.css";

const Home = () => {
    const [users, setUsers] = useState([]);

    const getAllUsers = async () => {
        const response = await getUsers();
        console.log("Data: ", response.data);
        setUsers(response.data);
    }

    const createUser = async () => {
        const payload = {
            "id": 1,
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

        const response = await updateUser(1, payload);
        console.log("The existing user is updated using axios", response.data);
    }

    const deleteUserById = async () => {
        const response = await deleteUser(1);
        console.log("User has been deleted", response.data);
    }

    useEffect(() => {
        getAllUsers();
    }, []);

    useEffect(() => {
        console.log("Users: ", users);
    }, [users])

    return (
        <div>
            <h1>Axios Task</h1>
            <button onClick={createUser}>Add a new user</button>
            <button onClick={updateExistingUser}>Update user</button>
            <button onClick={deleteUserById}>Delete user</button>
            {users.map((user, index) => (
                <div className="user" key={index}> 
                    <div className="name">Name: {user.name}</div>
                    <div className="email">Email: {user.email}</div>
                    <div className="phoneNumber">Phone number: {user.phone}</div>
                    <div className="address"></div>
                    <div className="website">Website: {user.website}</div>
                </div>
            ))}
        </div>
    );
}

export default Home;