import "./App.css";
import Contacts from "./components/Contacts";
import Edit from "./components/Contacts/Edit";

import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Error from "./components/Error";

function App() {
  return (
    <div className="App">
      <div id="container">
        <Router>
          <Routes>
            <Route path="/" element={<Contacts />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
