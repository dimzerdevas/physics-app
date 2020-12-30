import React from 'react';
import { Link } from 'react-router-dom'
import { FaHome } from 'react-icons/fa';

function Nav() {
    return (
        <div className="navigation">
            <Link className="navigation__main_menu--first" to='/'>< FaHome className="navigation__main_menu__home_link" /></Link>
            <div className="navigation__main_menu">
                <Link className="navigation__main_menu__main_link"
                      to="/interactions-elementary-particles"
                >
                    <button tabIndex="-1">
                        Στοιχειώδη Σωματίδια
                    </button>
                </Link>
                <Link className="navigation__main_menu__main_link"
                      to="/interactions-elementary-particles"
                >
                    <button tabIndex="-1">
                        Αλληλεπιδρασεις Στοιχειωδων Σωματιδιων
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Nav;