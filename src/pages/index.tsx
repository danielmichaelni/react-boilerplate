import { Layout as BaseLayout, Space } from 'antd';
import Head from 'next/head';
import { ReactElement } from 'react';
import styled from 'styled-components';

const Layout = styled(BaseLayout).attrs({ className: 'min-h-screen' })``;

const Header = styled(BaseLayout.Header).attrs({
  className: 'border-b border-gray-800 flex items-center',
})`
  background: unset;
`;

const Content = styled(BaseLayout.Content).attrs({
  className: 'm-auto max-w-6xl py-12',
})``;

const Footer = styled(BaseLayout.Footer).attrs({
  className: 'border-t border-gray-800',
})``;

const Logo = styled.div.attrs({
  className: 'font-semibold text-lg text-white',
})``;

const IndexPage = (): ReactElement => (
  <>
    <Head>
      <title>Index</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Layout>
      <Header>
        <Logo>React Boilerplate</Logo>
      </Header>
      <Content>
        <Space direction="vertical">
          <div>
            I created this boilerplate because I found myself doing the same
            things over and over again every time I started a new React project.
          </div>
          <div>
            The boilerplate is built on top of Next.js and uses TypeScript.
          </div>
          <div>
            I added a few libraries I like to use in almost every project:
          </div>
          <ul>
            <li>Ant Design</li>
            <li>Styled Components</li>
            <li>Tailwind CSS</li>
          </ul>
          <div>I added some tooling to improve developer efficiency:</div>
          <ul>
            <li>ESLint</li>
            <li>Prettier</li>
            <li>Stylelint</li>
          </ul>
        </Space>
      </Content>
      <Footer>
        <div>
          Made by <a href="https://github.com/danielmichaelni">Daniel Ni</a>
        </div>
      </Footer>
    </Layout>
  </>
);

export default IndexPage;
