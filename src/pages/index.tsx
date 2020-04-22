import { Layout as BaseLayout, Space } from 'antd';
import Head from 'next/head';
import styled from 'styled-components';

const Layout = styled(BaseLayout)`
  min-height: 100vh;
`;

const Header = styled(BaseLayout.Header)`
  background: unset;
  border-bottom: 1px solid #383838;
`;

const Content = styled(BaseLayout.Content)`
  margin: auto;
  max-width: 960px;
  padding: 50px;
`;

const Footer = styled(BaseLayout.Footer)`
  border-top: 1px solid #383838;
`;

const Logo = styled.div`
  color: #fff;
  font-size: 16px;
  font-weight: 600;
`;

const IndexPage: React.FC = () => (
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
            I created this boilerplate because I found myself doing the same things over and over
            again every time I started a new React project.
          </div>
          <div>The boilerplate is built on top of Next.js and uses TypeScript.</div>
          <div>I added a few libraries I like to use in almost every project:</div>
          <ul>
            <li>Ant Design</li>
            <li>Styled Components</li>
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
