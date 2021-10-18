import { Container } from "./components/styled/Component.styled";
import {ThemeProvider} from 'styled-components';
import Header from "./components/Header";
import GlobalStyles from './components/styled/Global';
import content from './content_data';
import Card from './components/Card';
import Footer from './components/Footer';
const theme = {
  colors: {
    header: '#ebfbff',
    body: '#fff',
    footer: '#003333' 
  },
  mobile: '768px',
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
          <Header />
          <Container>
            {
              content.map( (item, index) => {
                return <Card key={index} item={item} />
              } )
            }
          </Container>
          <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;
