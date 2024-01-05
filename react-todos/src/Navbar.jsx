import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

export default function Navbar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <FormatListBulletedIcon sx={{mr:3 }}/>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1}}>
                        To-Do
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
