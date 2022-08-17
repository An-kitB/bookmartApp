import { Grid } from "@mui/material";
import { nanoid } from "nanoid";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import StarRatings from "react-star-ratings";
import { BookModal } from "./bookModal";

function BookCard({ id, img, name, authorName, publishedDate, rating, price }) {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    console.log('onClick worked')
    setClick((prv) => !prv);
  };
  return (
    <Grid item xs={12} sm={6} md={3}>
      <div style={styles.main}>
        <div key={nanoid()}>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div onClick={handleClick} style={styles.cardContainer}>
              <img style={styles.imgStyles} src={img} alt={img} />
            </div>
          </div>
          <NavLink to={`/books/${id}`} state={{ isBook: true }}>
            <p style={{ fontSize: 23 }}>{name}</p>
          </NavLink>
          <NavLink to={`/books/${id}`} state={{ isBook: false }}>
            <p>-{authorName}</p>
          </NavLink>
          <p>Published-Date {publishedDate}</p>
          {click && <BookModal setclick={setClick} BookId={id} />}

          <div>
            <p> &#8360; {price}</p>
          </div>

          <div style={styles.starStyles}>
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
    </Grid>
  );
}

export default BookCard;

const styles = {
  main: {
    textAlign: "center",

    width: 400,
    color: "Black",
    borderRadius: 22,
    borderWidth: 3,
    borderColor: "red",
    marginTop: 23,
    padding: (12, 25),
    border: (1, "solid"),
    padding: 10,
    boxShadow: (5, 10),
  },
  cardContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 450,
    height: 250,
    borderRadius: 22,
  },

  imgStyles: { width: 200, height: 200, paddingTop: 20 },

  starStyles: {
    display: "flex",
    flexDirection: "row",
    marginLeft: 80,
  },
};
