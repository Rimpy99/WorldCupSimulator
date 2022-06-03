import React from 'react';
import './Match.css';
import {useState, useEffect} from 'react';

const Match = props => {
    const team1 = props.team1;
    const team2 = props.team2;

    const team1Flag = props.team1Flag;
    const team2Flag = props.team2Flag;

    const setTeam1 = props.setTeam1;
    const setTeam2 = props.setTeam2;

    const [team1Points, setTeam1Points] = useState();
    const [team2Points, setTeam2Points] = useState();

    useEffect(()=>{
        if(!isNaN(team1Points) && !isNaN(team2Points)){
            if(team1Points > team2Points){
                setTeam1({points: 3, goals: parseInt(team1Points), wins: 1, draws: 0, losses: 0,})
                setTeam2({points: 0, goals: parseInt(team2Points), wins: 0, draws: 0, losses: 1,})
            }else if(team2Points > team1Points){
                setTeam1({points: 0, goals: parseInt(team1Points), wins: 0, draws: 0, losses: 1,})
                setTeam2({points: 3, goals: parseInt(team2Points), wins: 1, draws: 0, losses: 0,})
            }else if(team1Points == team2Points){
                setTeam1({points: 1, goals: parseInt(team1Points), wins: 0, draws: 1, losses: 0,})
                setTeam2({points: 1, goals: parseInt(team2Points), wins: 0, draws: 1, losses: 0,})
            }
        }
    },[team1Points, team2Points]);

    return(
        <div className="match-list">
            <div className="team1">{team1.country}<img src={require(`./../flags/${team1Flag}.png`)} alt="flaga"/></div>
            <div className="points">
                <input onChange={e=>setTeam1Points(e.target.value)}></input>-<input onChange={e=>setTeam2Points(e.target.value)}></input>
            </div>
            <div className="team2"><img src={require(`./../flags/${team2Flag}.png`)} alt="flaga"/>{team2.country}</div>
        </div>
    )
}

export default Match;