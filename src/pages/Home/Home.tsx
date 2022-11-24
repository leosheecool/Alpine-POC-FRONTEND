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
        <SwiperCarousel
          data={{ title: "News", subtitle: "Catch up with Alpine" }}
        >
          {mockedData.news.map((article) => (
            <NewsCard article={article} />
          ))}
        </SwiperCarousel>
        <SwiperCarousel
          data={{ title: "Trips", subtitle: "Experience a road trip" }}
        >
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
