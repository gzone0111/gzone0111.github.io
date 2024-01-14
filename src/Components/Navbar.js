import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { SvgIcon } from '@mui/material';
import { ReactComponent as Logo } from '../Images/logo.svg';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@mui/material';


const Navbar = () => {
    const linkStyle = {
        textDecoration: "none", boxShadow: "none"
    }
    const linkStyle2={
        textDecoration: "none", boxShadow: "none", flex: 1,
    }
    const theme = createTheme({
        components: {
            MuiSvgIcon: {
            styleOverrides: {
              root: {
                fontSize: '4rem',
              },
            },
          },
        },
      });

    return ( 
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>

                <ThemeProvider theme={theme}>
                    <SvgIcon component={Logo} inheritViewBox sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, }}></SvgIcon>
                </ThemeProvider>

                <Link to="/"  style={linkStyle}>
                <Typography
                    variant="h6"
                    noWrap
                    sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'secondary.main',
                    textDecoration: 'none',
                    }}
                >
                Dennis Tsang
                </Typography>
                </Link>
                <Link to="/" style={linkStyle}>
                <Typography component="h1" sx={{mr: 2, color: 'white', textDecoration: "none", boxShadow: "none"}}>Home</Typography>
                </Link>
                <Link to="/about"  style={linkStyle}>
                <Typography component="h1"  sx={{mr: 2, color: 'white', textDecoration: "none", boxShadow: "none"}}>About Me</Typography>
                </Link>
                <Link to="/projects" style={linkStyle2} >
                <Typography component="h1"  sx={{mr: 2,color: 'white',textDecoration: "none",boxShadow: "none"}}>Projects</Typography>
                </Link>
                    <Button color='inherit' href="https://github.com/gzone0111">
                    <GitHubIcon  fontSize="large"  />
                    </Button>
                    <Button color='inherit' href="https://www.linkedin.com/in/hong-ting-tsang-dennis/">
                    <LinkedInIcon fontSize="large" />
                    </Button>
                    <Button color='inherit' href="mailto:httsangaj@connect.ust.hk">
                    <EmailIcon fontSize="large" />
                    </Button>
 
                </Toolbar>
            </Container>
        </AppBar>
    );
}
 
export default Navbar;