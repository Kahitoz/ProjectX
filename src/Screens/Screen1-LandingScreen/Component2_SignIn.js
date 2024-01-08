import { useState } from "react";
import cred from "../../Components/Credential.json";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
const Component_2_Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const Navigate = useNavigate();
  const handleLoginFunctionality = async () => {
    const response = await Create_Account_Functionality(email, password);
    if (response === undefined) {
      return;
    } else {
      const token = response.token;
      Cookies.set('ACCESS_TOKEN',token);
      const path = response.path;
      Navigate(path);
    }
  };
  return (
    <div className=" shadow-xl shadow-blue-400 dark:shadow-cyan-400 inline-block p-12 rounded-xl">
      <div className="flex flex-col items-center">
        <div>
          <p className="p-1 dark:text-white font-bold">Enter Your Email</p>
          <input
            className="bg-white-300 p-2 rounded-xl sm:w-64 bg-zinc-400"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div>
          <p className="p-1 dark:text-white font-bold">Enter Your Password</p>
          <input
            className="bg-white-300 p-2 rounded-xl sm:w-64 bg-zinc-400"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <button
          className="m-2 p-2 rounded-xl bg-blue-400 dark:bg-blue-700 text-white font-bold"
          onClick={() => handleLoginFunctionality()}
        >
          Sign In
        </button>
      </div>
    </div>
  );
};
export default Component_2_Signin;

async function Create_Account_Functionality(email, password) {
  const login_api = cred.api.concat("/user/login/");
  const get_api_response = await fetch(login_api, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  });
  if (get_api_response.ok) {
    const login_api_response = await get_api_response.json();
    return login_api_response;
  } else {
    const statusCode = get_api_response.status;
    if (statusCode === 404) {
      alert("User does not exists/Invalid credentials");
    }
  }
}
