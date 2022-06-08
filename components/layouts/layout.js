import Head from 'next/head';

import { ScrollTop } from '@/components/base';
import { Header, Footer } from '@/components/layouts';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </Head>
      <Header />
      <div className="min-h-screen pt-12">
        <main id="main">{children}</main>
      </div>
      <Footer />
      <ScrollTop />
    </>
  );
}
