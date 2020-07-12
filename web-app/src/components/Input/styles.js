import styled from "styled-components";

export const InputField = styled.input`
  width: 100%;
  height: 56px;
  border: ${(props) => (props.form ? "none" : "1px solid #4adede")};
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

export const Label = styled.label`
  font-size: 16px;
  line-height: 19px;
  color: #4adede;
  font-weight: 100;
  margin-left: 15px;
  margin-top: 24px;
`;
