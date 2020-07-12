import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 32px 24px;
  box-sizing: border-box;
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 90%;
  }

  h3 {
    font-family: "Fira Sans";
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    margin-top: 32px;
  }
`;

export const Button = styled.button`
  align-self: flex-end;
  width: 50px;
  background: transparent;
  border: 0;
  font-size: 14px;
  @media (min-width: 768px) {
    font-size: 24px;
    &:hover {
      color: #4adede;
    }
  }
`;
