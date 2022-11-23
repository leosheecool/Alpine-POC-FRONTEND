import styles from "./Trips.module.scss";
import { BottomBar } from "components";
const Trips = () => {
  return (
    <div className={styles.Container}>
      <p>Trips</p>
      <BottomBar />
    </div>
  );
};

export default Trips;
