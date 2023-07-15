import Header from "./components/Header";
import { ThemeProvider } from "styled-components";
import { Container } from "./components/styled/Container.styled";
import GlobalStyles from "./components/styled/Global";
import content from "./content";
import Card from "./components/Card";
import Footer from "./components/Footer";

const theme = {
  colors: {
    header: "#ebfbff",
    body: "white",
    footer: "#003333",
  },
  mobile: "768px",
};

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header />
        <Container>
          {content.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </Container>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
