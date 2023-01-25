import "./App.css";
import Logo from "./components/Logo";
import Footer from "./components/Footer";
import Diagram from "./components/Diagram";
import Description from "./components/Description";

function App() {
  return (
    <div className="App flex flex-col h-screen justify-center items-center gap-[3rem] md:justify-center md:gap-10 lg:gap-4">
      <Logo />
      <Diagram />
      <Description />
      <Footer />
    </div>
  );
}

export default App;
