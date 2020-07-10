import React from "react";
import PropTypes from "prop-types";

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

ProgressBar.propTypes = {
  progress: PropTypes.number.isRequired,
};

export default ProgressBar;
