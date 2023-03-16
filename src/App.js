import Navbar from "./components/Navbar";
import Localisation from "./components/Localisation";
import Header from "./components/Header";
import Search from "./components/Search";
import Wrapper from "./components/Wrapper";
import Reddit from "./components/Reddit";
import News from "./components/News";
import Footer from "./components/Footer";

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
