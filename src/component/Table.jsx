import React from 'react'

function Table({data}) {
  return (
      <table>
        <thead>
              <tr>
                  <th>User ID</th>
                  <th> Name</th>
                  <th> Email</th>
                  <th>Gender</th>
              </tr>
        </thead>
        <tbody>
              {data.map((item, index) => (
                  <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>{item.gender}</td>
                  </tr>
              ))}
        </tbody>
          
          

      </table>
  )
}

export default Table