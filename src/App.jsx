import "./App.css";
import Logo from "./components/Logo";
import Footer from "./components/Footer";

import Description from "./components/Description";

function App() {
  return (
    <div className="App flex flex-col justify-center h-screen gap-4 md:gap-10 lg:gap-2 lg:mx-36  ">
      <Logo />
      <Description />
      <Footer />
    </div>
  );
}

export default App;
