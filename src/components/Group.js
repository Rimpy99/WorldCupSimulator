import React from 'react';
import {useState, useEffect} from 'react';
import './Group.css';
import Match from './Match'

const Group = props =>{
    const team1 = props.groupData.team1;
    const team2 = props.groupData.team2;
    const team3 = props.groupData.team3;
    const team4 = props.groupData.team4;

    //variable used to pass winners to parent (App.js)
    const setWinners = props.setWinners;

    //team points but as states, so I can change their values
    const [currentTeam1Points, setCurrentTeam1Points] = useState(team1.points);
    const [currentTeam2Points, setCurrentTeam2Points] = useState(team2.points);
    const [currentTeam3Points, setCurrentTeam3Points] = useState(team3.points);
    const [currentTeam4Points, setCurrentTeam4Points] = useState(team4.points);

    const [currentTeam1Goals, setCurrentTeam1Goals] = useState(0);
    const [currentTeam2Goals, setCurrentTeam2Goals] = useState(0);
    const [currentTeam3Goals, setCurrentTeam3Goals] = useState(0);
    const [currentTeam4Goals, setCurrentTeam4Goals] = useState(0);

    const [currentTeam1Wins, setCurrentTeam1Wins] = useState(0);
    const [currentTeam2Wins, setCurrentTeam2Wins] = useState(0);
    const [currentTeam3Wins, setCurrentTeam3Wins] = useState(0);
    const [currentTeam4Wins, setCurrentTeam4Wins] = useState(0);

    const [currentTeam1Draws, setCurrentTeam1Draws] = useState(0);
    const [currentTeam2Draws, setCurrentTeam2Draws] = useState(0);
    const [currentTeam3Draws, setCurrentTeam3Draws] = useState(0);
    const [currentTeam4Draws, setCurrentTeam4Draws] = useState(0);

    const [currentTeam1Losses, setCurrentTeam1Losses] = useState(0);
    const [currentTeam2Losses, setCurrentTeam2Losses] = useState(0);
    const [currentTeam3Losses, setCurrentTeam3Losses] = useState(0);
    const [currentTeam4Losses, setCurrentTeam4Losses] = useState(0);

    const [team1Match1, setTeam1Match1] = useState({points: 0, goals: 0, wins: 0, draws: 0, losses: 0,});
    const [team1Match2, setTeam1Match2] = useState({points: 0, goals: 0, wins: 0, draws: 0, losses: 0,});
    const [team1Match3, setTeam1Match3] = useState({points: 0, goals: 0, wins: 0, draws: 0, losses: 0,});
    const [team2Match1, setTeam2Match1] = useState({points: 0, goals: 0, wins: 0, draws: 0, losses: 0,});
    const [team2Match2, setTeam2Match2] = useState({points: 0, goals: 0, wins: 0, draws: 0, losses: 0,});
    const [team2Match3, setTeam2Match3] = useState({points: 0, goals: 0, wins: 0, draws: 0, losses: 0,});
    const [team3Match1, setTeam3Match1] = useState({points: 0, goals: 0, wins: 0, draws: 0, losses: 0,});
    const [team3Match2, setTeam3Match2] = useState({points: 0, goals: 0, wins: 0, draws: 0, losses: 0,});
    const [team3Match3, setTeam3Match3] = useState({points: 0, goals: 0, wins: 0, draws: 0, losses: 0,});
    const [team4Match1, setTeam4Match1] = useState({points: 0, goals: 0, wins: 0, draws: 0, losses: 0,});
    const [team4Match2, setTeam4Match2] = useState({points: 0, goals: 0, wins: 0, draws: 0, losses: 0,});
    const [team4Match3, setTeam4Match3] = useState({points: 0, goals: 0, wins: 0, draws: 0, losses: 0,});
    
    //after changing any of match results, it adds points for each team
    useEffect(()=>{
        setCurrentTeam1Points(team1Match1.points + team1Match2.points + team1Match3.points)
        setCurrentTeam2Points(team2Match1.points + team2Match2.points + team2Match3.points)
        setCurrentTeam3Points(team3Match1.points + team3Match2.points + team3Match3.points)
        setCurrentTeam4Points(team4Match1.points + team4Match2.points + team4Match3.points)

        setCurrentTeam1Goals(team1Match1.goals + team1Match2.goals + team1Match3.goals)
        setCurrentTeam2Goals(team2Match1.goals + team2Match2.goals + team2Match3.goals)
        setCurrentTeam3Goals(team3Match1.goals + team3Match2.goals + team3Match3.goals)
        setCurrentTeam4Goals(team4Match1.goals + team4Match2.goals + team4Match3.goals)

        setCurrentTeam1Wins(team1Match1.wins + team1Match2.wins + team1Match3.wins)
        setCurrentTeam2Wins(team2Match1.wins + team2Match2.wins + team2Match3.wins)
        setCurrentTeam3Wins(team3Match1.wins + team3Match2.wins + team3Match3.wins)
        setCurrentTeam4Wins(team4Match1.wins + team4Match2.wins + team4Match3.wins)

        setCurrentTeam1Draws(team1Match1.draws + team1Match2.draws + team1Match3.draws)
        setCurrentTeam2Draws(team2Match1.draws + team2Match2.draws + team2Match3.draws)
        setCurrentTeam3Draws(team3Match1.draws + team3Match2.draws + team3Match3.draws)
        setCurrentTeam4Draws(team4Match1.draws + team4Match2.draws + team4Match3.draws)

        setCurrentTeam1Losses(team1Match1.losses + team1Match2.losses + team1Match3.losses)
        setCurrentTeam2Losses(team2Match1.losses + team2Match2.losses + team2Match3.losses)
        setCurrentTeam3Losses(team3Match1.losses + team3Match2.losses + team3Match3.losses)
        setCurrentTeam4Losses(team4Match1.losses + team4Match2.losses + team4Match3.losses)

    },
    [team1Match1,
        team1Match2,
        team1Match3,
        team2Match1,
        team2Match2,
        team2Match3,
        team3Match1,
        team3Match2,
        team3Match3,
        team4Match1,
        team4Match2,
        team4Match3,]);
    
    // FUNCTIONS AND VARIABLES NEEDED TO SORT TABLE!

    const [sortDirection, setSortDirection] = useState(false);
    
    //default array of teams
    let arrayOfTeams = [
        {country: team1.country, points: currentTeam1Points, flag: team1.flag, goals: currentTeam1Goals, wins: currentTeam1Wins, draws: currentTeam1Draws, losses: currentTeam1Losses,},
        {country: team2.country, points: currentTeam2Points, flag: team2.flag, goals: currentTeam2Goals, wins: currentTeam2Wins, draws: currentTeam2Draws, losses: currentTeam2Losses,},
        {country: team3.country, points: currentTeam3Points, flag: team3.flag, goals: currentTeam3Goals, wins: currentTeam3Wins, draws: currentTeam3Draws, losses: currentTeam3Losses,},
        {country: team4.country, points: currentTeam4Points, flag: team4.flag, goals: currentTeam4Goals, wins: currentTeam4Wins, draws: currentTeam4Draws, losses: currentTeam4Losses,},
    ];

    const [arrayOfTeamsState, setArrayOfTeamsState] = useState(arrayOfTeams);

    const sortColumn = (columnName) => {
        let columnType = typeof arrayOfTeamsState[0][columnName];
        setSortDirection(true);

        switch(columnType){
            case 'number':
                sortTableByNumber(columnName);
                break;
        }
    }

    //sort function
    const sortTableByNumber = (columnName) => {
        if(sortDirection){
            setArrayOfTeamsState(arrayOfTeams.sort((p1,p2)=>{
                return p2[columnName] - p1[columnName];
            }))
        }
    }
    
    //after giving any points for any team, table sorts + PASSES WINNERS TO PARENT (App.js)
    useEffect(()=>{
        sortColumn("points")
        
    },[currentTeam1Points,currentTeam2Points,currentTeam3Points,currentTeam4Points])
    
    useEffect(()=>{
        setWinners({team1: arrayOfTeamsState[0].country, team2: arrayOfTeamsState[1].country, team1Flag: arrayOfTeamsState[0].flag, team2Flag: arrayOfTeamsState[1].flag})
        
    },[arrayOfTeamsState])

    return(
        <div className="group-container">
            <div className="group-table">
                <table>
                    <thead>
                        <tr><th>COUNTRY</th><th>POINTS</th><th>GOALS</th><th>WINS</th><th>DRAWS</th><th>LOSSES</th></tr>
                    </thead>
                    <tbody>
                        {arrayOfTeamsState.map(e=>{return (<tr>
                            <td className="td-country">{e.country}<img src={require(`./../flags/${e.flag}.png`)} alt="Country flag"/></td>
                            <td className="td-points">{e.points}</td>
                            <td className="td-points">{e.goals}</td>
                            <td className="td-points">{e.wins}</td>
                            <td className="td-points">{e.draws}</td>
                            <td className="td-points">{e.losses}</td>
                            </tr>
                        )})}
                    </tbody>
                </table>
            </div>
            <div className="group-matches">
                <Match team1={team1} team2={team2} team1Flag={team1.flag} team2Flag={team2.flag} setTeam1={setTeam1Match1} setTeam2={setTeam2Match1}/>
                <Match team1={team3} team2={team4} team1Flag={team3.flag} team2Flag={team4.flag} setTeam1={setTeam3Match1} setTeam2={setTeam4Match1}/>
                <Match team1={team2} team2={team4} team1Flag={team2.flag} team2Flag={team4.flag} setTeam1={setTeam2Match2} setTeam2={setTeam4Match2}/>
                <Match team1={team1} team2={team3} team1Flag={team1.flag} team2Flag={team3.flag} setTeam1={setTeam1Match2} setTeam2={setTeam3Match2}/>
                <Match team1={team2} team2={team3} team1Flag={team2.flag} team2Flag={team3.flag} setTeam1={setTeam2Match3} setTeam2={setTeam3Match3}/>
                <Match team1={team4} team2={team1} team1Flag={team4.flag} team2Flag={team1.flag} setTeam1={setTeam4Match3} setTeam2={setTeam1Match3}/>
            </div>
        </div>
    )
}

export default Group;