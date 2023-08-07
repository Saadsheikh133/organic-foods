import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const SingleCard = ({ food }) => {
    const { name, price, img, image, rating } = food;
    return (
        <div>
            <div className="card card-compact h-96 bg-base-100 shadow-xl">
                <figure><img className="h-96 object-contain" src={img || image} alt="Foods" /></figure>
                <div className="card-body text-center">
                    <div className='flex justify-center'>
                        <Rating
                            style={{ maxWidth: 100 }}
                            value={rating}
                            readOnly
                        />
                   </div>
                    <h2 className="card-title font-semibold justify-center">{name}</h2>
                    <p className="text-red-500 font-bold text-2xl">${price}</p>
                    <div className="card-actions justify-center">
                        <button className="btn btn-sm bg-orange-400 text-white hover:btn-ghost hover:text-orange-400">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleCard;