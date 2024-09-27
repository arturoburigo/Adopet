// App.tsx
import { Outlet } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/themes/default';
import { GlobalStyle } from './styles/global';
import useTokenRefresh from './lib/refreshToken';

function App() {
  useTokenRefresh(); 

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Outlet />
    </ThemeProvider>
  );
}

export default App;
