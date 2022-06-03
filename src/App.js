import React from 'react';
import {useState} from 'react';
import Group from './components/Group';
import Tree from './components/Tree';
import "./App.css";
import CountriesData from './CountriesData.json';


const App = props => {
  const group1 = CountriesData[0];
  const group2 = CountriesData[1];
  const group3 = CountriesData[2];
  const group4 = CountriesData[3];
  const group5 = CountriesData[4];
  const group6 = CountriesData[5];
  const group7 = CountriesData[6];
  const group8 = CountriesData[7];

  const [group1Winner, setGroup1Winner] = useState({team1: '', team2: '', team1Flag: '', team2Flag: '',});
  const [group2Winner, setGroup2Winner] = useState({team1: '', team2: '', team1Flag: '', team2Flag: '',});
  const [group3Winner, setGroup3Winner] = useState({team1: '', team2: '', team1Flag: '', team2Flag: '',});
  const [group4Winner, setGroup4Winner] = useState({team1: '', team2: '', team1Flag: '', team2Flag: '',});
  const [group5Winner, setGroup5Winner] = useState({team1: '', team2: '', team1Flag: '', team2Flag: '',});
  const [group6Winner, setGroup6Winner] = useState({team1: '', team2: '', team1Flag: '', team2Flag: '',});
  const [group7Winner, setGroup7Winner] = useState({team1: '', team2: '', team1Flag: '', team2Flag: '',});
  const [group8Winner, setGroup8Winner] = useState({team1: '', team2: '', team1Flag: '', team2Flag: '',});

  return (
    <div className='container'>  
      <h1>WORLD CUP 2022 SIMULATOR</h1>
      <Group groupData={group1} setWinners={setGroup1Winner}/>
      <Group groupData={group2} setWinners={setGroup2Winner}/>
      <Group groupData={group3} setWinners={setGroup3Winner}/>
      <Group groupData={group4} setWinners={setGroup4Winner}/>
      <Group groupData={group5} setWinners={setGroup5Winner}/>
      <Group groupData={group6} setWinners={setGroup6Winner}/>
      <Group groupData={group7} setWinners={setGroup7Winner}/>
      <Group groupData={group8} setWinners={setGroup8Winner}/>
      <Tree 
        groupA={group1Winner}
        groupB={group2Winner}
        groupC={group3Winner}
        groupD={group4Winner}
        groupE={group5Winner}
        groupF={group6Winner}
        groupG={group7Winner}
        groupH={group8Winner}
      />
    </div>
  );
  
}

export default App;