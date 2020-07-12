import styled from "styled-components";

export const ProgressWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const ProgressIndicator = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  span {
    font-size: 14px;
    line-height: 16px;
  }
`;

export const ProgressBarWrapper = styled.div`
  display: flex;
  width: 100%;
  background: #ffffff;
  border-radius: 50px;
  position: relative;
  height: 16px;
`;

export const Progress = styled.div`
  width: ${(props) => `${props.progress}%`};
  height: 16px;
  background: #4adede;
  border-radius: 50px;
  position: absolute;
  top: 0;
  left: 0;
  transition: all 200ms linear;
`;
