import { AppProps } from 'next/app';

import '../styles/global.less';

export const App: React.FC<AppProps> = ({ Component, pageProps }) => <Component {...pageProps} />;

export default App;
