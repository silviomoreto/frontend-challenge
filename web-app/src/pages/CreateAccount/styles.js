import styled, { css } from "styled-components";

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
    font-size: 26px;
    line-height: 31px;
    font-weight: 300;
  }

  p {
    font-weight: 200;
    font-size: 14px;
    @media (min-width: 768px) {
      font-weight: 300;
      font-size: 18px;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 40%;

  select {
    width: 100%;
    height: 56px;
    background: #ffffff;
    border-radius: 50px;
    border: 0;
    font-size: 18px;
    color: #363636;
    padding: 8px 16px;
    box-sizing: border-box;
  }
  label {
    font-size: 16px;
    line-height: 19px;
    color: #4adede;
    font-weight: 100;
    margin-left: 15px;
    margin-top: 24px;
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const Button = styled.button`
  flex: 1;
  height: 48px;
  background: transparent;
  border: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 14px;
  line-height: 20px;
  color: #fff;
  text-decoration: none;

  ${(props) =>
    props.continue &&
    css`
      width: 141px;
      background: #1d2366;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 100px;
      border: 0;
      font-size: 14px;
      line-height: 20px;
      justify-content: center;
    `}

  img {
    margin-right: 10px;
  }
`;
