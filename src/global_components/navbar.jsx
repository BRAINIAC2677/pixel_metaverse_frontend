import { Link } from "react-router-dom";

import React from 'react';

const Navbar = () => {
    return (
        <nav className="bg-gray-900">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <span className="text-lg font-bold text-white">Pixel Metaverse</span>
                    </div>
                    <div className="hidden md:block">
                        <div className="flex items-baseline ml-10 space-x-4">
                            <div
                                className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
                            >
                                <Link to="/">Home</Link>
                            </div>
                            <div
                                className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
                            >
                                <Link to="/marketplace">Marketplace</Link>
                            </div>
                            <div
                                className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
                            >
                                <Link to="/artists">artists</Link>
                            </div>
                            <div
                                className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
                            >
                                <Link to="/auction">auction</Link>
                            </div>
                            <div
                                className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
                            >
                                <Link to="/order">order</Link>
                            </div>
                            <div
                                className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
                            >
                                <Link to="/signup">signup</Link>
                            </div>




                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
