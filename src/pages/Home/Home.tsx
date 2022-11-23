import { TripCard, BottomBar } from "components";
import styles from "./Home.module.scss";
const Home = () => {
  return (
    <div className={styles.container}>
      <p>Home</p>
      <TripCard
        trip={{
          place: "Italy",
          image:
            "https://66.media.tumblr.com/8b69cdde47aa952e4176b4200052abf4/tumblr_o51p7mFFF21qho82wo1_1280.jpg",
          likeNumber: 3,
          commentNumber: 3,
        }}
      />
      <BottomBar />
    </div>
  );
};

export default Home;
