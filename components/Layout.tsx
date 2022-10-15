import { TITLE_IMG } from 'constants/common';
import Head from 'next/head';
import { ReactNode } from 'react';

interface LayoutProps {
  children?: ReactNode;
  title?: string;
  description?: string;
  image?: string;
  favicon?: string;
}

export const Layout = ({
  children,
  title,
  description,
  image,
  favicon,
}: LayoutProps) => (
  <>
    <Head>
      <title>Pokedex</title>
      <link rel="icon" href={favicon || '/favicon.ico'} />
      <meta property="og:title" content={title || 'Pokedex'} />
      <meta property="og:description" content={description || ''} />
      <meta property="og:image" content={image || TITLE_IMG} />
    </Head>
    <nav>
      <img src={TITLE_IMG} alt="main_logo" />
    </nav>
    {children}
  </>
);
