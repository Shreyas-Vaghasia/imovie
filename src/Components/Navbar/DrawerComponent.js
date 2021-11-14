import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MovieIcon from '@mui/icons-material/Movie';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


export default function DrawerComponent({ openDrawer, setopenDrawer }) {

    const [value, setvalue] = useState(0)

    //History
    let navigate = useNavigate();
    const btnClick = (link) => {
        navigate(`/${link}`)
    }

    return (
        <Drawer open={openDrawer}
            anchor={"right"}
            sx={{ cursor: "pointer" }}
            onClose={() => setopenDrawer(false)}
        >
            <List>
                <ListItem button>
                    <ListItemIcon>
                        <MovieIcon />
                    </ListItemIcon>
                    <ListItemText onClick={() => btnClick("")} primary="Movies" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <LiveTvIcon />
                    </ListItemIcon>
                    <ListItemText onClick={() => btnClick("trending")} primary="Trending" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <TrendingUpIcon />
                    </ListItemIcon>
                    <ListItemText onClick={() => btnClick("series")} primary="TV Series" />
                </ListItem>
            </List>

        </Drawer>
    )
}
