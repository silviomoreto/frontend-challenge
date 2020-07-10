import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 32px 24px;
  box-sizing: border-box;

  @media (min-width: 768px) {
    width: 50%;
  }

  h3 {
    font-family: "Fira Sans";
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
  }

  p {
    font-weight: 300;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    width: 80%;
  }
`;

export const Button = styled(Link)`
  align-self: flex-start;
  height: 48px;
  background: transparent;
  border: 0;
  font-size: 14px;
  line-height: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-decoration: none;

  img {
    margin-right: 10px;
  }
`;
