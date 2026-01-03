import React from 'react';
import { FaBell } from "react-icons/fa";
const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm md:px-5 lg:px-10">
                <div className="flex-1">
                    <a className="font-semibold text-xl">Action<span className='text-yellow-300 font-black'>Gallery</span></a>
                </div>
                <div className="flex-none">
                    <div className="dropdown dropdown-end pr-5">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <div className="indicator">
                        <div><FaBell size={20} /></div>
                        <span className="badge badge-sm indicator-item">8</span>
                        </div>
                    </div>
                    <div
                        tabIndex={0}
                        className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow">
                        <div className="card-body">
                        <span className="text-lg font-bold">8 Items</span>
                        <span className="text-info">Subtotal: $999</span>
                        <div className="card-actions">
                            <button className="btn btn-primary btn-block">View cart</button>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                        <img
                            alt="Tailwind CSS Navbar component"
                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </div>
                    </div>
                </div>
                </div>
        </div>
    );
};

export default Navbar;