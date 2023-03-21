import Navbar from "../Navbar/Navbar";
import Weather from "../Localisation/Weather";

function Header() {
  return (
    <header id="header" className="">
      <Navbar />
      
      <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="jumbo-title">Headline Hub</h1>
        </div>
      </div>

    </header>
  );
}

export default Header;
