import React from 'react';
import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';

const Experience: React.FC = () => {
    return (
        <Container id="experience" style={{ padding: '50px 0' }}>
            <Typography variant="h3" gutterBottom>Experience</Typography>
            <List>
                <ListItem>
                    <ListItemText
                        primary="Polyvalente IT medewerker (jobstudent) – It4progress  2021 – heden"
                        secondary="Netwerkbeheer, Ondersteuning van administratieve office taken, Specifieke IT vragen onderzoeken en documenteren"
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary="Developer (jobstudent) 2023 – heden"
                        secondary="Full Stack"
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary="Vlaamse Programmeer Wedstrijd – Gent 2023"
                        secondary="5de plaats"
                    />
                </ListItem>
            </List>
        </Container>
    );
};

export default Experience;
