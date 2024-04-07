import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [users, setUsers] = useState([])
  const [counter, setCounter] = useState(0)
  const [name, setName] = useState('')

  // #1 - Every render 

  useEffect(() => {

  console.log('Every render')
  })

  // #2 - Only once - when the component mounts

  useEffect(() => {
    console.log('At mounting')
    const fetchData = async () => {
    const {data} = await axios.get('https://jsonplaceholder.typicode.com/users')
    setUsers(data)
    }
    fetchData()
  }, [])  // [] - Dependency list

  // #3 - Will run only when the dependency changes

  useEffect(() => {
   console.log('counter: ', counter)

  }, [counter]) // [] - Dependency list


  useEffect(() => {
    console.log('Name: ', name)
 
   }, [name]) // [] - Dependency list
 


   // Name: {users[0]?.name}   -  ?  -  optional chaining

  return (
    <>
    
      <h1>Hello World !</h1>   
      Name: {users[0]?.name}   
      <br /><br />
      {counter}
      <br /><br />
      <button onClick={() => setCounter(counter + 1)}>Add</button>
      <br /><br />
      What is your name? <input type="text" onInput={e => setName(e.target.value)}/>

    </>
  )
}

export default App
