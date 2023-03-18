import Navbar from "./components/Navbar/Navbar";
import Localisation from "./components/Localisation/Localisation";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import Wrapper from "./components/Wrapper/Wrapper";
import Reddit from "./components/Reddit/Reddit";
import News from "./components/News/News";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Localisation />
      <Header />
      <Search />
      <Wrapper>
        <Reddit />
        <News />
      </Wrapper>
      <Footer />
    </div>
  );
}

export default App;
