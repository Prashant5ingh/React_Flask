import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';
import { Service, githubService, memberService } from './Service'

function App() {

  const [jokes, setJokes] = useState([])
  const [gitUserData, setGitUserData] = useState([])
  const [member, setMemberData] = useState([{}])

  async function fetchData() {
    const service = await Service();
    setJokes(service)

  }

  async function userData() {
    const service = await githubService();
    setGitUserData(service)

  }

  async function memberData() {
    const service = await memberService();
    setMemberData(service)
    console.log("mem data", service)

  }
  useEffect(() => {
    fetchData();
    userData();
    memberData()

    // Can use axios here also instead creating a seperate api service file.
    // axios.get('/api/jokes')
    //   .then((res) => {
    //     console.log("runs")
    //     setJokes(res.data)
    //   })
    //   .catch((error) => {
    //     console.log(error)
    //   })

  }, [])
  return (
    <>
      <div className='box'>
        <div className='container'>
          <h1>Jokes with Prime</h1>
          <p>Jokes: {jokes.length}</p>
          {
            jokes.map((joke, index) => (
              // "{}" curly braces in map() needs return that's why it was not rendering this html part.
              // Instead use "()"
              <div key={joke.id}>
                <h3>Title: {joke.title}</h3>
                <h3>Content: {joke.content}</h3>
              </div>
            ))
          }
        </div>

        <div className='container'>
          <h1>Github User Data</h1>
          <p>Name: {gitUserData.name}</p>
          <p>UserName: {gitUserData.login}</p>
          <p>Github url: {gitUserData.url}</p>
        </div>

        <div className='container'>
          <h1>Members Data</h1>
          {/* <p>Members Data: {member.Members[0]}</p> */}
          {
            (typeof member.Members === 'undefined')? (<p>Loading...</p>):
            (member.Members.map((mem, index) => 
              (
                <div key={index}>
                  <p>{mem}</p>
                  </div>

              )
            )
          )
          }
          
        </div>

      </div>
    </>
  )
}

export default App
