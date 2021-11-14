import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MovieIcon from '@mui/icons-material/Movie';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import { Tabs, Tab } from '@mui/material';
import DrawerComponent from './DrawerComponent';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function NavBarComponent() {
    const [openDrawer, setopenDrawer] = useState(true)
    const [value, setvalue] = useState(0)
    //Theme
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('sm'));

    //Tab Change Event
    let handleClick = (event, newValue) => {
        console.log(newValue)
        setvalue(newValue);
    };

    //History
    let navigate = useNavigate();

    //Route Change Event
    useEffect(() => {
        if (value === 0) {
            navigate('/')
        }
        else if (value === 1) {
            navigate('/trending')
        }
        else if (value === 2) {
            navigate('/series')
        }
    }, [value])





    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <LiveTvIcon />
                    </IconButton>
                    {!isMatch &&
                        <Tabs value={value} onChange={handleClick} textColor={"secondary"} indicatorColor={"secondary"}>
                            <Tab icon={<MovieIcon />} label="MOVIES" sx={{ color: 'white', marginLeft: "40px" }} />
                            <Tab icon={<TrendingUpIcon />} label="TRENDING" sx={{ color: 'white', marginLeft: "40px" }} />
                            <Tab icon={<LocalMoviesIcon />} label="TV SERIES" sx={{ color: 'white', marginLeft: "40px" }} />
                        </Tabs>
                    }

                    <Button sx={{ marginLeft: "auto" }} color="inherit" onClick={setopenDrawer} ><MenuIcon /></Button>
                    {isMatch && <DrawerComponent openDrawer={openDrawer} setopenDrawer={setopenDrawer} />}

                </Toolbar>
            </AppBar>
        </Box>
    )
}
