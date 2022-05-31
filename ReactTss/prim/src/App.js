import logo from './logo.svg';
import './App.css';

import HelloWord from './components/HelloWord';
import HelloTes from './components/HelloTes';

import ClassHello from './components/ClassHello';

import ClassEsts from './components/ClassEsts';

import IdSetName from './components/IdSetName';

import ThisProps from './components/ThisProps';




function App() {
  return (
    <div className="App">
      <HelloWord  />
      <HelloTes age={876}/>

      <ClassHello />


      <ClassEsts name="Sergio"/>

      <IdSetName />

      <ThisProps />
    </div>
  );
}

export default App;
