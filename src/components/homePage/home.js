import React from "react";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
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
    navigate("/");
  };

  return (
    <div>
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
