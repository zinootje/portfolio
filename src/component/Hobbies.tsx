import React from 'react';
import {Container, Typography, List, ListItem, ListItemText, ListItemIcon} from '@mui/material';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import ChessIcon from '@mui/icons-material/SportsEsports';
import KitchenIcon from '@mui/icons-material/Kitchen';

const Hobbies: React.FC = () => {
    return (
        <Container id="hobbies" style={{ padding: '50px 0' }}>
            <Typography variant="h3" gutterBottom>Hobbies</Typography>
            <List>
                <ListItem>
                    <ListItemIcon>
                        <DirectionsRunIcon />
                    </ListItemIcon>
                    <ListItemText primary="Lopen" />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <ChessIcon />
                    </ListItemIcon>
                    <ListItemText primary="Schaken" />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <KitchenIcon />
                    </ListItemIcon>
                    <ListItemText primary="Koken" />
                </ListItem>
            </List>
        </Container>
    );
};

export default Hobbies;
