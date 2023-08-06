import { useEffect, useState } from "react";
import FoodCategory from "../../FoodCategory/FoodCategory";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Navigation } from 'swiper/modules';

const BestFood = () => {

    const [foods, setFoods] = useState([]);
    const [category, setCategory] = useState("nutts");

    useEffect(() => {
        fetch(`http://localhost:5000/freshFoods?category=${category}`)
            .then(res => res.json())
            .then(data => setFoods(data))
    }, [category]);

    return (
        <div className="my-20">
            <h2 className="text-4xl font-bold text-center mb-4">Todays Best Offers</h2>
            <h4 className="text-2xl font-bold text-orange-500 text-center mb-10">Do Not Miss!</h4>
            <div className="text-right mb-10">
                <button className="btn bg-orange-500 hover:text-orange-400 text-white mr-4" onClick={() => setCategory("nutts")}>Nutts</button>
                <button className="btn bg-orange-500 hover:text-orange-400 text-white mr-4" onClick={() => setCategory("fruits")}>Fruits</button>
                <button className="btn bg-orange-500 hover:text-orange-400 text-white mr-4" onClick={() => setCategory("dried")}>Dried</button>
                <button className="btn bg-orange-500 hover:text-orange-400 text-white mr-4" onClick={() => setCategory("food")}>Foods</button>
            </div>
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

                    {foods.map(food => <SwiperSlide key={food._id}><FoodCategory food={food}></FoodCategory></SwiperSlide>)}
                </Swiper>
            </div>
        </div>
    );
};

export default BestFood;