import React, { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import logo from "../img/logo.svg";
import { useDispatch } from "react-redux";
import { searchGames } from "../actions/gamesAction";
import { fadeIn } from "../animation";

const Nav = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(searchGames(text));
  };

  const clearInputText = () => {
    setText("");
  };

  const clearSearch = () => {
    clearInputText();
    dispatch({ type: "CLEAR_SEARCH_GAMES" });
  };
  return (
    <StyledNav variants={fadeIn} initial="hidden" animate="show">
      <StyledLogo onClick={clearSearch}>
        <img src={logo} alt="logo" onClick={clearInputText} />
        <h1>Ignite</h1>
      </StyledLogo>
      <form className="search" onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <button>Search</button>
      </form>
    </StyledNav>
  );
};

const StyledNav = styled(motion.div)`
  padding: 2rem 5rem;
  text-align: center;

  input {
    width: 30%;
    padding: 0.7rem;
    margin-top: 1rem;
    font-weight: bold;
    font-size: 1.5rem;
    border: none;
    font-family: "Montserrat", sans-serif;
    outline: none;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
  }

  button {
    font-size: 1.5rem;
    color: white;
    padding: 0.7rem 1rem;
    border: none;
    background-color: #ff7676;
    cursor: pointer;
  }
  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0rem;
    input {
      font-size: 1rem;
      margin-top: 0px;
      width: 60%;
    }
    button {
      font-size: 1rem;
    }
  }
`;

const StyledLogo = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  cursor: pointer;
  img {
    width: 2rem;
    height: 2rem;
    cursor: pointer;
  }
`;

export default Nav;
