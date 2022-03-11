import React, { useContext } from 'react';
import {useRouter} from 'next/router'
import  Head  from 'next/head';
import {Store} from '../utils/Store';

const Shipping = () => {
    const router = useRouter();
    const {state, dispatch} = useContext(Store);
    const {userInfo} = state;
    if(!userInfo) {
        Router.push('/login?redirect=/shipping');
    }
    return (
        <>
        <Head>
            <title>Shipping</title>
        </Head>
        
            Shipping Page
        </>
    );
}

export default Shipping;
