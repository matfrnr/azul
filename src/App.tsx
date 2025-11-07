
import { COLORS, COLOR_PLATEAU, PLATEAU_PATTERN } from './types/constants';
import { useState } from 'react';
import './App.css';

function App() {
  // Juste pour afficher/masquer les règles 
  const [showRules, setShowRules] = useState(false);

  function initGame() {
    const bag: string[] = [];
    // Remplir la pioche avec 20 tuiles de chaque couleur
    COLORS.forEach(color => {
      for (let i = 0; i < 20; i++) {
        bag.push(color);
      }
    });

    // je dois mélanger la pioche sinon l'ordre n'est pas aléatoire
    for (let i = bag.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [bag[i], bag[j]] = [bag[j], bag[i]];
    }

    return bag;

  }



  return (
    <>
      <h1>Bienvenue ! Jouons au jeu Azul 🫠</h1>
      <button onClick={() => setShowRules(true)}>Voir les règles</button>

      {showRules && (
        <div className="modal">
          <h2>Les règles du jeu</h2>
          <p>Le but du jeu est de collecter des tuiles et de marquer des points. Pour gagner il faut avoir le plus de points à la fin de la partie. Il faut remplir une ligne de sa mosaïque avec des tuiles de la même couleur. À chaque tour, tu choisis des tuiles d'une seule couleur sur la table et tu les places sur ton plateau. Une fois qu'une rangée est complète, elle s'ajoute à ta mosaïque et tu marques des points !</p>
          <button onClick={() => setShowRules(false)}>Fermer</button>
        </div>
      )}

      {showRules && (
        <div className="overlay" onClick={() => setShowRules(false)} />
      )}
    </>
  );
}
export default App;