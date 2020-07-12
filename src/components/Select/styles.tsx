import styled from "styled-components";

export const FormControl = styled.div`
  display: grid;
  grid-row-gap: 8px;
`;

export const LabelRoot = styled.label``;

export const SelectRoot = styled.select`
  height: 36px;
  border: solid 1px #cecece;
  padding: 0 5px;

  &:focus {
    border-color: #0f0d6d;
  }
`;
