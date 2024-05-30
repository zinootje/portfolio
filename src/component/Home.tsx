import React from 'react';
import { Container, Typography } from '@mui/material';

const Home: React.FC = () => {
    return (
        <Container id="home" style={{ padding: '50px 0' }}>
            <Typography variant="h2" gutterBottom>Welcome to my Portfolio</Typography>
            <Typography variant="body1">Hi, I am Matthias Vanpoecke, a passionate student of Applied Computer Science.</Typography>
        </Container>
    );
};

export default Home;
