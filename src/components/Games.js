import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import Game from "./Game";

const Games = ({ title, games }) => {
  return (
    <React.Fragment>
      <h2>{title}</h2>
      <StyledGames>
        {games.map(({ id, ...rest }) => (
          <Game key={id} id={id} {...rest} />
        ))}
      </StyledGames>
    </React.Fragment>
  );
};

const StyledGames = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;

export default Games;
