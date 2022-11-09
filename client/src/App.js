import React, {useEffect, useState } from 'react'

function App() {
  const [backendData, setBackendData] = useState([{}])
  const [inputHeight, setinputHeight] = useState('180');


  useEffect(() => {
    fetch("/people").then(
    response => response.json()
  ).then(
    data => {
      setBackendData(data)
    }
  )
  }, [])

  return (
    
    <div className="App">
      <header>The header</header>
      <h1>Which Starwars character are you??</h1>
      <h4>(the same height as)</h4>
      <form>
          <input
              id="txtinputHeightToAdd"
              type="text"
              onChange={(e) => setinputHeight(e.target.value)}
              placeholder="My height is..."/>
          {/* <button type="submit" className="button" id="btnAddTodo">
              Compare
          </button> */}
          <div>You are {inputHeight} cm tall</div>
      </form>
      <div>
        {(backendData.length == 1) ? (
          
          <p>Loading...</p>
        ): (
          backendData.map((person, i) => {if (person.height === inputHeight) {return <p key={i}>{person.name} is also {person.height} cm tall</p>}})
        )
        }
      </div>
      
      <footer>Made by Chris</footer>
    </div>
  );
}

export default App;
