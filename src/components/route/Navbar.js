import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const Navbar = () => {
    return (
        <div>
            <AppBar>
                <ToolBar>
                    <IconButton edge="start" color="inherit" aria-label="Menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" style={style}>React Application</Typography>
                    <Button color="inherit">Login</Button>
                </ToolBar>
            </AppBar>
        </div>
    );
}

const style = {
    flexGrow: 1
}

export default Navbar;