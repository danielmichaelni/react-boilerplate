import Head from 'next/head';
import { ReactElement } from 'react';

const IndexPage = (): ReactElement => (
  <>
    <Head>
      <title>Index</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className="flex flex-col min-h-screen">
      <div className="border-b border-gray-200 flex items-center p-6">
        <div className="font-medium text-xl">React Boilerplate</div>
      </div>
      <div className="flex-grow m-auto max-w-6xl py-12">
        <div className="mb-2">
          I created this boilerplate because I found myself doing the same
          things over and over again every time I started a new React project.
        </div>
        <div className="mb-2">
          The boilerplate is built on top of Next.js and uses TypeScript.
        </div>
        <div className="mb-2">
          I added a few libraries I like to use in almost every project:
        </div>
        <ul className="mb-2">
          <li>- Tailwind CSS</li>
        </ul>
        <div className="mb-2">
          I added some tooling to improve developer efficiency:
        </div>
        <ul className="mb-2">
          <li>- ESLint</li>
          <li>- Prettier</li>
        </ul>
      </div>
      <div className="border-t border-gray-200 p-6">
        Made by <a href="https://github.com/danielmichaelni">Daniel Ni</a>
      </div>
    </div>
  </>
);

export default IndexPage;
