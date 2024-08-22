import React, { useState, useEffect } from "react";
import Axios from "axios";

const Users = () => {
    const [users, setUsers] = useState([]);

    const getUsers = () => {
        Axios.get('https://jsonplaceholder.typicode.com/users')
            .then((resp) => {
                setUsers(resp.data); // Update the state with the response data
            })
            .catch((err) => {
                console.error("Error fetching users:", err); // Handle errors here
            });
    }

    useEffect(() => {
        getUsers(); // Fetch users when the component mounts
    }, []);

    return (
        <div>
            <h1>Users Component</h1>
            <hr />
            <button onClick={getUsers}>Get Users</button>
            <pre>{JSON.stringify(users, null, 2)}</pre> {/* Prettify JSON output */}
        </div>
    );
}

export default Users;
