import { LiaAppleAltSolid } from "react-icons/lia";

const FoodRevolution = () => {
    return (
        <div className="">
            <h5 className="text-center font-semibold uppercase">Healthy food</h5>
            <h2 className="text-center text-3xl text-orange-500 font-bold mb-4">THE ORGANIC FOOD REVOLUTION</h2>
            <p className="text-center">
                Organic foods are produced using methods that do not involve synthetic pesticides, herbicides, <br /> fertilizers, or other artificial chemicals.
            </p>
            <div className="grid grid-cols-1 my-20 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-6">
                <div className="bg-slate-700 text-white p-4">
                    <LiaAppleAltSolid size={50} className="inline bg-orange-300 px-2 mr-2"></LiaAppleAltSolid>
                    <h4 className="text-3xl font-bold inline">01</h4>
                    <h2 className="text-2xl my-2 font-bold">HEALTHY CATERING</h2>
                    <p>Fruits and vegetables are packed with vitamins, minerals, and fiber, making them an...</p>
                    <button className="btn btn-sm mt-4 bg-orange-400 hover:btn-ghost hover:text-orange-400 border-none ">try the diet</button>
                </div>
                <div className="bg-slate-400 text-white p-4">
                    <LiaAppleAltSolid size={50} className="inline bg-slate-600 px-2 mr-2"></LiaAppleAltSolid>
                    <h4 className="text-3xl font-bold inline">02</h4>
                    <h2 className="text-2xl my-2 font-bold">TESTED BY CLIENTS</h2>
                    <p>Whole grains are a good source of fiber, which can help you feel full and satisfied after eating...</p>
                    <button className="btn btn-sm mt-4 bg-orange-400 hover:btn-ghost hover:text-orange-400 border-none ">try the diet</button>
                </div>
                <div className="bg-slate-700 text-white p-4">
                    <LiaAppleAltSolid size={50} className="inline bg-orange-300 px-2 mr-2"></LiaAppleAltSolid>
                    <h4 className="text-3xl font-bold inline">03</h4>
                    <h2 className="text-2xl my-2 font-bold">EXPERIENCED TEAM</h2>
                    <p>Lean protein sources include chicken, fish, beans, and tofu. Protein helps build and repair...</p>
                    <button className="btn btn-sm mt-4 bg-orange-400 hover:btn-ghost hover:text-orange-400 border-none ">try the diet</button>
                </div>
                <div className="bg-slate-400 text-white p-4">
                    <LiaAppleAltSolid size={50} className="inline bg-slate-700 px-2 mr-2"></LiaAppleAltSolid>
                    <h4 className="text-3xl font-bold inline">04</h4>
                    <h2 className="text-2xl my-2 font-bold">100% SATISFACTION</h2>
                    <p>Healthy fats, such as those found in olive oil, nuts, and seeds, can help improve heart...</p>
                    <button className="btn btn-sm mt-4 bg-orange-400 hover:btn-ghost hover:text-orange-400 border-none ">try the diet</button>
                </div>
           </div>
        </div>
    );
};

export default FoodRevolution;