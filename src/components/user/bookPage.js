import React from "react";
import { BookData } from "../bookdata";
import { Navbar } from "../NavBar/navbar";
import { Cardcomponent } from "./cardcomponent";
export const BookPage = () => {
  // const param = useParams();

  // console.log("id of  book  ", BookData[param.id - 1]);

  return (
    <div>
      <Navbar />
      <Cardcomponent BookData={BookData}/>
    </div>
  );
};
