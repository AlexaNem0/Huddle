import Description from "./components/Description";
import Footer from "./components/Footer";
import Logo from "./components/Logo";

function App() {
  return (
    <div className=" flex flex-col justify-evenly items-center gap-2 h-screen bg-[url('../src/assets/images/bg-mobile.svg')] bg-no-repeat md:bg-[url('../src/assets/images/bg-desktop.svg')]">
      <Logo />
      <Description />
      <Footer />
    </div>
  );
}

export default App;
