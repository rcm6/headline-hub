//import Navbar from "./components/Navbar/Navbar";
//import Localisation from "./components/Localisation/Weather";
import React, { useState } from "react";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import Wrapper from "./components/Wrapper/Wrapper";
import Reddit from "./components/Reddit/Reddit";
import SubredditFeed from "./components/Reddit/SubredditFeed";
import News from "./components/News/News";
import Footer from "./components/Footer/Footer";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchQuery = (query) => {
    setSearchQuery(query);
  };
  return (
    <div>
      <Header />
      <Search onSearchQuery={handleSearchQuery} />
      <Wrapper>
        <Reddit />
        <SubredditFeed />
        <News query={searchQuery} />
      </Wrapper>
      <Footer />
    </div>
  );
}

export default App;
