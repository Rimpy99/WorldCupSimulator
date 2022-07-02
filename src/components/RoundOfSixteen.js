import React from 'react';
import {useState, useEffect} from 'react';
import './RoundOfSixteen.css';
import './Tree.css';

const RoundOfSixteen = ({team1, team2, team1Flag, team2Flag, setWinner, cssClass}) => {
    const [team1Points, setTeam1Points] = useState();
    const [team2Points, setTeam2Points] = useState();
    const [penaltyTeam1Points, setPenaltyTeam1Points] = useState();
    const [penaltyTeam2Points, setPenaltyTeam2Points] = useState();

    useEffect(()=>{
        if(/^[0-9]+$/.test(team1Points) && /^[0-9]+$/.test(team2Points)){
            if(team1Points > team2Points){
                setWinner({name: team1, flag: team1Flag});
            }else if(team2Points > team1Points){
                setWinner({name: team2, flag: team2Flag});
            }else if(team1Points === team2Points){
                if(/^[0-9]+$/.test(penaltyTeam1Points) && /^[0-9]+$/.test(penaltyTeam2Points)){
                    decideDueToPenalty()
                }
            }
        }
    },[team1Points, team2Points, penaltyTeam1Points, penaltyTeam2Points]);

    const decideDueToPenalty = () => {

        if(penaltyTeam1Points > penaltyTeam2Points){
            setWinner({name: team1, flag: team1Flag});
        }else if(penaltyTeam2Points > penaltyTeam1Points){
            setWinner({name: team2, flag: team2Flag});
        }
    }
   
    return(
        <div className={`${cssClass} ros-match`}>
            <div className="ros-team1">
                {team1} 
                {team1Flag ? <img src={require(`./../flags/${team1Flag}.png`)} alt='country flag'></img> : ''}
            </div>
            <div className="ros-points">
                <input onChange={e=>setTeam1Points(e.target.value)}></input>
                <input className={(team1Points === team2Points) ? "penalty" : "penalty-hidden"} onChange={e=>setPenaltyTeam1Points(e.target.value)}></input>
                -
                <input className={(team1Points === team2Points) ? "penalty" : "penalty-hidden"} onChange={e=>setPenaltyTeam2Points(e.target.value)}></input>
                <input onChange={e=>setTeam2Points(e.target.value)}></input>
            </div>
            <div className="ros-team2">
                {team2Flag ? <img src={require(`./../flags/${team2Flag}.png`)} alt='country flag'></img> : ''}
                {team2}
            </div>
        </div>
    )
    

}

export default RoundOfSixteen;