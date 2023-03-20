import Navbar from "../Navbar/Navbar";
import Weather from "../Localisation/Weather";

function Header() {
  return (
    <header id="header" className="">
      <Navbar />
      <Weather />
    </header>
  );
}

export default Header;
