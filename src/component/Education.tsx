import React from 'react';
import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';

const Education: React.FC = () => {
    return (
        <Container id="education" style={{ padding: '50px 0' }}>
            <Typography variant="h3" gutterBottom>Education</Typography>
            <List>
                <ListItem>
                    <ListItemText
                        primary="Bachelor in de toegepaste informatica – HOGENT 2021 - heden"
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary="Industrieel ingenieur(niet behaald) – UGENT 2019 - 2021"
                    />
                </ListItem>
            </List>
        </Container>
    );
};

export default Education;
