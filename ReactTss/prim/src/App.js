import logo from './logo.svg';
import './App.css';

import HelloWord from './components/HelloWord';
import HelloTes from './components/HelloTes';

import ClassHello from './components/ClassHello';

import ClassEsts from './components/ClassEsts';

import IdSetName from './components/IdSetName';


function App() {
  return (
    <div className="App">
      <HelloWord  />
      <HelloTes age={876}/>

      <ClassHello />


      <ClassEsts name="Sergio"/>

      <IdSetName />
    </div>
  );
}

export default App;
