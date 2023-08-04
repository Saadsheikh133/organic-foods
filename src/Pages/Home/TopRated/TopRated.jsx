import { useEffect, useState } from 'react';
import SingleCard from './singleCard/SingleCard';
// import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Navigation } from 'swiper/modules';

const TopRated = () => {
    const [foods, setFoods] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/freshFoods')
            .then(res => res.json())
            .then(data => setFoods(data))
    }, []);

    return (
        <div>
            <h2 className='text-4xl font-bold mb-20 text-orange-500 text-center'>Deal of The Week</h2>
            <div>
                <Swiper
                    // slidesPerView={4}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 30,
                        },
                    }}
                    centeredSlides={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    loop
                    navigation={true}
                    modules={[Autoplay, Navigation]}
                    className="mySwiper"
                >
                   
                    {foods.map(food => <SwiperSlide key={food._id}><SingleCard food={food}></SingleCard></SwiperSlide>)}
                </Swiper>
            </div>
        </div>
    );
};

export default TopRated;