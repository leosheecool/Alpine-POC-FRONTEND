import React from "react";
import separatorImg from "assets/vectors/separator.svg";

const Separator = () => {
  const style = {
    width: "100%",
    height: 28,
    margin: "48px 0",
    backgroundSize: "auto 28px",
    backgroundPosition: "50%",
    backgroundImage: `url(${separatorImg})`,
    backgroundRepeat: "no-repeat",
  };

  return <div style={style} />;
};

export default Separator;
