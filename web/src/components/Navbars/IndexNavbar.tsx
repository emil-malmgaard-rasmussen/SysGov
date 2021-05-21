/*eslint-disable*/
import React from "react";
import {Link} from "react-router-dom";
import IndexDropdown from '../Dropdowns/IndexDropdown';

const IndexNavbar: React.FC = () => {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    return (
        <>
            <nav
                className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white shadow">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <Link
                            to="/"
                            className="text-gray-800 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase">
                            SysGov
                        </Link>
                        <button
                            className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <i className="fas fa-bars"/>
                        </button>
                    </div>
                    <div
                        className={
                            "lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none" +
                            (navbarOpen ? " block" : " hidden")
                        }
                        id="example-navbar-warning"
                    >

                        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                            <li className="flex items-center">
                                <Link
                                    to="/auth/login"
                                    className="hover:text-gray-600 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                                >
                                    <span className="inline-block ml-2">Om os</span>
                                </Link>
                            </li>
                            <li className="flex items-center">
                                <Link
                                    to="/auth/login"
                                    className="hover:text-gray-600 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                                >
                                    <span className="inline-block ml-2">Features</span>
                                </Link>
                            </li>
                            <li className="flex items-center">
                                <Link
                                    to="/auth/login"
                                    className="hover:text-gray-600 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                                >
                                    <span className="inline-block ml-2">Priser</span>
                                </Link>
                            </li>
                            <li className="flex items-center">
                                <Link
                                    to="/auth/login"
                                    className="hover:text-gray-600 text-gray-800 px-3 py-4 mr-16 lg:py-2 flex items-center text-xs uppercase font-bold"
                                >
                                    <span className="inline-block ml-2">Kontakt</span>
                                </Link>
                            </li>
                            <li className="flex items-center">
                                <Link
                                    to="/auth/login"
                                    className="hover:text-gray-600 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                                >
                                    <span className="inline-block ml-2">Login</span>
                                </Link>
                            </li>
                            <li className="flex items-center">
                                <Link
                                    to="/auth/register"
                                    className="hover:text-gray-600 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                                >
                                    <span className="inline-block ml-2">Sign up</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default IndexNavbar
