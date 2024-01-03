import { useState } from "react";

const Component_1_SignUp = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const [name, setName] = useState("");

  // Handler function to update the selected value
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <>
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
          <div>
            <p className="p-1 dark:text-white font-bold">
              Re-enter your password
            </p>
            <input
              className="bg-white-300 p-2 rounded-xl sm:w-64 bg-orange-400"
              type="password"
              value={repassword}
              onChange={(e) => setRepassword(e.target.value)}
            ></input>
          </div>
          <div>
            <p className="p-1 dark:text-white font-bold">Enter Your Name</p>
            <input
              className="bg-white-300 p-2 rounded-xl sm:w-64 bg-zinc-400"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
          </div>
          <div>
            <p className="p-1 dark:text-white font-bold">Select Your Role</p>
            <select
              id="userType"
              className="w-64 p-2 bg-zinc-400 rounded-xl"
              value={selectedOption}
              onChange={handleSelectChange}
            >
              <option value="">Select...</option>
              <option value="teacher">Teacher</option>
              <option value="student">Student</option>
            </select>
          </div>
          <div>
            <button className="m-2 p-2 rounded-xl bg-blue-400 dark:bg-blue-700 text-white font-bold">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Component_1_SignUp;
