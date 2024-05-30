import React from 'react';
import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';

const Skills: React.FC = () => {
    return (
        <Container id="skills" style={{ padding: '50px 0' }}>
            <Typography variant="h3" gutterBottom>Skills</Typography>
            <List>
                <ListItem>
                    <ListItemText primary="Python" />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Typescript" />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Java" />
                </ListItem>
                <ListItem>
                    <ListItemText primary="C#" />
                </ListItem>
                <ListItem>
                    <ListItemText primary="SQL" />
                </ListItem>
                <ListItem>
                    <ListItemText primary="HTML & CSS" />
                </ListItem>
            </List>
        </Container>
    );
};

export default Skills;
