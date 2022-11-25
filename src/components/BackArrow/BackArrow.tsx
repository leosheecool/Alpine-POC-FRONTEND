import React from "react";
import { ReactComponent as BackArrowSvg } from "assets/vectors/arrow-left-1.svg";
import styles from "./BackArrow.module.scss";

type Props = {
  onClick: () => void;
};

const BackArrow = ({ onClick }: Props) => {
  return (
    <div className={styles.container}>
      <BackArrowSvg onClick={onClick} className={styles.img} fill="#FFF" />
    </div>
  );
};

export default BackArrow;
