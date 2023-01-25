import "./App.css";
import Logo from "./components/Logo";
import Footer from "./components/Footer";

import Description from "./components/Description";

function App() {
  return (
    <div className="App flex flex-col h-screen gap-[3rem]  md:gap-10 lg:gap-4 lg:mx-36  ">
      <Logo />
      <Description />
      <Footer />
    </div>
  );
}

export default App;
