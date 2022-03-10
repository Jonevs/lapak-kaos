import React from 'react';
import {useRouter} from 'next/router'
import  Head  from 'next/head';

const Shipping = () => {
    const router = useRouter();
    router.push('/login')
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
