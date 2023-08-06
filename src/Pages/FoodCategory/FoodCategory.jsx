

const FoodCategory = ({ food }) => {
    console.log(food)
    const { image, name, price, quantity, category } = food;
    return (
        <div className="card card-compact h-96 bg-base-100 shadow-xl">
            <figure><img className="h-96 object-contain" src={ image} alt="Foods" /></figure>
            <div className="card-body text-center">
                <h2 className="card-title font-semibold justify-center">{name}</h2>
                <p className="text-red-500 font-bold text-2xl">${price}</p>
                <p className="text-xl">Category: {category}</p>
                <p className="text-xl">Quantity: {quantity}</p>
                <div className="card-actions justify-center">
                    <button className="btn btn-sm bg-orange-400 text-white hover:text-orange-400">view details</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCategory;