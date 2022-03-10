import { useEffect } from 'react';
import Layout from '../components/Layout'
import '../styles/globals.css'
import { StoreProviders } from '../utils/Store';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return (
    <StoreProviders>
      
    <Layout>
    <Component {...pageProps} />
    </Layout>
    </StoreProviders>
    );
}

export default MyApp
