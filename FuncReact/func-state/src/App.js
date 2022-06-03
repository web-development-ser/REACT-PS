import logo from './logo.svg';
import './App.css';

import Classe from './components/Classe';
import Carro from './components/Carro';
import Viaje from './components/Viaje';

import ReactBasics from './components/ReactBasics';
import ReactIntermediate from './components/ReactIntermediate';

import InputEnvio from './components/InputEnvio';

function App() {
  return (
    <div className="App">
      <Classe name="Sergio" esclh="HTML, CSS, JS, ReactJS"/>
      <Carro />
      <Viaje city='Sobral'/>


      <ReactBasics name="React Basics"/>
      <ReactIntermediate name="React Intermediate"/>

      <InputEnvio />

    </div>
  );
}

export default App;
