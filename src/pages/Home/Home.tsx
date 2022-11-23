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
import Header from "components/Header/Header";

const Home = () => {
  const mockedData = {
    trips: [
      {
        place: "Paris",
        image:
          "https://66.media.tumblr.com/8b69cdde47aa952e4176b4200052abf4/tumblr_o51p7mFFF21qho82wo1_1280.jpg",
        likeNumber: 100,
        commentNumber: 10,
        isFavorite: true,
      },
      {
        place: "London",
        image:
          "https://66.media.tumblr.com/8b69cdde47aa952e4176b4200052abf4/tumblr_o51p7mFFF21qho82wo1_1280.jpg",
        likeNumber: 100,
        commentNumber: 10,
        isFavorite: true,
      },
      {
        place: "London",
        image:
          "https://66.media.tumblr.com/8b69cdde47aa952e4176b4200052abf4/tumblr_o51p7mFFF21qho82wo1_1280.jpg",
        likeNumber: 100,
        commentNumber: 10,
        isFavorite: true,
      },
      {
        place: "London",
        image:
          "https://66.media.tumblr.com/8b69cdde47aa952e4176b4200052abf4/tumblr_o51p7mFFF21qho82wo1_1280.jpg",
        likeNumber: 100,
        commentNumber: 10,
        isFavorite: true,
      },
      {
        place: "London",
        image:
          "https://66.media.tumblr.com/8b69cdde47aa952e4176b4200052abf4/tumblr_o51p7mFFF21qho82wo1_1280.jpg",
        likeNumber: 100,
        commentNumber: 10,
        isFavorite: true,
      },
      {
        place: "London",
        image:
          "https://66.media.tumblr.com/8b69cdde47aa952e4176b4200052abf4/tumblr_o51p7mFFF21qho82wo1_1280.jpg",
        likeNumber: 100,
        commentNumber: 10,
        isFavorite: true,
      },
      {
        place: "London",
        image:
          "https://66.media.tumblr.com/8b69cdde47aa952e4176b4200052abf4/tumblr_o51p7mFFF21qho82wo1_1280.jpg",
        likeNumber: 100,
        commentNumber: 10,
        isFavorite: true,
      },
      {
        place: "London",
        image:
          "https://66.media.tumblr.com/8b69cdde47aa952e4176b4200052abf4/tumblr_o51p7mFFF21qho82wo1_1280.jpg",
        likeNumber: 100,
        commentNumber: 10,
        isFavorite: true,
      },
    ],
    news: [
      {
        title:
          "CEO Laurent Rossi shares the outlooks on the future of the alpine brand future",
        image:
          "https://france3-regions.francetvinfo.fr/image/mRBqCmpgMQ9feqWKvxo7zqUVEtY/600x400/regions/2020/06/09/5edf1c79ce34d_000_m55xb-2935921.jpg",
        authorPicture: image_laurent_rossi,
      },
      {
        title: "Programmation du mondial de l'auto",
        image: image_f1_retro,
        authorPicture: image_laurent_rossi,
      },
      {
        title: "Rassemblement des conducteurs de A110",
        image: image_f1_racing,
        authorPicture: image_alonso,
      },
    ],
  };

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
