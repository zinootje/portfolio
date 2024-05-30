import React from 'react';
import { Container, Typography, Link } from '@mui/material';

const Contact: React.FC = () => {
    return (
        <Container id="contact" style={{ padding: '50px 0' }}>
            <Typography variant="h3" gutterBottom>Contact</Typography>
            <Typography variant="body1">Email: <Link href="mailto:Matthias.vanpoecke@student.hogent.be">Matthias.vanpoecke@student.hogent.be</Link></Typography>
            <Typography variant="body1">LinkedIn: <Link href="https://www.linkedin.com/in/matthias-vanpoecke" target="_blank">Matthias Vanpoecke</Link></Typography>
        </Container>
    );
};

export default Contact;
