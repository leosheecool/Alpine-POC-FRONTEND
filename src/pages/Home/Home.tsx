import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";

import {
  BottomBar,
  TripCard,
  NewsCard,
  SwiperCarousel,
  Header,
} from "components";
import styles from "./Home.module.scss";
import cn from "classnames";
import { mockedData } from "mocked/trip";

const Home = () => {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <h1 className={cn(styles.title, styles.mainTitle)}>Home</h1>
        <SwiperCarousel
          data={{ title: "News", subtitle: "Catch up with Alpine" }}
        >
          {mockedData.news.map((article) => (
            <NewsCard article={article} key={article.image + article.title} />
          ))}
        </SwiperCarousel>
        <SwiperCarousel
          data={{ title: "Trips", subtitle: "Experience a road trip" }}
        >
          {mockedData.trips.map((trip) => (
            <TripCard trip={trip} key={trip.id} />
          ))}
        </SwiperCarousel>
        <BottomBar />
      </div>
    </div>
  );
};

export default Home;
