import React, { Component } from 'react'
import Axios from 'axios'

class Users extends Component {
    state = {users: [] }
    componentDidMount() {
        Axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            this.setState({users: response.data})
            })
  }

  render() {
    return (
      <div>
        <h3>User Data</h3>
        <pre>{JSON.stringify(this.state.users)}</pre>
        <button onClick={this.getUsers}>Get Users</button>

        {
          this.state.users.length > 0 ? (
            <table border={2}>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {
                  this.state.users.map((user) => {
                    return (
                      <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
          ) : (
            <>No Data</>
          )
        }
      </div>
    )
  }
}

export default Users
