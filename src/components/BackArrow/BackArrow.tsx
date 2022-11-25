import React from "react";
import { ReactComponent as BackArrowSvg } from "assets/vectors/arrow-left-1.svg";
import styles from "./BackArrow.module.scss";
import cn from "classnames";

type Props = {
  onClick: () => void;
  className?: string;
};

const BackArrow = ({ onClick, className }: Props) => {
  return (
    <div className={`${styles.container} ${className}`}>
      <BackArrowSvg onClick={onClick} className={styles.img} fill="#FFF" />
    </div>
  );
};

export default BackArrow;
