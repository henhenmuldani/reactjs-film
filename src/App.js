import "./App.css";
import "./style/landingPage.css";
import NavigationBar from "./components/NavigationBar";
import Intro from "./components/Intro";
import Trending from "./components/Trending";
import Superhero from "./components/Superhero";

function App() {
  return (
    <div>
      {/* // intro section */}
      <div className="myBG">
        <NavigationBar />
        <Intro />
      </div>
      {/* //end intro */}

      {/* //trending section */}
      <div className="trending">
        <Trending />
      </div>
      {/* //end section */}

      {/* //trending section */}
      <div className="superhero">
        <Superhero />
      </div>
      {/* //end section */}
    </div>
  );
}

export default App;
