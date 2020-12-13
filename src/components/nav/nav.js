import React from 'react';
import { Link } from 'react-router-dom'
import { Button, Menu, MenuItem, ListItemIcon, ListItemText } from '@material-ui/core/';
import { withStyles } from '@material-ui/core/styles';

const StyledMenu = withStyles({
    paper: {
        border: '1px solid #d3d4d5',
    },
})((props) => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        {...props}
    />
));

function Nav() {

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className="navigation">
            <Link to='/'>Αρχική</Link>
            <div>
                <Button
                    aria-controls="customized-menu"
                    aria-haspopup="true"
                    variant="contained"
                    color="primary"
                    onClick={handleClick}
                >
                    <Link to="/elementary-particles">Στοιχειώδη Σωματίδια</Link>
                </Button>
                <StyledMenu
                    id="customized-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem>
                        <ListItemIcon>
                        </ListItemIcon>
                        <Link to="/elementary-particles-board">
                            <ListItemText primary="Πινακας Στοιχειωδων" />
                        </Link>
                    </MenuItem>
                    <MenuItem>
                        <ListItemIcon>
                        </ListItemIcon>
                        <Link to="/elementary-particles-generations"><ListItemText primary="Γενιές Στοιχειώδων" /></Link>
                    </MenuItem>
                    <MenuItem>
                        <ListItemIcon>
                        </ListItemIcon>
                        <Link to="/elementary-particles-game"><ListItemText primary="Παιχνίδι Στοιχειωδων Σωματιδιων" /></Link>
                    </MenuItem>
                </StyledMenu>
                <Button
                    aria-controls="customized-menu"
                    aria-haspopup="true"
                    variant="contained"
                    color="primary"
                    onClick={handleClick}
                >
                    <Link to="/interactions-elementary-particles">Αλληλεπιδρασεις Στοιχειωδων Σωματιδιων</Link>
                </Button>
                <StyledMenu
                    id="customized-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem>
                        <ListItemIcon>
                        </ListItemIcon>
                        <Link to="/interactions-elementary-particles-theory">
                            <ListItemText primary="Θεωρία" />
                        </Link>
                    </MenuItem>
                    <MenuItem>
                        <ListItemIcon>
                        </ListItemIcon>
                        <Link to="/interactions-feynman-game"><ListItemText primary="Παιξε με τα Διαγραμματα Feyman" /></Link>
                    </MenuItem>
                    <MenuItem>
                        <ListItemIcon>
                        </ListItemIcon>
                        <Link to="/interactions-hadron-decay-game"><ListItemText primary="Παιξε με την διάσπαση Ανδρονίων" /></Link>
                    </MenuItem>
                </StyledMenu>
            </div>

        </div>)
}

export default Nav;