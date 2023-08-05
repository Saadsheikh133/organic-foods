

const SingleCard = ({ food }) => {
    const { name, price, img, rating } = food;
    return (
        <div>
            <div className="card card-compact h-96 bg-base-100 shadow-xl">
                <figure><img className="h-96 object-contain" src={ img } alt="Shoes" /></figure>
                <div className="card-body text-center">
                    <p>{ rating }</p>
                    <h2 className="card-title font-semibold justify-center">{ name }</h2>
                    <p className="text-red-500 font-bold text-2xl">${ price }</p>
                    <div className="card-actions justify-center">
                        <button className="btn btn-sm bg-orange-400 hover:bg-slate-400 hover:text-orange-400">view details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleCard;