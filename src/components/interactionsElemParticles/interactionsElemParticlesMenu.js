import React from 'react';
import { Link } from 'react-router-dom'

function InteractionsElemParticlesMenu() {
    return (
        <div className="homepage-container">
            <header className="intro-header">
                <h1>ΑΛΛΗΛΕΠΙΔΡΑΣΕΙΣ ΣΤΟΙΧΕΙΩΔΩΝ ΣΩΜΑΤΙΔΙΩΝ</h1>
            </header>
            <main>
                <ul className="elemparticles--menu">
                    <Link to="/interactions-elementary-particles-theory">
                        <li className="elemparticles--option">Θεωρία</li>
                    </Link>
                    <Link to="/interactions-feyman-game">
                        <li className="elemparticles--option">Παιξε με τα διαγράμματα Feyman</li>
                    </Link>
                    <Link to="/interactions-hadron-decay-game">
                        <li className="elemparticles--option">Παιξε με την διάσπαση Ανδρονίων</li>
                    </Link>
                </ul>

            </main>
        </div>)
}

export default InteractionsElemParticlesMenu;