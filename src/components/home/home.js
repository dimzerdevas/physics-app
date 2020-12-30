import React from 'react';
import { Link } from 'react-router-dom'


function Home() {
    return (
        <div className="content-container">
            <div>
                <h1>ΤΟ ΠΑΝΗΓΥΡΙ ΤΗΣ ΦΥΣΙΚΗΣ ΤΩΝ ΣΩΜΑΤΙΔΙΩΝ</h1>
                <p>μια ματιά στο γενεαλογικό δέντρο των ανδρονίων</p>
            </div>
            <div className="main-menu">
                <Link to='/elementary-particles'>
                    <div className="main-menu--option">
                        <h2>ΣΤΟΙΧΕΙΩΔΗ ΣΩΜΑΤΙΔΙΑ</h2>
                    </div>
                </Link>
                <Link to='/interactions-elementary-particles'>
                    <div className="main-menu--option">
                        <h2>ΑΛΛΗΛΕΠΙΔΡΑΣΕΙΣ ΣΤΟΙΧΕΙΩΔΩΝ ΣΩΜΑΤΙΔΩΝ</h2>
                    </div>
                </Link>
            </div>
        </div>)
}

export default Home;