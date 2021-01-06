import React from 'react';
import { Link } from 'react-router-dom'

function ElemParticlesMenu() {
    return (
        <div className="content-container">
            <header className="content-container__header">
                <h1>ΑΝΑΚΑΛΥΨΕ ΤΑ ΣΤΟΙΧΕΙΩΔΗ ΣΩΜΑΤΙΔΙΑ</h1>
                <p>Είσαι έτοιμος/η να ξεκινήσουμε;</p>
            </header>
            <main>
                <section className="main-menu">
                    <div className="main-menu__home-links subCategories-menu--padding">
                        <p>Διάβασε προσεχτικά την θεωρία και μετά παίξε το παιχνίδι για να τεστάρεις τις γνώσεις σου!</p>
                        <Link tabIndex="-1" to="/elementary-particles-board">
                            <button className="main-menu__option main-menu__option--first">
                                ΠΙΝΑΚΑΣ ΣΤΟΙΧΕΙΩΔΩΝ ΣΩΜΑΤΙΔΙΩΝ
                            </button>
                        </Link>
                        <Link tabIndex="-1" to="/elementary-particles-generations">
                            <button className="main-menu__option main-menu__option--second">
                                ΓΕΝΙΕΣ ΤΩΝ ΣΩΜΑΤΙΔΙΩΝ
                            </button>
                        </Link>
                        <Link tabIndex="-1" to="/elementary-particles-game">
                            <button className="main-menu__option">
                                ΠΑΙΞΕ!
                            </button>
                        </Link>
                    </div>
                </section>

            </main>
        </div>)
}

export default ElemParticlesMenu;