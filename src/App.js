import { useState } from 'react';
import './App.css';
import Header from './components/header/header';
import Jeu from './components/body/jeu';
import Regles from './components/body/regles';

function App() {
  const [jeu, setJeu] = useState(true);
  const [regles, setRegles] = useState(false);

  const switchToJeu = () => {
    setJeu(true);
    setRegles(false);
  };

  const switchToRegles = () => {
    setJeu(false);
    setRegles(true);
  };

  return (
    <div className="App">
      <Header jeu={jeu} regles={regles} switchToJeu={switchToJeu} switchToRegles={switchToRegles} />

      {jeu ? <Jeu /> : null}
      {regles ? <Regles /> : null}
    </div>
  );
}

export default App;
