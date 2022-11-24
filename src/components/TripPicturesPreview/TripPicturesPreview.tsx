import styles from "./TripPicturesPreview.module.scss";
import { tripPictures } from "mocked/pictures";

const TripPicturesPreview = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Photos</h2>
        <p className={styles.link}>See All</p>
      </div>

      <div className={styles.picturesContainer}>
        {tripPictures.map((picture) => (
          <img src={picture} alt="trip preview" className={styles.picture} />
        ))}
      </div>
    </div>
  );
};

export default TripPicturesPreview;
