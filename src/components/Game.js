import { motion } from "framer-motion";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { loadDetails } from "../actions/detailAction";
import { smallImage } from "../util";

const Game = ({ id, name, released, background_image }) => {
  const dispatch = useDispatch();
  const loadDetailsHandler = () => {
    dispatch({ type: "RESET_DETAILS" });
    dispatch(loadDetails(id));
    document.body.style.overflow = "hidden";
  };
  return (
    <StyledGame onClick={loadDetailsHandler} layoutId={`${id}`}>
      <Link to={`/game/${id}`}>
        <motion.h3 layoutId={`title ${id}`}>{name}</motion.h3>
        <p>{released}</p>
        <motion.img
          layoutId={`image ${id}`}
          src={smallImage(background_image, 640)}
          alt={name}
        />
      </Link>
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  text-align: center;
  min-height: 30vh;
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.2);
  border-radius: 1rem;
  cursor: pointer;
  overflow: hidden;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`;

export default Game;
