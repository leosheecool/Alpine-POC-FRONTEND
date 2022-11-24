import styles from "./Trips.module.scss";
import { BottomBar } from "components";
import Tripmap from "pages/Tripmap/Tripmap";
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
