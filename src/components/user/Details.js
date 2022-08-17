import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { BookData } from "../bookdata";

export const Details = () => {
  const param = useParams();
  const location = useLocation();
  const data = BookData[param.id - 1];

  const renderBookData = [data].map((details) => (
    <div>
      <h1>Book Details</h1>

      <h2>{details.name}</h2>
    </div>
  ));

  const nameOfauthor = data.authorName;
  const renderAuthorData = BookData.filter(
    (author) => author.authorName.toLowerCase() === nameOfauthor.toLowerCase()
  ).map((book) => <div>{book.name}</div>);

  return (
    <div>
      <h1>Details</h1>
      {location.state.isBook ? (
        renderBookData
      ) : (
        <div>
          <h1>Author</h1>
          {renderAuthorData}
        </div>
      )}
    </div>
  );
};
