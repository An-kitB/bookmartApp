import React from "react";
import { useLocation, useParams } from "react-router-dom";
import StarRatings from "react-star-ratings";
import { BookData } from "../bookdata";
import { AuthorPage } from "./AuthorPage";

export const Details = () => {
  const param = useParams();
  const location = useLocation();
  const data = BookData[param.id - 1];

  const renderBookData = [data].map((details) => (
    <div>
      <h1 style={{ fontSize: 55, textAlign: "center" }}>Book Details</h1>
      <div style={styles.imgBooksStyle}>
        <img style={styles.bookStyle.imgStyle} src={details.img} />
        <div style={styles.bookStyle.bookTitleDiv}>
          <h2 style={styles.heading}>{details.name}</h2>
          <p>Published by - {details.authorName}</p>
          <div style={styles.bookStyle.textStyle}>
            <p>
              Summary: <AuthorPage />
            </p>
          </div>
          <p>Price: {details.price}</p>
          <StarRatings
            rating={3}
            starRatedColor="gold"
            starDimension="30px"
            starSpacing="10px"
            numberOfStars={5}
            name="rating"
          />
        </div>
      </div>
    </div>
  ));

  const nameOfauthor = data.authorName;
  const renderAuthorData = BookData.filter(
    (author) => author.authorName.toLowerCase() === nameOfauthor.toLowerCase()
  ).map((book) => (
    <div style={styles.imgBooksStyle}>
      <img src={book.img} />
    </div>
  ));

  return (
    <div>
      {location.state.isBook ? (
        renderBookData
      ) : (
        <div>
          <h1 style={{ fontSize: 55, textAlign: "center" }}> About Author</h1>
          <div style={styles.authorStyle.aboutAuthorDiv}>
            <img style={styles.authorStyle.imgStyle} src={data.authorImg} />
            <div style={{ marginLeft: 23 }}>
              <h2 style={styles.heading}> {data.authorName}</h2>
              <div style={styles.authorStyle.textStyle}>
                <AuthorPage />
              </div>
            </div>
          </div>
          <h1 style={{ fontSize: 55, marginLeft: 144 }}> Published Books</h1>
          <div style={{ marginLeft: 144 }}>
            <div style={styles.imgBooksStyle}> {renderAuthorData}</div>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  main: {},
  imgBooksStyle: {
    display: "flex",
    paddingRight: 133,
    marginBottom: 200,
  },

  heading: {
    fontSize: 44,
  },

  authorStyle: {
    aboutAuthorDiv: {
      display: "flex",
      padding: (30, 30),
    },
    imgStyle: {
      width: 400,
      height: 600,
      marginLeft: 125,
    },

    textStyle: {
      marginTop: 10,
      marginLeft: 34,
      fontSize: 23,
      marginRight: 400,
    },
  },

  bookStyle: {
    bookTitleDiv: {
      marginLeft: 120,
    },

    imgStyle: {
      width: 500,
      height: 700,
      marginLeft: 40,
    },
    textStyle: {
      marginLeft: 34,
      fontSize: 23,
      marginRight: 400,
    },
  },
};
