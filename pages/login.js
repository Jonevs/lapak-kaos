 import { Button, Link, List, ListItem, TextField, Typography } from '@mui/material';
import  Head  from 'next/head';
import React from 'react';
import styles from '../styles/layout.module.css'
import NextLink from 'next/link';
 
 const Login = () => {
     return (
         <>
            <Head>
                <title>Login</title>
            </Head>

            <form action="" className={styles.form}>
                <Typography component="h1" variant='h1'>Login</Typography>
                <List>
                    <ListItem>
                        <TextField 
                        variant='outlined'
                        fullWidth
                        id='email'
                        label='Email'
                        inputProps={{type: 'email'}}
                        ></TextField>
                    </ListItem>
                    <ListItem>
                        <TextField 
                        variant='outlined'
                        fullWidth
                        id='password'
                        label='Password'
                        inputProps={{type: 'password'}}
                        ></TextField>
                    </ListItem>
                    <ListItem>
                        <Button variant='contained' type='submit' fullWidth color='primary'>Login</Button>
                    </ListItem>
                    <ListItem>
                        <Typography>Don't have an account ? {' '}
                        <NextLink href={'/register'} passHref>
                            <Link>Register</Link>
                        </NextLink>
                        </Typography>
                    </ListItem>
                </List>
            </form>
             
         </>
     );
 }
 
 export default Login;
 