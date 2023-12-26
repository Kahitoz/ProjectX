import { useState } from "react";
const Component_2_Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
        <button className="m-2 p-2 rounded-xl bg-blue-400 dark:bg-blue-700 text-white font-bold">
          Sign In
        </button>
      </div>
    </div>
  );
};
export default Component_2_Signin;
