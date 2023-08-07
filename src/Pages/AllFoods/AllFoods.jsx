import { useEffect, useState } from "react";
import FoodCard from "./FoodCard/FoodCard";


const AllFoods = () => {
    const [AllFoods, setAllFoods] = useState([]);
    const [show, setShow] = useState(true);


    useEffect(() => {
        fetch("http://localhost:5000/freshFoods")
            .then(res => res.json())
        .then(data => setAllFoods(data))
    },[])

    return (
        <div className="bg-slate-200">
            <h2 className="lg:text-5xl text-2xl font-bold text-center pt-24">All Collection Are Here!</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 py-10 px-8">
                {
                    AllFoods.map(singleFood => <FoodCard key={singleFood._id} singleFood={singleFood}></FoodCard>)
                }
            </div>
            <div className="py-4 text-center">
                <button onClick={() => setShow(!show)} className="btn bg-orange-500 text-white hover:btn-ghost">Show All</button>
            </div>
        </div>
    );
};

export default AllFoods;