import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const Checkout = () => {
    const AddressSelector = useSelector((state) => state.Address);
    console.log("shjgfgwrgfjwgfygwyfrgb", AddressSelector.Address);

    const [isCheckingOut, setIsCheckingOut] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        !(AddressSelector.Address.length === undefined) &&
            AddressSelector.Address.length > 0 &&
            setIsCheckingOut(true);
    }, [isCheckingOut]);

    console.log(isCheckingOut);
    const handleCheckout = () => {
        isCheckingOut ? navigate("/Checkout") : alert("need address");
    };
    return (
        <div>
            <button onClick={handleCheckout}>Checkout</button>
        </div>
    );
};
