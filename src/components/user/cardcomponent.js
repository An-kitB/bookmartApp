import React from "react";
import { Grid } from "@mui/material";
import BookCard from "../BookCard";


export const Cardcomponent = ({BookData}) => {


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
