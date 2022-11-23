import styles from "./Home.module.scss";
import { BottomBar } from "components";

const Home = () => {
  return (
    <div className={styles.container}>
      <p>Home</p>
      <BottomBar />
    </div>
  );
};

export default Home;
