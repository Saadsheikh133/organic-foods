import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure/useAxiosSecure";

const image_upload_token = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN;

const AddFood = () => {

    const { user } = useContext(AuthContext);
    const { register, handleSubmit, reset } = useForm();
    const [axiosSecure] = useAxiosSecure();

    const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_upload_token}`;

    const onSubmit = data => {
        const formData = new FormData();
        formData.append("image", data.image[0])
        fetch(image_hosting_url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                if (imgResponse) {
                    const imgURL = imgResponse.data.display_url;
                    const { name, price, quantity, category, admin, email, rating } = data;
                    const newItem = { name, price: parseFloat(price), category, image: imgURL, quantity: parseFloat(quantity), admin, email, rating }
                    axiosSecure.post('/addFood', newItem)
                        .then(data => {
                            if (data.data.insertedId) {
                                reset();
                                Swal.fire({
                                    position: 'top',
                                    icon: 'success',
                                    title: 'Food added successfully',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                            }
                        })
                }
        })
        
    }

    return (
        <div className="">
            <div className="hero min-h-screen bg-base-200 w-full">
                <div className="hero-content flex-col w-full">
                    <div className="text-center">
                        <h1 className="text-5xl mt-20 mb-4 font-bold">Add a Food</h1>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Food Name</span>
                                </label>
                                <input type="text" placeholder="name" className="input input-bordered" {...register("name", { required: true, maxLength: 80 })} />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Admin Name</span>
                                </label>
                                <input type="text" value={user?.displayName} readOnly placeholder="admin name" className="input input-bordered" {...register("admin", { required: true, maxLength: 80 })} />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Admin Email</span>
                                </label>
                                <input type="email" readOnly value={user?.email} placeholder="admin email" className="input input-bordered" {...register("email", { required: true, maxLength: 80 })} />
                            </div>
                            <div className="flex justify-evenly">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Quantity</span>
                                    </label>
                                    <input type="number" placeholder="quantity" className="input input-bordered" {...register("quantity", { required: true, maxLength: 80 })} />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Price</span>
                                    </label>
                                    <input type="number" placeholder="price" className="input input-bordered" {...register("price", { required: true, maxLength: 80 })} />
                                </div>
                            </div>
                            <div className="flex justify-evenly gap-2">
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Category</span>
                                    </label>
                                    <select className='px-2 w-full input input-bordered' defaultValue="Pick One" {...register("category", { required: true })}>
                                        <option disabled >Pick One</option>
                                        <option value="nutts">Nutt & Seeds</option>
                                        <option value="fruits">Fresh Fruits</option>
                                        <option value="dried">Dried</option>
                                        <option value="food">Food</option>
                                    </select>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Rating</span>
                                    </label>
                                    <input type="number" placeholder="rating" className="input input-bordered" {...register("rating", { required: true, maxLength: 20 })} />
                                </div>
                           </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Food Image</span>
                                </label>
                                <input type="file" placeholder="class image" className="input input-bordered" {...register("image", { required: true, maxLength: 80 })} />
                            </div>

                            <div className="form-control mt-6">
                                <input className="btn bg-orange-500 transition-all hover:text-orange-400 text-white" type="submit" value="Add Food" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddFood;