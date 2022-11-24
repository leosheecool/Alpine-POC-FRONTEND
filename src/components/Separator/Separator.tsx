import React from "react";
import separatorImg from "assets/vectors/separator.svg";

const Separator = () => {
  const style = {
    width: "100%",
    height: 28,
    margin: "48px 0",
    backgroundSize: "auto 28px",
    backgroundPosition: "50%",
    // backgroundImage: url(data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 800 28' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 21.429h376.852m46.296 0H800M400 .454l16.204 27.314M400 .454l-16.204 27.314M400 .454l-9.342 15.748-5.473-9.73-8.333 14.957h10.623l-3.679 6.34h32.408l-3.684-6.34h10.628l-8.333-14.957-5.473 9.73z' fill='none' stroke='%23ccc'/%3E%3C/svg%3E);
    backgroundImage: `url(${separatorImg})`,
    backgroundRepeat: "no-repeat",
  };

  return <div style={style} />;
};

export default Separator;
