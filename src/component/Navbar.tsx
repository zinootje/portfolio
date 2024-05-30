import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from 'next/link';

const Navbar: React.FC = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    Matthias Vanpoecke
                </Typography>
                <Button color="inherit"><Link href="#home" passHref>Home</Link></Button>
                <Button color="inherit"><Link href="#about" passHref>About</Link></Button>
                <Button color="inherit"><Link href="#experience" passHref>Experience</Link></Button>
                <Button color="inherit"><Link href="#projects" passHref>Projects</Link></Button>
                <Button color="inherit"><Link href="#education" passHref>Education</Link></Button>
                <Button color="inherit"><Link href="#skills" passHref>Skills</Link></Button>
                <Button color="inherit"><Link href="#hobbies" passHref>Hobbies</Link></Button>
                <Button color="inherit"><Link href="#contact" passHref>Contact</Link></Button>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
