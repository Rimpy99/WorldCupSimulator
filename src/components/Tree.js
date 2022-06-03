import React, {useState} from 'react';
import RoundOfSixteen from './RoundOfSixteen';
import FinalsMatch from './FinalsMatch';
import Final from './Final';
import './Tree.css';

const Tree = ({groupA, groupB, groupC, groupD, groupE, groupF, groupG, groupH}) => {
    //States for winner from round-of-16
    const [rosWinner1, setRosWinner1] = useState({name: '', flag: ''});
    const [rosWinner2, setRosWinner2] = useState({name: '', flag: ''});
    const [rosWinner3, setRosWinner3] = useState({name: '', flag: ''});
    const [rosWinner4, setRosWinner4] = useState({name: '', flag: ''});
    const [rosWinner5, setRosWinner5] = useState({name: '', flag: ''});
    const [rosWinner6, setRosWinner6] = useState({name: '', flag: ''});
    const [rosWinner7, setRosWinner7] = useState({name: '', flag: ''});
    const [rosWinner8, setRosWinner8] = useState({name: '', flag: ''});
    
    //States for winner from quarter-finals
    const [qfWinner1, setQfWinner1] = useState({name: '', flag: ''});
    const [qfWinner2, setQfWinner2] = useState({name: '', flag: ''});
    const [qfWinner3, setQfWinner3] = useState({name: '', flag: ''});
    const [qfWinner4, setQfWinner4] = useState({name: '', flag: ''});
    
    //States for winner from semi-finals
    const [sfWinner1, setSfWinner1] = useState({name: '', flag: ''});
    const [sfWinner2, setSfWinner2] = useState({name: '', flag: ''});

    //States for winner from final
    const [finalWinner, setFinalWinner] = useState({name: '', flag: ''});
    

    return(
        <div className="tree-container">
            <div className="round-of-16 finals-box">
                <h2>Round of 16</h2>
                <div className="matches">
                    <div className="ros-left">
                        <RoundOfSixteen team1={groupA.team1} team2={groupB.team2} team1Flag={groupA.team1Flag} team2Flag={groupB.team2Flag} setWinner={setRosWinner1} cssClass={''}/>
                        <RoundOfSixteen team1={groupC.team1} team2={groupD.team2} team1Flag={groupC.team1Flag} team2Flag={groupD.team2Flag} setWinner={setRosWinner2} cssClass={rosWinner1.name !== '' ? '' : 'untargetable'}/>
                        <RoundOfSixteen team1={groupE.team1} team2={groupF.team2} team1Flag={groupE.team1Flag} team2Flag={groupF.team2Flag} setWinner={setRosWinner3} cssClass={rosWinner2.name !== '' ? '' : 'untargetable'}/>
                        <RoundOfSixteen team1={groupG.team1} team2={groupH.team2} team1Flag={groupG.team1Flag} team2Flag={groupH.team2Flag} setWinner={setRosWinner4} cssClass={rosWinner3.name !== '' ? '' : 'untargetable'}/>
                    </div>
                    <div className="ros-right">
                        <RoundOfSixteen team1={groupB.team1} team2={groupA.team2} team1Flag={groupB.team1Flag} team2Flag={groupA.team2Flag} setWinner={setRosWinner5} cssClass={rosWinner4.name !== '' ? '' : 'untargetable'}/>
                        <RoundOfSixteen team1={groupD.team1} team2={groupC.team2} team1Flag={groupD.team1Flag} team2Flag={groupC.team2Flag} setWinner={setRosWinner6} cssClass={rosWinner5.name !== '' ? '' : 'untargetable'}/>
                        <RoundOfSixteen team1={groupF.team1} team2={groupE.team2} team1Flag={groupF.team1Flag} team2Flag={groupE.team2Flag} setWinner={setRosWinner7} cssClass={rosWinner6.name !== '' ? '' : 'untargetable'}/>
                        <RoundOfSixteen team1={groupH.team1} team2={groupG.team2} team1Flag={groupH.team1Flag} team2Flag={groupG.team2Flag} setWinner={setRosWinner8} cssClass={rosWinner7.name !== '' ? '' : 'untargetable'}/>
                    </div>
                </div>
            </div>
            <div className="quarter-finals finals-box">
                <h2>Quarter finals</h2>
                <div className="matches">
                    <div className="qf-left">
                        <FinalsMatch team1={rosWinner1} team2={rosWinner2} setWinner={setQfWinner1} cssClass={rosWinner8.name !== '' ? '' : 'untargetable'}/>
                        <FinalsMatch team1={rosWinner3} team2={rosWinner4} setWinner={setQfWinner2} cssClass={qfWinner1.name !== '' ? '' : 'untargetable'}/>
                    </div>
                    <div className="qf-right">
                        <FinalsMatch team1={rosWinner5} team2={rosWinner6} setWinner={setQfWinner3} cssClass={qfWinner2.name !== '' ? '' : 'untargetable'}/>
                        <FinalsMatch team1={rosWinner7} team2={rosWinner8} setWinner={setQfWinner4} cssClass={qfWinner3.name !== '' ? '' : 'untargetable'}/>
                    </div>
                </div>
            </div>
            <div className="semi-finals finals-box">
                <h2>Semi finals</h2>
                <div className="matches">
                    <FinalsMatch team1={qfWinner1} team2={qfWinner2} setWinner={setSfWinner1} cssClass={qfWinner4.name !== '' ? '' : 'untargetable'}/>
                    <FinalsMatch team1={qfWinner3} team2={qfWinner4} setWinner={setSfWinner2} cssClass={sfWinner1.name !== '' ? '' : 'untargetable'}/>
                </div>
            </div>
            <div className="final finals-box">
                <h2>Final</h2>
                <Final team1={sfWinner1} team2={sfWinner2} setWinner={setFinalWinner} cssClass={sfWinner2.name !== '' ? '' : 'untargetable'}/>
                <div className="winner">
                    {finalWinner.flag ? <div><img src={require(`./../flags/${finalWinner.flag}.png`)}></img></div> : null}
                    {finalWinner.name ? `The winner is ${finalWinner.name}!` : null}
                </div>
            </div>
        </div>
    )
}

export default Tree;