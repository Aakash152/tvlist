import React from "react";

import BeatLoader from "react-spinners/BeatLoader";
import { css } from "@emotion/core";

const override = css`
  margin-top: 50px;
`;
const Loader = () => {
  return (
    <div>
      <BeatLoader color={"#36D7B7"} margin={5} css={override} />
    </div>
  );
};

export default Loader;
