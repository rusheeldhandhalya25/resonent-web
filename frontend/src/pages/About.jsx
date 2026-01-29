import React from "react";

const First = () => {
  return (
    <div className="bg-backgroundClr flex flex-col items-center justify-center">
      <div className="text-60 font-heading font-6 text-textDefaultClr my-30">
        Engineering the
        <br />
        Connected Future
      </div>

      <div></div>
    </div>
  );
};

const About = () => {
  return (
    <div className="bg-backgroundClr flex flex-col ">
      <First />
    </div>
  );
};

export default About;
