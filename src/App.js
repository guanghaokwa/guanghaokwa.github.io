import NavBar from "./NavBar";
import Overview from "./Overview";
import WorkEx from "./WorkEx";
import About from "./About";
import Project from "./Project";
import Footer from "./Footer";

function App() {
  return (
    <div className="App dark:bg-gray-800 dark:text-white">
      <header className="App-header">
        <NavBar />

        <Overview />
        <About />
        <WorkEx />
        <Project />

        <Footer />
      </header>
    </div>
  );
}

export default App;
