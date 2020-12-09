import React from 'react';
import { Link } from 'react-router-dom'

function ElemParticlesMenu() {
    return (
        <div className="elemparticles-container">
            <header className="elemparticles--title">
                <h1>ΑΝΑΚΑΛΥΨΕ ΤΑ ΣΤΟΙΧΕΙΩΔΗ ΣΩΜΑΤΙΔΙΑ</h1>
            </header>
            <main>
                <section className="elemparticles--menu">
                    <Link to="/elementary-particles-board"><div className="elemparticles--option">ΠΙΝΑΚΑΣ ΣΤΟΙΧΕΙΩΔΩΝ ΣΩΜΑΤΙΔΙΩΝ</div></Link>
                    <Link to="/elementary-particles-generations"> <div className="elemparticles--option">ΓΕΝΙΕΣ ΤΩΝ ΣΩΜΑΤΙΔΙΩΝ</div></Link>
                    <Link to="/elementary-particles-game"><div className="elemparticles--option">ΠΑΙΞΕ!</div></Link>
                </section>

            </main>
        </div>)
}

export default ElemParticlesMenu;