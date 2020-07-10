import styled from "styled-components";

export const InputField = styled.input`
  width: 100%;
  height: 56px;
  border: 1px solid #4adede;
  box-sizing: border-box;
  border-radius: 50px;
  font-size: 16px;
  line-height: 19px;
  @media (min-width: 768px) {
    height: 20%;
    margin-bottom: 14px;
  }
  padding: 18px 24px;
  ::placeholder {
    font-size: 16px;
    line-height: 19px;
    color: #4adede;
  }
`;
