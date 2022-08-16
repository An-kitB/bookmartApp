import React from "react";
import { BookData } from "../bookdata";
import { Navbar } from "../NavBar/navbar";
import { nanoid } from "nanoid";
import { useParams } from "react-router-dom";
import StarRatings from "react-star-ratings";

export const BookPage = () => {
  // const param = useParams();

  // console.log("id of  book  ", BookData[param.id - 1]);
  const renderBookData = BookData.map((book) => (
    <div
      style={{
        backgroundColor: " #defcff",
        width: 400,
        color: "Black",
        // display: "flex",
        // marginLeft: window.innerWidth / 3,
        justifyContent: "center",
        borderRadius: 22,
        borderWidth: 3,
        borderColor: "red",
        marginTop: 23,
        padding: (12, 25),
      }}
    >
      <div key={nanoid()}>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#cedcf2",
              width: 250,
              height: 250,
              borderRadius:22,
            }}
          >
            <img
              style={{ width: 200, height: 200, paddingTop: 20 }}
              src={require(`../../media/booksMedia/${book.img}`)}
              alt={book.img}
            />
          </div>
          <div style={{ width: 100, marginTop: 100 }}>
            <p> &#8360; {book.price}</p>
          </div>
        </div>
        <h1 style={{ fontSize: 23 }}>{book.name}</h1>
        <p>-{book.authorName}</p>
        <p>Published-Date {book.publishedDate}</p>

        <div style={{ display: "flex", flexDirection: "row", marginLeft:80 }}>
          <StarRatings
            rating={3}
            starRatedColor="gold"
            // changeRating={this.changeRating}
            starDimension="30px"
            starSpacing="10px"
            numberOfStars={5}
            name="rating"
          />
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}></div>
      </div>
    </div>
  ));

  return (
    <div>
      <Navbar />
      {renderBookData}
    </div>
  );
};
