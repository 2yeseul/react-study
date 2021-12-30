import React, { useRef, useState } from 'react'
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
  const onChange = e => {
    const { name, value } = e.target
    setInputs({
      ...inputs,
      [name]: value
    })
  }
  const [users, setUsers] = useState([
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
  ])

  const nextId = useRef(4)
  const onCreate = () => {
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
  }

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
    <UserList users={users} />
    </>
  )
}

export default App;