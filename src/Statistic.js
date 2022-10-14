import React from 'react';
import StatisticsLine from './StatisticsLine'

const Statistics = ({good, bad, all, neutral}) => {
      //save clicks of each button to its own state
    
    if(all === 0) {
        return <h3>No FeedBack Given</h3>
    }


    return (
    <div>
    <h1> Statistics </h1>    
        <StatisticsLine text="Good" count={good} />
        <StatisticsLine text="Neutral" count={neutral} />
        <StatisticsLine text="Bad" count={bad} />
        <StatisticsLine text="All" count={all} />
        <StatisticsLine text="Average" count={(good-bad)/all} />
        <StatisticsLine text="Positive" count={`${good/all}%`} />
  </div>
)
}

export default Statistics