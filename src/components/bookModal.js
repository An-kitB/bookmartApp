import { Modal } from "@mui/material";
import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { BookData } from "./bookdata";
import { Addtocart } from "./Addtocart";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addBookToCartAction } from "../redux/actions/action";

export const BookModal = ({ setclick, BookId }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleGoToCart = (data) => {
    dispatch(addBookToCartAction(data))
    navigate("/cart");
  };
  const handleClose = () => {
    setclick(false);
  };
  return (
    <div>
      <Modal open={true}>
        <Box sx={styles.modalBox}>
          <Typography style={styles.Heading}>
            {BookData[BookId - 1].name}
          </Typography>
          <Typography style={styles.Heading.subHeadng}>
            {BookData[BookId - 1].authorName}
          </Typography>
          <img style={styles.imgStyle} src={BookData[BookId - 1].img} />
          <Addtocart />
          <div>
            <button
              onClick={() => {
                handleGoToCart(BookData[BookId - 1]);
              }}
            >
              Go to cart
            </button>
          </div>

          <button onClick={handleClose}>Close</button>
        </Box>
      </Modal>
    </div>
  );
};

const styles = {
  modalBox: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: window.innerWidth / 2,
    height: window.innerHeight / 1.2,
    borderRadius: 22,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    textAlign: "center",
  },

  Heading: {
    fontSize: 54,
    subHeadng: {
      fontSize: 34,
    },
  },

  imgStyle: {
    width: 350,
    height: 550,
    paddingBottom: 22,
  },
};
