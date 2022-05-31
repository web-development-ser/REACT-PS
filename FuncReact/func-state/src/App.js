import logo from './logo.svg';
import './App.css';

import Classe from './components/Classe';
import Carro from './components/Carro';

function App() {
  return (
    <div className="App">
      <Classe name="Sergio" esclh="HTML, CSS, JS, ReactJS"/>
      <Carro />
    </div>
  );
}

export default App;
