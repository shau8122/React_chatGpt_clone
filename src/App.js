import { useState } from "react";

function App() {
  const [value, setValue] = useState("");
  // const [massages, setMassages] = useState("");
  const getMassages= async ()=>{
    const options={
      method:'POST',
      body:JSON.stringify(
        {
          massage:"hi"
        }
      ),
      headers:{
        'Content-Type':'application/json'
      }
    }
    try {
      const response = await fetch('http://localhost:8000/completions',options);
      const data = await response.json();
      // setMassages(data);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div className="app">
      <section className="side-bar">
        <button>＋ New Chat</button>
        <ul className="history">
        <li>Hello</li>
        </ul>
        <nav>
          <p>Made By Shaukat Ali</p>
        </nav>
      </section>
      <section className="main">
        <h2>ShauGPT</h2>
        <ul className="feed">

        </ul>
        <div className="bottom-section">
          <div className="input-container">
            <input type="text" value={value} onChange={(e)=>{setValue(e.target.value)}}/>
              <div id="submit" onClick={getMassages}>
                ➢
              </div>
          </div>
        </div>
        <p className="info">Free Research Preview. ChatGPT may produce inaccurate information about people, places, or facts. ChatGPT August 3 Version</p>
      </section>
    </div>
  );
}
export default App;
