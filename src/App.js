import React from 'react';
import Home from './components/home/home';
import Nav from './components/nav/nav';
import Footer from './components/footer/footer'
import {
  ElemParticlesMenu,
  ElemParticlesGame,
  ElemParticlesGenerations,
  ElemParticlesBoard
} from './components/elementaryParticles'
import { 
  InteractionsElemParticlesMenu, 
  InteractionsElemParticlesTheory, 
  FeynmanGame, 
  HadronDecayGame, 
  FeynmanRotation, 
  HadronDecayGameInstructions,
  HadronDecayGamePlay 
} from './components/interactionsElemParticles/'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './App.css'

function App() {
  return (

    <Router>
      <div className="App">
        <div className="content">
          <header>
            <Nav />
          </header>
          <main className="main-container">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/elementary-particles" component={ElemParticlesMenu} />
              <Route path="/elementary-particles-generations" component={ElemParticlesGenerations} />
              <Route path="/elementary-particles-board" component={ElemParticlesBoard} />
              <Route path="/elementary-particles-game" component={ElemParticlesGame} />
              <Route path="/interactions-elementary-particles" component={InteractionsElemParticlesMenu} />
              <Route path="/interactions-elementary-particles-theory" component={InteractionsElemParticlesTheory} />
              <Route path="/interactions-feynman-game" component={FeynmanGame} />
              <Route path="/feynman-game-rotation" component={FeynmanRotation} />
              <Route path="/interactions-hadron-decay-game" component={HadronDecayGame} />
              <Route path="/hadron-decay-game-instructions" component={HadronDecayGameInstructions} />
              <Route path="/hadron-decay-game-play" component={HadronDecayGamePlay} />
            </Switch>
          </main>
        </div>
        <Footer />
      </div>
    </Router >
  );
}

export default App;
