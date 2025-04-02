import React from "react";
import { useState, useRef } from "react";
import "./App10.css";
export default function () {
  const [run, setRun] = useState(0);
  const [wicket, setWicket] = useState(0);
  const [msg, setMsg] = useState("Let's begin the game!");
  const runRef = useRef();
  const wicketRef = useRef();
  const msgRef = useRef();
  const handleRun = (v) => {
    if (wicket < 10) {
      setRun(run + v);
      setMsg("Well Done!");
      runRef.current.style.backgroundColor = "yellow";
      wicketRef.current.style.transform = "scale(1)";
      runRef.current.style.transform = "scale(1.1)";
      wicketRef.current.style.backgroundColor = "white";
    }
  };

  const handleWicket = () => {
    wicket < 10 && setWicket(wicket + 1);
    if (wicket < 9) {
      setMsg("Better luck next time!");
      runRef.current.style.backgroundColor = "white";
      runRef.current.style.transform = "scale(1)";
      wicketRef.current.style.transform = "scale(1.1)";
      wicketRef.current.style.backgroundColor = "lightblue";
    } else {
      setMsg("Game Over");
      msgRef.current.style.backgroundColor = "green";
      runRef.current.style.backgroundColor = "white";
      wicketRef.current.style.backgroundColor = "white";
    }
  };
  return (
    <div className="App-App10-Container">
      <h3>This is App10</h3>
      <div className="App-App10-Row">
        <div className="App-App10-Box" ref={runRef}>
          <button onClick={()=>handleRun(1)}>1</button>
          <button onClick={()=>handleRun(2)}>2</button>
          <button onClick={()=>handleRun(4)}>4</button>
          <button onClick={()=>handleRun(6)}>6</button>
          <p>{run}</p>
        </div>
        <div className="App-App10-Box" ref={wicketRef}>
          <button onClick={handleWicket}>Wicket</button>
          <p>{wicket}</p>
        </div>
      </div>
      <hr></hr>
      <div className="App-App10-Row">
        <div className="App-App10-Box" ref={msgRef}>
          {" "}
          {msg}
        </div>
      </div>
    </div>
  );
}
// useEffect(()=>{
//     if(run>0 && wicket<10)
//         setMsg("Well done")
// },[run]);
// useEffect(()=>{
//     if(wicket===10)
//         setMsg("Game Over");
//     else if(wicket<9 && wicket>0)
//         setMsg("Better luck next time")
//     else if(wicket>10)
//         setWicket(10);
// },[wicket]);


