import React from "react";

import {
  ProgressWrapper,
  ProgressIndicator,
  ProgressBarWrapper,
  Progress,
} from "./styles";

const ProgressBar = (props) => (
  <>
    <ProgressWrapper>
      <ProgressIndicator>
        <span>0%</span>
        <span>100%</span>
      </ProgressIndicator>
      <ProgressBarWrapper>
        <Progress progress={props.progress}></Progress>
      </ProgressBarWrapper>
    </ProgressWrapper>
  </>
);

export default ProgressBar;
