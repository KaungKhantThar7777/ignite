import { motion } from "framer-motion";
import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const GameDetail = () => {
  const { game, screen } = useSelector(state => state.detail);

  if (screen.length === 0) {
    return <h1>Loading...</h1>;
  }
  return (
    <StyledCardShow>
      <StyledDetail>
        <StyledStats>
          <div className="rating">
            <h3>{game.name}</h3>
            <p>Rating: {game.rating}</p>
          </div>
          <div className="info">
            <h3>Platforms</h3>
            <StyledPlatforms>
              {game.platforms.map(data => (
                <h3 key={data.platform.id}>{data.platform.name}</h3>
              ))}
            </StyledPlatforms>
          </div>
        </StyledStats>
        <StyledMedia>
          <img src={game.background_image} alt={game.name} />
        </StyledMedia>

        <StyledDescription>{game.description_raw}</StyledDescription>

        <div className="gallery">
          {screen.map(screen => (
            <img key={screen.id} src={screen.image} alt={game.name} />
          ))}
        </div>
      </StyledDetail>
    </StyledCardShow>
  );
};

const StyledCardShow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ff7676;
  }
  &::-webkit-scrollbar-track {
    background-color: white;
  }
`;

const StyledDetail = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 5rem;
  position: absolute;
  background: white;
  left: 10%;
  color: black;
  img {
    width: 100%;
  }
`;

const StyledStats = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .info {
    text-align: center;
  }
`;

const StyledPlatforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  img {
    margin-left: 3rem;
  }
`;
const StyledMedia = styled(motion.div)`
  margin-top: 5rem;
`;
const StyledDescription = styled(motion.div)`
  margin: 5rem 0rem;
`;
export default GameDetail;
