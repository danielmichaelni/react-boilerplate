import Head from 'next/head';
import { ReactElement } from 'react';

const IndexPage = (): ReactElement => (
  <>
    <Head>
      <title>Index</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className="flex h-screen items-center justify-center">
      react boilerplate
    </div>
  </>
);

export default IndexPage;
