import "./App.css";
import Playground from "./components/Playground";
import Logo from "./components/Logo";
import Workplace from "./components/Workplace";
//        <Playground title="👨🏻‍💻" />
function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <Logo />
        </header>
        <h1>Guillotine-cutter App</h1>

        <Workplace />
      </div>
    </>
  );
}

export default App;
