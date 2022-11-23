import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";

import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";

import styles from "./SwiperCarousel.module.scss";

type Props = {
  title: string;
  children: React.ReactNode[];
};

const SwiperCarousel = ({ title, children }: Props) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>Trips</h2>
      <p className={styles.description}>{title}</p>
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
        {children.map((child, index) => (
          <SwiperSlide className={styles.slide}>{child}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperCarousel;
