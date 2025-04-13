import React from 'react'

const UserList = () => {
    const users=[
        {id:1,name:"Alice",age:25},
        {id:2,name:"Bob",age:24},
        {id:3,name:"Raya",age:23},
    ]
  return (
    <div>
        {users.map((user)=>(
            <ul key={Math.random()}>
                <h1>Id:{user.id}</h1>
                <h1>Name:{user.name}</h1>
                <h1>Age:{user.age}</h1>
            </ul>
        ))}
    </div>
  )
}

export default UserList