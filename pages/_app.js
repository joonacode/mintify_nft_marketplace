import '../styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../theme';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Mintify - NFT Marketplace</title>
        <meta name='title' content='Mintify - NFT Marketplace' />
        <meta name='description' content='Buy & sale nft online' />
        <meta name='keywords' content='nft, marketplace' />
        <meta name='robots' content='index, follow' />
        <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta property='og:type' content='website' />
        <meta property='og:url' content={process.env.NEXT_PUBLIC_MAIN_URL} />
        <meta property='og:title' content='Mintify - NFT Marketplace' />
        <meta property='og:description' content='Buy & sale nft online' />
        <meta
          property='og:image'
          content={process.env.NEXT_PUBLIC_MAIN_URL + 'logo_full.png'}
        />

        <meta property='og:locale' content='id' />
        <meta property='og:image:alt' content='logo' />
        <meta property='og:image:type' content='png' />
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='630' />
        <meta property='twitter:card' content='summary_large_image' />
        <meta
          property='twitter:url'
          content={process.env.NEXT_PUBLIC_MAIN_URL}
        />
        <meta property='twitter:title' content='Mintify - NFT Marketplace' />
        <meta property='twitter:description' content='Buy & sale nft online' />
        <meta
          property='twitter:image'
          content={process.env.NEXT_PUBLIC_MAIN_URL + 'logo_full.png'}
        />
        <link rel='shortcut icon' href='/faviconx.ico' type='image/x-icon' />
      </Head>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
