import React from 'react';
import { Link } from 'react-router-dom'

function InteractionsElemParticlesMenu() {
    return (
        <div className="content-container">
            <header className="content-container__header">
                <h1>ΑΛΛΗΛΕΠΙΔΡΑΣΕΙΣ ΣΤΟΙΧΕΙΩΔΩΝ ΣΩΜΑΤΙΔΙΩΝ</h1>
                <p>Πάμε να μάθουμε μερικά νέα πράγματα!</p>
            </header>
            <main>
                <section className="main-menu">
                    <div className="main-menu__home-links subCategories-menu--padding">
                        <p>Διάβασε προσεχτικά την θεωρία και μετά παίξε το παιχνίδια για να τεστάρεις τις γνώσεις σου!</p>
                        <Link tabIndex="-1" to="/interactions-elementary-particles-theory">
                            <button className="main-menu__option main-menu__option--first">ΘΕΩΡΙΑ</button>
                        </Link>
                        <Link tabIndex="-1" to="/interactions-feynman-game">
                            <button className="main-menu__option main-menu__option--second">ΠΑΙΞΕ ΜΕ ΤΑ ΔΙΑΓΡΑΜΜΑΤΑ FEYMAN</button>
                        </Link>
                        {/*<Link tabIndex="-1" to="/interactions-hadron-decay-game">*/}
                        {/*    <button className="main-menu__option">ΠΑΙΞΕ ΜΕ ΤΗ ΔΙΑΣΠΑΣΗ ΑΝΔΡΟΝΙΩΝ</button>*/}
                        {/*</Link>*/}
                    </div>
                </section>
            </main>
        </div>
    )
}

export default InteractionsElemParticlesMenu;