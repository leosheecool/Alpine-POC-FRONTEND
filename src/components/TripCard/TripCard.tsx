import React from "react";
import styles from "./TripCard.module.scss";
import ActiveHeart from "assets/icons/heart-active.png";
import InactiveHeart from "assets/icons/heart-not-active.png";
import CommentIcon from "assets/icons/comment.png";
import cn from "classnames";

type Props = {
  trip: {
    place: string;
    image: string;
    likeNumber: number;
    commentNumber: number;
    isFavorite?: boolean;
  };
};

const TripCard = ({ trip }: Props) => {
  return (
    <div className={styles.container}>
      <img src={trip.image} alt={trip.place} className={styles.img} />
      <div className={styles.overlay} />
      <div className={styles.info}>
        <h2>{trip.place}</h2>
      </div>
      <div className={cn(styles.actionBtnContainer, styles.likeContainer)}>
        <img
          src={trip.isFavorite ? ActiveHeart : InactiveHeart}
          alt="like"
          className={styles.icon}
        />
        <span>{trip.likeNumber}</span>
      </div>
      <div className={cn(styles.actionBtnContainer, styles.commentContainer)}>
        <img src={CommentIcon} alt="comment" className={styles.icon} />
        <span>{trip.commentNumber}</span>
      </div>
    </div>
  );
};

export default TripCard;
