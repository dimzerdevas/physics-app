import React from 'react';
import { Link } from 'react-router-dom'


function Home() {
    return (
        <div className="content-container">
            <div className="content-container__header">
                <h1>ΤΟ ΠΑΝΗΓΥΡΙ ΤΗΣ ΦΥΣΙΚΗΣ ΤΩΝ ΣΩΜΑΤΙΔΙΩΝ</h1>
                <p>μια ματιά στο γενεαλογικό δέντρο των ανδρονίων</p>
            </div>
            <div className="main-menu">
                <p>Επίλεξε μια από τις δύο κατηγορίες για να ξεκινήσεις την αναζήτηση σου</p>
                <div className="main-menu__home-links">
                <Link tabIndex="-1" to='/elementary-particles'>
                    <button className="main-menu__option main-menu__option--first">
                        <h2>ΣΤΟΙΧΕΙΩΔΗ ΣΩΜΑΤΙΔΙΑ</h2>
                    </button>
                </Link>
                <Link tabIndex="-1" to='/interactions-elementary-particles'>
                    <button className="main-menu__option">
                        <h2>ΑΛΛΗΛΕΠΙΔΡΑΣΕΙΣ ΣΤΟΙΧΕΙΩΔΩΝ ΣΩΜΑΤΙΔΩΝ</h2>
                    </button>
                </Link>
                </div>
            </div>
        </div>)
}

export default Home;