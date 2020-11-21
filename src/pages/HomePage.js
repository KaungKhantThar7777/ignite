import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { loadGames } from "../actions/gamesAction";
import Games from "../components/Games";

const HomePage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

  const { populars, news, upcomings } = useSelector(state => state.games);
  if (populars.length === 0) {
    return <p>Loading ...</p>;
  }
  return (
    <StyledGameList>
      <Games title="Popular Games" games={populars} />
      <Games title="New Games" games={news} />
      <Games title="Upcoming Games" games={upcomings} />
    </StyledGameList>
  );
};

const StyledGameList = styled(motion.div)`
  padding: 0rem 5rem;
  h2 {
    padding: 4rem 0rem;
  }
`;

export default HomePage;
