import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import C0_LandingScreen from "./Screens/Screen1-LandingScreen/C0_LandingScreen";
import S0_Dashboard from "./Screens/Screen2-Students/S0_Dashboard";

function App() {
  return (
    <div className="h-screen bg-white dark:bg-black ">
      <Router>
        <Routes>
          <Route exact path="/" element={<C0_LandingScreen />}></Route>
          <Route exact path="/student/dashboard" element={<S0_Dashboard/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;