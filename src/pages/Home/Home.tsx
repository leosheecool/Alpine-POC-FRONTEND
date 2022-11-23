import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";

import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";

import { TripCard } from "components";
import styles from "./Home.module.scss";
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
      <p>Home</p>
      <div className={styles.card}>
        <h2 className={styles.cardTitle}>Trips</h2>
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
