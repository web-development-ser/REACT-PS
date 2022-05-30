import logo from './logo.svg';
import './App.css';
import HelloWord from './components/HelloWord';
import Hello from './components/HelloTes'
import HelloTes from './components/HelloTes';
import ClassHello from './components/ClassHello'
import UseSS from './components/UseSS';

function App() {
  return (
    <div className="App">
      <HelloWord  />
      <HelloTes name='Class' age={678}/>
    <ClassHello title="Titulo" />
      <UseSS />

    </div>
  );
}

export default App;
