import "./App.css";
import useVersionCheck from "./hooks/useVersionCheck";

const App = () => {
  useVersionCheck();

  return (
    <div className="App">
      <header className="App-header">
        <img src={`https://picsum.photos/id/${700}/600/600`} />
      </header>
    </div>
  );
};

export default App;
