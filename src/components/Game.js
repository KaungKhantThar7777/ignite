import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const Game = ({ name, released, background_image }) => {
  return (
    <StyledGame>
      <h3>{name}</h3>
      <p>{released}</p>
      <img src={background_image} alt={name} />
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  text-align: center;
  min-height: 30vh;
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.2);
  border-radius: 1rem;

  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
    transform: translateY(10px);
  }
`;

export default Game;