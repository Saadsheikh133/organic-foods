import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error.message))
    }

    const items = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link>Products</Link></li>
        <li><Link to="/login">Login</Link></li>
    </>

    return (
        <div className="">
            <div className="navbar text-white glass fixed z-10">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow glass rounded-box w-52">
                            {items}
                        </ul>
                    </div>
                    <a className="normal-case lg:text-4xl font-bold text-xl">Healthy Organic foods</a>
                </div>
                <div className="navbar-center hidden lg:flex ">
                    <ul className="menu hover:text-orange-500 text-2xl menu-horizontal px-1">
                       {items}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ?
                            <>
                                <div className="tooltip tooltip-bottom" data-tip={user?.displayName}>
                                    <img className='rounded-full h-14 mr-2' src={user?.photoURL} alt="" />
                                </div>
                                <button onClick={handleLogOut} className='btn btn-primary'>Log Out</button>
                            </>
                            :
                            <>

                                <button className='btn btn-primary'><Link to="/login">Login</Link></button>
                            </>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;