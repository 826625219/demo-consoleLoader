import logo from "./logo.svg";
import "./App.css";
function App() {
  function click() {
    console.log("被调用了click");
  }
  function click1() {
    console.log("被调用了click1");
  }
  const buttonStyle = {
    width: "100px",
    height: "50px",
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
          Learn React
        </a>
        <button style={buttonStyle} onClick={click}>
          调用click
        </button>
        <button style={buttonStyle} onClick={click1}>
          调用click1
        </button>
      </header>
    </div>
  );
}

export default App;
