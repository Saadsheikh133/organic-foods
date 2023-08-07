import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'


const FoodCard = ({ singleFood }) => {
    
    const { image, img, quantity, rating, name, price } = singleFood;
    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl h-full">
                <figure><img className="w-72 p-2 object-contain" src={img || image} alt="Album" /></figure>
                <div className="divider lg:divider-horizontal"></div> 
                <div className="card-body">
                    <h2 className="card-title text-2xl">{ name }</h2>
                    <p className="text-2xl text-red-400 font-bold">${ price }</p>
                    <p className="text-xl">Quantity: { quantity }</p>
                    <div className='flex items-center justify-start py-3'>
                        <p className="font-normal">{rating}</p>
                        <Rating
                            style={{ maxWidth: 140 }}
                            value={rating}
                            readOnly
                        />
                    </div>
                    <div className="card-actions justify-end">
                        <button className="btn bg-orange-500 text-white hover:btn-ghost hover:text-orange-400">Add To Cart</button>
                        <button className="btn bg-orange-500 text-white hover:btn-ghost hover:text-orange-400 px-6">Purchase</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;