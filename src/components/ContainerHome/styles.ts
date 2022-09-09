import styled from "styled-components";
import bgImg from "../../assets/images/BACKGROUND.png";

export const HomeContainer = styled.section`
  position: relative;
  height: 100vh;
  min-width: 100%;
  background-image: url(${bgImg});
  background-color: #000000d6;
  background-size: cover;
  display: grid;

  button {
    width: 100%;
    background-color: var(--accentColor);
    color: var(--primaryText);
    border: none;
  }
`;
