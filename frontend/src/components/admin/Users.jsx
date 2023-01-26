import React from 'react'
import me from "../../assets/founder.jpg"
const Users = () => {
  return (
    <section className='myOrdersTable'>
        <main>
        <table>
          <thead>
            <tr>
              <th>UserID</th>
              <th>Name</th>
              <th>Photo</th>
              <th>Role</th>
              <th>Since</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>#jdfnjdjfg</td>
              <td>Jatin</td>
              <td><img src={me} alt="Profile Photo" /></td>
              <td>Admin</td>
              <td>{'24-02-2022'}</td>
            </tr>
          </tbody>
        </table>
      </main>
    </section>
  )
}

export default Users