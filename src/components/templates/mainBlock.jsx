import React from "react";
import Header from "../organism/header/header.jsx";
import BlockOne from "../organism/pages/1/blockOne.jsx";
import BlockTwo from "../organism/pages/2/blockTwo";
import BlockThree from "../organism/pages/3/blockThree";
import BlockFour from "../organism/pages/4/blockFour";
import BlockFive from "../organism/pages/5/blockFive";
import BlockSix from "../organism/pages/6/blockSix";
import Foter from "../organism/footer/footer.jsx";

function MainBlock() {
  return (
    <div>
      <Header />
      <BlockOne />
      <BlockTwo />
      <BlockThree />
      <BlockFour />
      <BlockFive />
      <BlockSix />
      <Foter />
    </div>
  );
}

export default MainBlock;
