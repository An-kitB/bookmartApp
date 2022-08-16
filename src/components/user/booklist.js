import React from "react";
import { BookData } from "../bookdata";
import { nanoid } from "nanoid";
import { NavLink } from "react-router-dom";

export const Booklist = () => {
  const renderBookName = BookData.map((book) => (
    <div key={nanoid()}>
      <NavLink to={`/books/${book.id}`}>
        <p>{book.name}</p>
      </NavLink>
    </div>
  ));

  return (
    <div>
      {renderBookName}
      booklist
    </div>
  );
};
