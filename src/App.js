import React, { useRef, useState, useMemo, useCallback } from 'react'
import Counter from './Counter';
import Hello from './Hello'
import InputSample from './InputSample'
import UserList from './UserList'
import CreateUser from './CreateUser'

function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
  })

  const { username, email } = inputs
  const onChange = useCallback(e => {
    const { name, value } = e.target
    setInputs({
      ...inputs,
      [name]: value
    })
  },
  [inputs]
  )

  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'seul',
      email: 'public.seul@gmail.com',
      active: true
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
      active: false
    },
    {
      id: 3,
      username: 'odile',
      email: 'odile@example.com',
      active: false
    }
  ])

  const nextId = useRef(4)
  const onCreate = useCallback(() => {
    const user = {
      id: nextId.current,
      username,
      email
    }
    setUsers([...users, user]) // or setUsers(users.concat(user))

    setInputs({
      username: '',
      email: ''
    })
    nextId.current += 1
  },
  [users, username, email]
  )

  const onRemove = useCallback((id) => {
    setUsers(users.filter(user => user.id !== id))
  }, [users])
  

  const onToggle = useCallback(id => {
    setUsers(
      users.map(user => user.id === id ? { ...user, active: !user.active } : user )
    )
  }, [users]
  )

  function countActiveUsers(users) {
    console.log(`Counting active users...`)
    return users.filter(user => user.active).length
  }

  const count = useMemo(() => countActiveUsers(users), [users])
 
  return (
    <>
    <Hello />
    <Counter />
    <InputSample />
    <CreateUser 
      username={username}
      email={email}
      onChange={onChange}
      onCreate={onCreate}
    />
    <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
    <div>Count of Active Users: {count}</div>
    </>
  )
}

export default App;