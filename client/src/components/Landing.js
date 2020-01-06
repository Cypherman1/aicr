import React from "react";
import ResizePanel from "react-resize-panel";

const ComponentA = () => {
  return <div> abc </div>;
};

const ComponentB = () => {
  return <div style={{ width: "200", backgroundColor: "red" }}> BCD </div>;
};

// const Landing = () => {
//   return [<CompA />, <CompB />];
// };

const Landing = () => {
  return [
    <div className="container">
      <div className="body">
        <ResizePanel direction="e">
          <div className="sidebar panel">
            left panel
            <br /> with margin
          </div>
        </ResizePanel>
        <div className="content panel">content</div>
        <ResizePanel direction="w">
          <div className="content panel">
            right panel
            <br /> with custom handle
          </div>
        </ResizePanel>
      </div>

      <ResizePanel direction="n">
        <div className="footer panel">
          <span>footer</span>
        </div>
      </ResizePanel>
    </div>
  ];
};

export default Landing;
