import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import C0_LandingScreen from "./Screens/Screen1-LandingScreen/C0_LandingScreen";

function App() {
  return (
    <div className="h-screen bg-white dark:bg-black ">
      <Router>
        <Routes>
          <Route exact path="/" element={<C0_LandingScreen />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;