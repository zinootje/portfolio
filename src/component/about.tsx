import React from 'react';
import { Container, Typography } from '@mui/material';

const About: React.FC = () => {
    return (
        <Container id="about" style={{ padding: '50px 0' }}>
            <Typography variant="h3" gutterBottom>About Me</Typography>
            <Typography variant="body1">
                I am a student of Applied Computer Science, passionate about computer science during and outside of class hours. As a child, I was fascinated by computers, and this interest has grown over the years. Being able to turn my passion into my profession is a tremendous privilege and a dream come true.
            </Typography>
        </Container>
    );
};

export default About;
