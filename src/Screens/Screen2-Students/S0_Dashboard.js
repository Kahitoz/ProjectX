import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import cred from "../../Components/Credential.json";
import { useEffect, useState } from "react";

const S0_Dashboard = () => {
  const token = Cookies.get("ACCESS_TOKEN");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const Navigate = useNavigate();
  useEffect(() => {
    if (token === undefined) {
      Navigate("/");
    }
    const Get_userInfo = async () => {
      const userData = await get_info();
      setEmail(userData.email);
      setRole(userData.role);
    };
    Get_userInfo();
  }, []);

  const HandleLogout = () => {
    Cookies.remove("ACCESS_TOKEN");
    Navigate("/");
  };
  return (
    <>
      <div>
        <p className="dark:text-white text-black">Welcome {email}</p>
        <p className="dark:text-white text-black">
          You are signed in as {role}
        </p>
        <button
          className="text-white bg-red-500 p-2"
          onClick={() => HandleLogout()}
        >
          Logout
        </button>
      </div>
    </>
  );
};
export default S0_Dashboard;

async function get_info() {
  const info_api = cred.api.concat("/user/details");
  const token = Cookies.get("ACCESS_TOKEN");
  const api_response = await fetch(info_api, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const api_data = await api_response.json();
  return api_data;
}
