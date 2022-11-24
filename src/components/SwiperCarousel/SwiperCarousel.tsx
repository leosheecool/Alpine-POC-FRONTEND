import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";

import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";

import styles from "./SwiperCarousel.module.scss";

type Props = {
  data: { title: string; subtitle: string };
  children: React.ReactNode[];
};

const SwiperCarousel = ({ data, children }: Props) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{data.title}</h2>
      <p className={styles.description}>{data.subtitle}</p>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        slidesPerView={"auto"}
        modules={[Pagination, Navigation, Autoplay]}
        className={styles.swiper}
        autoplay={{ delay: 5000 }}
        spaceBetween={30}
      >
        {children.map((child, index) => (
          <SwiperSlide className={styles.slide} key={index}>
            {child}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperCarousel;
