import { useEffect, useState } from "react";
import {
  BottomBar,
  TripPicturesPreview,
  TripDescription,
  Map,
} from "components";
import styles from "./TripDetails.module.scss";
import PuffLoader from "react-spinners/PuffLoader";
import { Trip } from "types/trip.types";
import { mockedTrip } from "mocked/trip";
import { ReactComponent as NavigationSvg } from "assets/vectors/navigation.svg";

const TripDetails = () => {
  const [trip, setTrip] = useState<Trip>(mockedTrip);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1500);
  }, []);

  return (
    <div className={styles.container}>
      {isLoading ? (
        <PuffLoader className={styles.loader} color="#0078c9" />
      ) : (
        <>
          <img
            src={trip.image}
            alt={trip.place}
            className={styles.headerImage}
          />
          <img
            src="https://media-exp1.licdn.com/dms/image/C4D03AQGvX9cQRK2yTA/profile-displayphoto-shrink_800_800/0/1611953027407?e=1674691200&v=beta&t=jsXrsh9K17dl6uHBLpNZ2oISLjgDIW_RPwreCn0yFX4"
            className={styles.profileIcon}
            alt="profile"
          />
          <div className={styles.main}>
            <TripDescription
              title={trip.place}
              description="Un trajet parfait pour les balandes du week-end. Très agréable et très bien situé. Je recommande vivement !"
              likeNumber={trip.likeNumber}
              commentNumber={trip.commentNumber}
              isFavorite={trip.isFavorite}
            />

            <TripPicturesPreview />
            <div className={styles.mapContainer}>
              <h2 className={styles.title}>Journey Preview</h2>
              <div className={styles.journeyPreview}>
                <Map results={trip.route} />
              </div>
            </div>
          </div>
          <div className={styles.navContainer}>
            <NavigationSvg
              className={styles.navBtn}
              fill="#FFF"
              height={30}
              width={30}
            />
            <span className={styles.subTitle}>Start Now</span>
          </div>
        </>
      )}

      <BottomBar />
    </div>
  );
};

export default TripDetails;
