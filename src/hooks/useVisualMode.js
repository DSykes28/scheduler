import { useState } from 'react';


const useVisualMode = (initial) => { 
  
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);
  
  function transition (newMode, replace = false) {
    setMode(newMode)
    replace ? setHistory([...history]) : setHistory([...history, mode])
    };
  
  function back () {
    setMode(history.pop())
    setHistory([...history])
  };
  return { transition, back, mode };
};

export default useVisualMode;