import image_alonso from "assets/images/alpine_alonso.png";
import image_laurent_rossi from "assets/images/laurent_rossi_alpine.png";
import image_f1_racing from "assets/images/F1_racing.png";
import image_f1_retro from "assets/images/Alpine_retro.jpg";

import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";

import { BottomBar, TripCard, NewsCard, SwiperCarousel } from "components";
import styles from "./Home.module.scss";
import cn from "classnames";
import { mockedData } from "mocked/trip";

const Home = () => {
  return (
    <div>
      <div className={styles.container}>
        <h1 className={cn(styles.title, styles.mainTitle)}>Home</h1>
        <SwiperCarousel title="Catch up with Alpine">
          {mockedData.news.map((article) => (
            <NewsCard article={article} />
          ))}
        </SwiperCarousel>
        <SwiperCarousel title="Experience a road trip">
          {mockedData.trips.map((trip) => (
            <TripCard trip={trip} />
          ))}
        </SwiperCarousel>
        <BottomBar />
      </div>
    </div>
  );
};

export default Home;
