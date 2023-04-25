import './App.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Scrollbar, Navigation } from 'swiper';
import 'swiper/swiper-bundle.min.css';

function App() {
  return (
    <div className="App">
      <Swiper
        modules={[Autoplay, Pagination, Scrollbar, Navigation]}
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        // this is give you that scrollbar to move the element
        spaceBetween={10}
        slidesPerView={1}
        loop={true}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
          // enable auto sliding even when user interacts with the slider
        }}>
        <SwiperSlide className="slide">
          <img src="https://picsum.photos/1000/500" alt="" />
        </SwiperSlide>
        <SwiperSlide className="slide">
          <img src="https://picsum.photos/1000/501" alt="" />
        </SwiperSlide>
        <SwiperSlide className="slide">
          <img src="https://picsum.photos/1000/502" alt="" />
        </SwiperSlide>
        <SwiperSlide className="slide">
          <img src="https://picsum.photos/1000/503" alt="" />
        </SwiperSlide>
        <SwiperSlide className="slide">
          <img src="https://picsum.photos/1000/504" alt="" />
        </SwiperSlide>
        <SwiperSlide className="slide">
          <img src="https://picsum.photos/1000/505" alt="" />
        </SwiperSlide>
        <SwiperSlide className="slide">
          <img src="https://picsum.photos/1000/506" alt="" />
        </SwiperSlide>
        <SwiperSlide className="slide">
          <img src="https://picsum.photos/1000/507" alt="" />
        </SwiperSlide>
        <div
          style={{
            color: '#ffffff',
            marginLeft: '25px',
            fontSize: '12px',
            height: '100px',
            width: '100px',
            background: 'yellow',
            position: 'absolute',
            top: '50px',
            right: '100px',
          }}
          className="swiper-button-next"></div>
        <div
          style={{
            color: '#ffffff',
            marginRight: '25px',
            fontSize: '12px',
            height: '100px',
            width: '100px',
            background: 'yellow',
          }}
          className="swiper-button-prev"></div>
        <div class="swiper-pagination"></div>
      </Swiper>
    </div>
  );
}

export default App;
