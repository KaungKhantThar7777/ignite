import React from "react";
import styled from "styled-components";

const Loader = () => {
  return (
    <StyledLoader>
      <dir className="bar" />
      <dir className="bar" />
      <dir className="bar" />
    </StyledLoader>
  );
};

const StyledLoader = styled.div`
  
    display: flex;
    flex-direction: row;
    align-items: center;

    .bar {
      width: 10px;
      height: 5px;
	    background-color:#2a979c;
      margin: 2px;
      animation: bar 1s infinite linear;

      &:nth-child(1) {
        animation-delay: 0s;
      }

      &:nth-child(2) {
        animation-delay: 0.25s;
      }

      &:nth-child(3) {
        animation-delay: 0.5s;
      }
    }
  }

  @keyframes bar {
    0% {
      transform: scaleY(1) scaleX(0.5);
    }

    50% {
      transform: scaleY(10) scaleX(1);
    }

    100% {
      transform: scaleY(1) scaleX(0.5);
    }
  
`;
export default Loader;
