import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles';
import theme from './theme';
import App from './App';
import Main from './routes/main';
import Profile from './routes/profile';

ReactDOM.render(
  <BrowserRouter>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Main />} />
          <Route path="profile/:userId" element={<Profile />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Route>
      </Routes>
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
