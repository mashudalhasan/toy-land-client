import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper";
import "swiper/css";
import "swiper/css/effect-cards";

const Gallery = () => {
  return (
    <div className="my-10">
        <h2 className="text-center text-3xl font-semibold mb-10">Gallery</h2>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper w-4/5 md:w-1/2 h-1/2"
      >
        <SwiperSlide className=" rounded-lg shadow">
          <img
            className="w-full h-64 md:h-80 lg:h-96 object-cover"
            src="https://cf.shopee.ph/file/be956f3fc34989f2db9c0db50b69c9f5"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className=" rounded-lg shadow">
          <img
            className="w-full h-64 md:h-80 lg:h-96 object-cover"
            src="https://m.media-amazon.com/images/I/81mmAGbxGNL.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className=" rounded-lg shadow">
          <img
            className="w-full h-64 md:h-80 lg:h-96 object-cover"
            src="https://www.momjunction.com/wp-content/uploads/product-images/daron-spirit-airlines-single-die-cast-plane_afl2802.jpg.webp"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Gallery;
