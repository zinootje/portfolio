import React from 'react';
import { Container, Typography, List, ListItem, ListItemText, Link } from '@mui/material';

const Projects: React.FC = () => {
    return (
        <Container id="projects" style={{ padding: '50px 0' }}>
            <Typography variant="h3" gutterBottom>Projects</Typography>
            <List>
                <ListItem>
                    <ListItemText>
                        <Link href="https://horesto-api-b1545d045cdf.herokuapp.com/app/" target="_blank">Mobile application for viewing school restaurant menus</Link>
                    </ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemText>Analytics site in Python</ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemText>...</ListItemText>
                </ListItem>
            </List>
        </Container>
    );
};

export default Projects;
