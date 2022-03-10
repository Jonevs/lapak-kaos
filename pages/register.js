import React from 'react';
import { Button, Link, List, ListItem, TextField, Typography } from '@mui/material';
import  Head  from 'next/head';
import styles from '../styles/layout.module.css'
import NextLink from 'next/link';

const Register = () => {
    return (
        <>
            <Head>
                <title>Register</title>
            </Head>

            <form action="" className={styles.form}>
                <Typography component="h1" variant='h1'>Register</Typography>
                <List>
                    <ListItem>
                        <TextField 
                        variant='outlined'
                        fullWidth
                        id='name'
                        label='Name'
                        inputProps={{type: 'text'}}
                        ></TextField>
                    </ListItem>
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
                        <TextField 
                        variant='outlined'
                        fullWidth
                        id='confirmpassword'
                        label='Confirm Password'
                        inputProps={{type: 'password'}}
                        ></TextField>
                    </ListItem>
                    <ListItem>
                        <Button variant='contained' type='submit' fullWidth color='primary'>Register</Button>
                    </ListItem>
                    <ListItem>
                        <Typography>Already have an account ? {' '}
                        <NextLink href={'/login'} passHref>
                            <Link>Login</Link>
                        </NextLink>
                        </Typography>
                    </ListItem>
                </List>
            </form>
             
         </>
    );
}

export default Register;
