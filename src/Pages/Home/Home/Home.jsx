import Banner from "../Banner/Banner";
import BestFood from "../BestFood/BestFood";
import FoodRevolution from "../FoodRevolution/FoodRevolution";
import TopRated from "../TopRated/TopRated";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FoodRevolution></FoodRevolution>
            <TopRated></TopRated>
            <BestFood></BestFood>
        </div>
    );
};

export default Home;