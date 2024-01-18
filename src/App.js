import { ThemeProvider } from "styled-components";
import GlobalStyles, { theme } from "./assets/App.style";

import Header from './templates/Header';
import Main from './pages/Main';
import Footer from "./molecules/Footer";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </ThemeProvider>
  );
}

export default App;
