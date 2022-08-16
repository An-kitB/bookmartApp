import { Grid } from '@mui/material'
import { nanoid } from 'nanoid'
import React from 'react'
import StarRatings from 'react-star-ratings'

function BookCard({ img, name, authorName, publishedDate, rating, price }) {
    return (
        <Grid item xs={12} sm={6} md={3}>
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
                                borderRadius: 22,
                            }}
                        >
                            <img
                                style={{ width: 200, height: 200, paddingTop: 20 }}
                                src={img}
                                alt={img}
                            />
                        </div>
                        <div style={{ width: 100, marginTop: 100 }}>
                            <p> &#8360; {price}</p>
                        </div>
                    </div>
                    <h1 style={{ fontSize: 23 }}>{name}</h1>
                    <p>-{authorName}</p>
                    <p>Published-Date {publishedDate}</p>

                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            marginLeft: 80,
                        }}
                    >
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
        </Grid>
    )
}

export default BookCard