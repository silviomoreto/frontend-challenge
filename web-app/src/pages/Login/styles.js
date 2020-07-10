import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  @media (min-width: 768px) {
    width: 30%;
    height: 90%;
    justify-content: center;
  }
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-self: center;
  width: 100%;
  height: 35%;
  padding: 24px;
  box-sizing: border-box;

  ${(props) =>
    props.fields &&
    css`
      height: 50%;
      background: #fff;
      border-radius: 30px 30px 0px 0px;
      justify-content: space-around;

      @media (min-width: 768px) {
        justify-content: center;
        height: 45%;
        border-radius: 30px;
      }
    `}

  img {
    align-self: center;
    height: 80%;
  }
  h3 {
    width: 100%;
    font-family: "Roboto";
    font-size: 30px;
    line-height: 30px;
    font-weight: normal;
    margin-top: 16px;
    @media (min-width: 768px) {
      display: none;
    }
  }
  h2 {
    display: none;
    @media (min-width: 768px) {
      display: block;
      font-family: "Roboto";
      font-size: 30px;
      line-height: 30px;
      font-weight: normal;
      margin-bottom: 16px;
      color: #4adede;
    }
  }
  p {
    color: red;
    text-align: center;
    font-size: 14px;
  }
`;

export const Button = styled.button`
  background: #4adede;
  border-radius: 50px;
  width: 100%;
  height: 56px;
  border: 0;
  font-family: "Fira Sans";
  font-size: 20px;
  line-height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;

  @media (min-width: 768px) {
    width: 50%;
    height: 20%;
    align-self: center;
  }

  :hover {
    background: #49a2a2;
  }

  ${(props) =>
    props.back &&
    css`
      width: 28px;
      height: 28px;
      margin: 32px 24px;
      border: 0;
      background: transparent;
      align-items: flex-start;
      box-sizing: border-box;
      @media (min-width: 768px) {
        display: none;
      }
    `}
`;
