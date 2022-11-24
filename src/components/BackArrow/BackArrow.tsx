import React from "react";
import backArrow from "assets/vectors/arrow-left-1 (1).svg";
import styles from "./BackArrow.module.scss";

type Props = {
  onClick: () => void;
};

const BackArrow = ({ onClick }: Props) => {
  return (
    <img src={backArrow} onClick={onClick} alt="back" className={styles.img} />
  );
};

export default BackArrow;
