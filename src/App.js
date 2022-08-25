import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter basename="/sudippandey">
      <div className="App">
        <center>
          <h3>This is pandey sudip here.</h3>
        </center>
      </div>
    </BrowserRouter>
  );
}

export default App;
