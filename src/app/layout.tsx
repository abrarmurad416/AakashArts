import { ReactNode } from 'react';
import Head from 'next/head';
import { Merriweather_Sans } from 'next/font/google';
import "./globals.scss";

const inter = Merriweather_Sans({ subsets: ['latin'] });

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </Head>
      <body className={inter.className}>{children}</body>
    </>
  );
};

export default Layout;

