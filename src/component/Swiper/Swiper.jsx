import { Container, Row } from 'react-bootstrap';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// import required modules
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';

export default function Slider() {
  return (
    <>
      <Container fluid>
        <Row>
          <Swiper
            spaceBetween={30}
            effect={'fade'}
            navigation={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[EffectFade, Navigation, Pagination, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img className='img' src='image\Ghost-orange.png' />
              <div className="card-img-overlay text-white">
              <h5 className="card-title">GHOST</h5>
            </div>
            </SwiperSlide>
            <SwiperSlide>
              <img className='img' src="image\ghost-newn.png" />
              <div className="card-img-overlay text-white">
              <h5 className="card-title">GHOST</h5>
            </div>
            </SwiperSlide>
            <SwiperSlide>
              <img className='img' src="image\Ghost-blue.png" />
              <div className="card-img-overlay text-white">
              <h5 className="card-title">GHOST</h5>
            </div>
            </SwiperSlide>
           
          </Swiper>
        </Row>
      </Container>
    </>
  );
}