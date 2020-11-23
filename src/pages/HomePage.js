import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { loadGames } from "../actions/gamesAction";
import GameDetail from "../components/GameDetail";
import Games from "../components/Games";
import Loader from "../components/Loader";

const HomePage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

  const { pathname } = useLocation();
  const pathId = pathname.split("/")[2];

  const { populars, news, upcomings, searched } = useSelector(
    state => state.games
  );
  if (populars.length === 0) {
    return (
      <StyledContainer>
        <Loader />
      </StyledContainer>
    );
  }
  return (
    <StyledGameList>
      <AnimateSharedLayout type="crossfade">
        <AnimatePresence>
          {pathId && <GameDetail pathId={pathId} />}
        </AnimatePresence>
        {searched.length !== 0 && (
          <Games title="Searched Games" games={searched} />
        )}
        <Games title="Popular Games" games={populars} />
        <Games title="New Games" games={news} />
        <Games title="Upcoming Games" games={upcomings} />
      </AnimateSharedLayout>
    </StyledGameList>
  );
};

const StyledGameList = styled(motion.div)`
  padding: 0rem 5rem;
  h2 {
    padding: 4rem 0rem;
  }
`;
export const StyledContainer = styled(motion.div)`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align: center;
`;

export default HomePage;
