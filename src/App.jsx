import Navbar from "./Components/Navbar";
import Hero from "./Components/hero";
import backgroundimage from "./assets/background-home-desktop.jpg";

const App = () => {
  return (
    <div
      style={{ backgroundImage: `url(${backgroundimage})` }}
      className="bg-cover bg-center min-h-screen"
    >
      <Navbar />
      <Hero />
    </div>
  );
};

export default App;
