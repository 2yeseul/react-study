import React from 'react'

function User({ user }) {
  return (
    <div>
      <b>{user.username}</b> <span>({user.email})</span>
    </div>
  )
}

function UserList() {
  const users = [
    {
      id: 1,
      username: 'seul',
      email: 'public.seul@gmail.com'
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com'
    },
    {
      id: 3,
      username: 'odile',
      email: 'odile@example.com'
    }
  ]

  return (
    <div>
      {users.map(user =>
        <User user={user} key={user.id}/>
        )}
    </div>
  )
}

export default UserList