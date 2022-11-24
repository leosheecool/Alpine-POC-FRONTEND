import styles from "./TripDescription.module.scss";
import activeHeart from "assets/icons/heart-active.png";
import inactiveHeart from "assets/icons/heart-not-active.png";
import { ReactComponent as TimeSvg } from "assets/vectors/time.svg";
import { ReactComponent as SpeedSvg } from "assets/vectors/speed.svg";
import { ReactComponent as SpeedometerSvg } from "assets/vectors/speedometer.svg";
import { ReactComponent as EuroSvg } from "assets/vectors/euro.svg";
import IconInfo from "./IconInfo/IconInfo";

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

      <div className={styles.tripInfos}>
        <IconInfo
          title="Average Speed"
          value="75"
          metric="Km/H"
          icon={SpeedometerSvg}
        />

        <IconInfo
          title="Max. Acceleration"
          value="103"
          metric="Km/H"
          icon={SpeedSvg}
        />

        <IconInfo title="Price" value="13,4" metric="€" icon={EuroSvg} />
        <IconInfo title="Duration" value="44" metric="min" icon={TimeSvg} />
      </div>

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
          <p className={styles.textBtn}>{isFavorite ? "Unlike" : "Like"}</p>
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
