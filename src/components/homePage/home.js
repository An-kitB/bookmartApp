import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginAction } from "../../redux/actions/action";
import { Navbar } from "../NavBar/navbar";

export const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const userFirstName = JSON.parse(
    localStorage.getItem("LoaclStorageFirstName")
  );
  const userLastName = JSON.parse(localStorage.getItem("LoaclStorageLastName"));

  const userPhoneNum = JSON.parse(localStorage.getItem("LocalStoragePhoneNum"));
  console.log(userPhoneNum);

  const renderNum = userPhoneNum.map((num, index) => (
    <div key={index}>
      <p>{num}</p>
    </div>
  ));


  const handleBillingForm = ()=>{
    navigate('/billing')
  }

  const handleLogout = () => {
    dispatch(loginAction())
    
    navigate("/");
  };

  return (
    <div>
      <Navbar/>
      <h1>
        Welcome {userFirstName} {userLastName}
      </h1>
      <h2>
        phone_number
        {renderNum}
      </h2>
      <button onClick={handleBillingForm}>BillingForm</button>
      <button onClick={handleLogout}>lOGOUT</button>
    </div>
  );
};
