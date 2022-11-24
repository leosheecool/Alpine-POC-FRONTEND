import { useEffect, useState } from "react";
import { BottomBar } from "components";
import styles from "./TripDetails.module.scss";
import PuffLoader from "react-spinners/PuffLoader";
import { Trip } from "types/trip.types";
import { tripMocked } from "mocked/trip";
import { TripDescription } from "components";

const TripDetails = () => {
  const [trip, setTrip] = useState<Trip>(tripMocked);
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
          </div>
        </>
      )}
      <BottomBar />
    </div>
  );
};

export default TripDetails;
