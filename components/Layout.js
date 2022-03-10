import { AppBar, Badge, Container, createTheme, CssBaseline, Link, Switch, ThemeProvider, Toolbar, Typography } from '@mui/material';
import  Head  from 'next/head';
import NextLink from 'next/link';
import React, { useContext } from 'react';
import styled from '../styles/layout.module.css'
import { Store } from '../utils/Store';
import Cookies from "js-cookie"

const Layout = (props) => {
    const {state, dispatch} = useContext(Store);
    const {darkMode, cart} = state;
    const theme = createTheme({
        typography: {
            h1: {
              fontSize: '1.6rem',
              fontWeight: 400,
              margin: '1rem 0',
            },
            h2: {
              fontSize: '1.4rem',
              fontWeight: 400,
              margin: '1rem 0',
            },
          },
          palette: {
            mode: darkMode ? 'dark' : 'light',
            primary: {
              main: '#f0c000',
            },
            secondary: {
              main: '#208080',
            },
          },
    });
    const darkModeChangeHandler = () =>{
        dispatch({type: darkMode? 'DARK_MODE_OFF' : 'DARK_MODE_ON'});
        const newDarkMode = !darkMode;
        Cookies.set('darkMode', newDarkMode ? 'ON' : 'OFF');
    }
    return (
        <div>
            <Head>
            <title>Lapak Kaos</title>
            </Head>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
            <AppBar position = "static" className={styled.navbar}>
                <Toolbar>
                    <NextLink href={'/'} passHref>
                    <Link>
                    <Typography className={styled.brand}>Lapak Kaos</Typography>
                        </Link>
                    </NextLink>
                    <div className={styled.grow}></div>
                    <div className={styled.space}>
                        <Switch checked={darkMode} onChange={darkModeChangeHandler}></Switch>
                        <NextLink href={'/cart'} passHref>
                            <Link>
                            {cart.cartItems.length > 0 ? 
                            <Badge color='secondary' badgeContent={cart.cartItems.length}>Cart</Badge> : 'Cart'}
                             </Link> 
                        </NextLink>
                        <NextLink href={'/login'} passHref>
                            <Link>Login</Link> 
                        </NextLink>
                        
                    </div>
                </Toolbar>
            </AppBar>
            
            <Container className={styled.main}>
                {props.children}
            </Container>

            <footer className={styled.footer}>
                <Typography>
                    All rights reserved. Lapak Kaos.
                </Typography>
            </footer>
                </ThemeProvider>
        </div>
    );
}

export default Layout;
