import styles from "./Trips.module.scss";
import { BottomBar, TripMap, SearchBar, RoadModeSelect } from "components";
import { useState } from "react";

const Trips = () => {
  return (
    <div className={styles.Container}>
      <p>Trips</p>
      <Tripmap />
      <BottomBar />
    </div>
  );
};

export default Trips;
