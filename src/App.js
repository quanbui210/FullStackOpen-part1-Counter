import React, {useState} from "react";
import Button from "./Button";
import Statistic from "./Statistic";




const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  //const [all, setAll] = useState(0);
  const all = good + bad + neutral
  
  const goodClick = () => {
    setGood(good + 1)
    //setAll(all + 1)
  };
  const badClick = () => {
    setBad(bad + 1)
    //setAll(all + 1)
  };

  const neutralClick = () => {
    setNeutral(neutral + 1)
    //setAll(all + 1)
  };

  return (
    <div>
    <h1>Give FeedBack</h1>
        <Button  text="Good" onClick={goodClick} >Good </Button>
        <Button text="Neutral" onClick={neutralClick}>Bad</Button> 
        <Button text="Bad" onClick={badClick} >Neutral</Button>
    <Statistic good={good} bad={bad} all={all} neutral={neutral}/>
   </div>
  );
};

export default App;
