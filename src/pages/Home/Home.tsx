import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";

import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";

import { BottomBar, TripCard } from "components";
import styles from "./Home.module.scss";
import cn from "classnames";
import Header from "components/Header/Header";

const Home = () => {
  const mockedData = [
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
  ];

  return (
    <div className={styles.container}>
      <Header />
      <h1 className={cn(styles.title, styles.mainTitle)}>Home</h1>
      <div className={styles.card}>
        <h2 className={styles.title}>Trips</h2>
        <p className={styles.description}>
          Here you can explore the popular trips
        </p>
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          slidesPerView={"auto"}
          // navigation={true}
          modules={[Pagination, Navigation, Autoplay]}
          className={styles.swiper}
          autoplay={{ delay: 5000 }}
          spaceBetween={30}
        >
          {mockedData.map((trip, index) => (
            <SwiperSlide className={styles.slide} key={trip.place + index}>
              <TripCard trip={trip} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <BottomBar />
    </div>
  );
};

export default Home;
