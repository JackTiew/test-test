import { useEffect } from "react";
import "./App.css";
import useVersionCheck from "./hooks/useVersionCheck";

const App = () => {
  useVersionCheck();

  return (
    <div className="App">
      <header className="App-header">
        <img
          src={`https://picsum.photos/id/${
            Math.floor(Math.random() * (999 - 100 + 1)) + 100
          }/600/600`}
        />
      </header>
    </div>
  );
};

export default App;
