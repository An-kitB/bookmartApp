import React from "react";
import { nanoid } from "nanoid";
import { useParams } from "react-router-dom";
import StarRatings from "react-star-ratings";
import { Grid } from "@mui/material";
import BookCard from "../BookCard";


export const Cardcomponent = ({BookData}) => {
console.log("klevk", BookData)


    return (
    <div>
      <Grid container>
        {BookData.map((book) => (
          <BookCard {...book} />
        ))}{" "}
      </Grid>
    </div>
  );
};
