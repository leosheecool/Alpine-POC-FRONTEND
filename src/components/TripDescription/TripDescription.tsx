import styles from "./TripDescription.module.scss";
import activeHeart from "assets/icons/heart-active.png";
import inactiveHeart from "assets/icons/heart-not-active.png";

type Props = {
  title: string;
  description: string;
  likeNumber: number;
  commentNumber: number;
  isFavorite?: boolean;
};

const TripDescription = ({
  title,
  description,
  commentNumber,
  likeNumber,
  isFavorite = false,
}: Props) => {
  return (
    <div className={styles.container}>
      <h2>{title}</h2>
      <p className={styles.description}>{description}</p>

      <div className={styles.btnContainer}>
        <div className={styles.btn}>
          <h3>{likeNumber}</h3>
          <p className={styles.subTitle}>Likes</p>
        </div>
        <div className={styles.btn}>
          <h3>{commentNumber}</h3>
          <p className={styles.subTitle}>Comments</p>
        </div>
        <div className={styles.likeBtn}>
          <p className={styles.textBtn}>Favorites</p>
          {isFavorite ? (
            <img src={activeHeart} alt="heart" />
          ) : (
            <img src={inactiveHeart} alt="heart" />
          )}
        </div>
      </div>
    </div>
  );
};

export default TripDescription;
