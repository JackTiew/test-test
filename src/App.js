import logo from "./logo.svg";
import "./App.css";
import useVersionCheck from "./hooks/useVersionCheck";

const App = () => {
  useVersionCheck();

  const handleClick = () => {
    alert("test");
    window.location.reload();
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React9
        </a>
        <button onClick={handleClick}>test</button>
      </header>
    </div>
  );
};

export default App;
