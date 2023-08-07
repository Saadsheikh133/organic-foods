import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure/useAxiosSecure";
import Swal from "sweetalert2";


const ManageUser = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/findUsers')
        console.log(res.data)
        return res.data;
    });

    const handleUserRoleAdmin = (user) => {
        axiosSecure.patch(`/users/admin/${user._id}`)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top',
                        icon: 'success',
                        title: `${user.name} is admin now`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            });
    };

    return (
        <div>
            <h2 className="text-5xl text-center font-bold mb-20 pt-20">Manage User</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name And Email</th>
                            <th>Current Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white">
                        {
                            users?.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>
                                    {user.name}
                                    <br />
                                    {user.email}
                                </td>
                                <td>{user.role}</td>
                                <td>
                                    <button disabled={user.role === 'admin'} onClick={() => handleUserRoleAdmin(user)} className="btn btn-info text-white mr-2 btn-sm">make admin</button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUser;