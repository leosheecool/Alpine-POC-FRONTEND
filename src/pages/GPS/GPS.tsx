import BackArrow from "components/BackArrow/BackArrow";
import Tripmap from "components/TripMap/TripMap";
import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./GPS.module.scss";

const GPS = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className={styles.header}>
        <BackArrow onClick={() => navigate(-1)} />
        <h1 className={styles.title}>Itinerary to go to Switzerland</h1>
        <div style={{ width: 30 }} />
      </div>
      <Tripmap />
    </div>
  );
};

export default GPS;
