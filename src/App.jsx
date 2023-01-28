import Logo from "./components/Logo";
import Footer from "./components/Footer";
import Description from "./components/Description";

function App() {
  return (
    <div className="flex flex-col justify-evenly items-center gap-4  h-screen m-4">
      <Logo />
      <Description />
      <Footer />
    </div>
  );
}

export default App;
