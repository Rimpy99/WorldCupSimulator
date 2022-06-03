import React, {useState, useEffect} from 'react';
import './Tree.css';

const FinalsMatch = ({team1, team2, setWinner, cssClass}) => {
    const [team1Points, setTeam1Points] = useState();
    const [team2Points, setTeam2Points] = useState();
    const [penaltyTeam1Points, setPenaltyTeam1Points] = useState();
    const [penaltyTeam2Points, setPenaltyTeam2Points] = useState();

    useEffect(()=>{
        if(!isNaN(team1Points) && !isNaN(team2Points)){
            if(team1Points > team2Points){
                setWinner({name: team1.name, flag: team1.flag});
            }else if(team2Points > team1Points){
                setWinner({name: team2.name, flag: team2.flag});
            }
        }
    },[team1Points, team2Points]);

    useEffect(()=>{
        if(penaltyTeam1Points > penaltyTeam2Points){
            setWinner({name: team1.name, flag: team1.flag});
        }else if(penaltyTeam2Points > penaltyTeam1Points){
            setWinner({name: team2.name, flag: team2.flag});
        }
    },[penaltyTeam1Points, penaltyTeam2Points])
   
    return(
        <div className={`${cssClass} ros-match`}>
            <div className="ros-team1">
                {team1.name} 
                {team2.flag ? <img src={require(`./../flags/${team1.flag}.png`)} alt="country flag"></img> : null}
            </div>
            <div className="ros-points">
                <input onChange={e=>setTeam1Points(e.target.value)}></input>
                <input className="penalty" onChange={e=>setPenaltyTeam1Points(e.target.value)}></input>
                -
                <input className="penalty" onChange={e=>setPenaltyTeam2Points(e.target.value)}></input>
                <input onChange={e=>setTeam2Points(e.target.value)}></input>
            </div>
            <div className="ros-team2">
                {team2.flag ? <img src={require(`./../flags/${team2.flag}.png`)} alt="country flag"></img> : null}
                {team2.name}
            </div>
        </div>
    )
}

export default FinalsMatch;