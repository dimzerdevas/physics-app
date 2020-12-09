import React from 'react';
import { Link } from 'react-router-dom'

function Nav() {
    return (
        <div className="navigation">
            <ul className="navigation--list">
                <li><Link to='/'>Αρχική</Link></li>
                <li><Link to="/elementary-particles">Στοιχειώδη Σωματίδια</Link>
                    <ul>
                        <li><Link to="/elementary-particles-board">Πινακας Στοιχειωδων</Link></li>
                        <li><Link to="/elementary-particles-generations">Γενιές Στοιχειώδων</Link></li>
                        <li><Link to="/elementary-particles-game">Παιχνίδι Στοιχειωδων Σωματιδιων</Link></li>
                    </ul>
                </li>
                <li><Link to="/interactions-elementary-particles">Αλληλεπιδρασεις Στοιχειωδων Σωματιδιων</Link>
                    <ul>
                        <li><Link to="/interactions-elementary-particles-theory">Θεωρια</Link></li>
                        <li><Link to="/interactions-feynman-game">Παιξε με τα Διαγραμματα Feyman</Link></li>
                        <li><Link to="/interactions-hadron-decay-game">Παιξε με την διάσπαση Ανδρονίων</Link></li>
                    </ul>
                </li>
            </ul>
        </div>)
}

export default Nav;