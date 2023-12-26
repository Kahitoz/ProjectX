import Navbar from "../../Components/Navbar";
import { useEffect, useState } from "react";
import Component_1_SignUp from "./Component_1_SignUp";
import Component_2_Signin from "./Component2_SignIn";
const C0_LandingScreen = () => {
  const [C1_Visible, setC1_Visible] = useState(true);
  const [C2_Visible, setC2_Visible] = useState(false);
  const [action, setAction] = useState("Register");
  const handleActionListerner = () => {
    setAction(action === "Register" ? "LogIn" : "Register");
  };
  useEffect(() => {
    if (action === "Register") {
      setC1_Visible(true);
      setC2_Visible(false);
    } else {
      setC1_Visible(false);
      setC2_Visible(true);
    }
  }, [action]);
  return (
    <div className="h-screen">
      <div>
        <Navbar />
      </div>
      <div className="flex flex-col items-center">
        <div className="p-2 rounded-xl bg-purple-300 text-white m-2 dark:bg-purple-600 font-bold">
          <button onClick={handleActionListerner}>{action}</button>
        </div>
        <div className="flex items-center justify-center">
          {C1_Visible && <Component_1_SignUp />}
        </div>
        <div className="flex items-center justify-center">
            {C2_Visible && <Component_2_Signin/>}
        </div>
      </div>
    </div>
  );
};
export default C0_LandingScreen;
