import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const FoodCategory = ({ food }) => {
    console.log(food)
    const { image, name, price, quantity, category, rating } = food;
    return (
        <div className="card card-compact h-96 bg-base-100 shadow-xl">
            <figure><img className="h-full" src={ image} alt="Foods" /></figure>
            <div className="card-body text-center">
                <h2 className="card-title font-semibold justify-center">{name}</h2>
                <p className="text-red-500 font-bold text-2xl">${price}</p>
                <p className="text-xl">Category: {category}</p>
                <p className="text-xl">Quantity: {quantity}</p>
                <div className='flex justify-center'>
                    <Rating
                        style={{ maxWidth: 100 }}
                        value={rating}
                        readOnly
                    />
                </div>
                <div className="card-actions justify-center">
                    <button className="btn btn-sm bg-orange-400 text-white hover:text-orange-400">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCategory;