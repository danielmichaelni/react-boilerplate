import { AppProps } from 'next/app';
import { ReactElement } from 'react';

import 'styles/index.css';

export const App = ({ Component, pageProps }: AppProps): ReactElement => (
  <Component {...pageProps} />
);

export default App;
