import React, { useEffect, useState } from 'react'
import Axios from 'axios'

const Users = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    Axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setUsers(response.data)
      })
      .catch(error => {
        console.error("There was an error fetching the users!", error)
      })
  },[])

  return (
    <div>
      <h3>User Data</h3>
      <pre>{JSON.stringify(users, null, 2)}</pre>

      {users.length > 0 ? (
        <table border={2}>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <>No Data</>
      )}
    </div>
  )
}

export default Users
