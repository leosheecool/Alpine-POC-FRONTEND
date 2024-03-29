import React from "react";
import styles from "./TripCard.module.scss";
import ActiveHeart from "assets/icons/heart-active.png";
import InactiveHeart from "assets/icons/heart-not-active.png";
import CommentIcon from "assets/vectors/comment.svg";
import { useNavigate } from "react-router-dom";
import { Trip } from "types/trip.types";

type Props = {
  trip: Trip;
};

const TripCard = ({ trip }: Props) => {
  const navigation = useNavigate();

  return (
    <div className={styles.container}>
      <img
        src={trip.thumbnail}
        onClick={() => navigation(`/tripDetails/${trip.id}`)}
        alt={trip.place}
        className={styles.img}
      />
      <div className={styles.infoContainer}>
        <div>
          <h3>{trip.place}</h3>
          <span>
            {trip.length || 0}km | ~{trip.duration}
          </span>
        </div>
        <div className={styles.actionBtnContainer}>
          <div className={styles.actionBtn}>
            <img src={CommentIcon} alt="comment" className={styles.icon} />
            <span>{trip.commentNumber}</span>
          </div>
          <div className={styles.actionBtn}>
            <img
              src={trip.isFavorite ? ActiveHeart : InactiveHeart}
              alt="like"
              className={styles.icon}
            />
            <span>{trip.likeNumber}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripCard;
