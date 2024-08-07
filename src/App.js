import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from './Pages/Home/Home.jsx'

function App() {
  return (
    <div>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} >
        </Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
