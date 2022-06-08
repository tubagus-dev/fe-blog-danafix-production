import { DefaultSeo } from 'next-seo';

import SEO from '../next-seo.config';

import '@/styles/index.css';

function MyApp({ Component, pageProps }) {
  return (
    /* Here we call NextSeo and pass our default configuration to it  */
    <>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
