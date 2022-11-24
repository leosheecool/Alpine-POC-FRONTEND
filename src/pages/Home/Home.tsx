import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";

import {
  BottomBar,
  TripCard,
  NewsCard,
  SwiperCarousel,
  Header,
  Separator,
} from "components";
import styles from "./Home.module.scss";
import { mockedData } from "mocked/trip";

const Home = () => {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <SwiperCarousel
          data={{ title: "News", subtitle: "Catch up with Alpine" }}
        >
          {mockedData.news.map((article) => (
            <NewsCard article={article} key={article.image + article.title} />
          ))}
        </SwiperCarousel>
        <Separator />
        <h2 className={styles.title}>Trips</h2>
        <p className={styles.description}>Experience a road trip</p>
        {mockedData.trips.map((trip) => (
          <TripCard trip={trip} key={trip.id} />
        ))}
        {/* <SwiperCarousel
          data={{ title: "Trips", subtitle: "Experience a road trip" }}
        >
        </SwiperCarousel> */}
        <BottomBar />
      </div>
    </div>
  );
};

export default Home;
