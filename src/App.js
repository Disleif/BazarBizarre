import { useState } from 'react';
import './App.css';
import Header from './components/header/header';
import Jeu from './components/body/jeu';
import Regles from './components/body/regles';


function App() {

  const [jeu, setJeu] = useState(true);
  const [regles, setRegles] = useState(false);
  
  return (
    <div className="App">
      <Header jeu={jeu} regles={regles}/>

      {jeu ? <Jeu /> : null}
      {regles ? <Regles /> : null}
    </div>
  );
}

export default App;
