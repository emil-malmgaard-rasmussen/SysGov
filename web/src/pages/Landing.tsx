import React from 'react';
import PatternImg from 'assets/img/pattern_react.png';
import DocumentationImg from 'assets/img/documentation.png';
import IndexNavbar from 'components/Navbars/IndexNavbar';
import Slider from 'components/Slider/Slider';
import Footer from 'components/Footers/Footer';
import GoogleMap from 'components/Maps/GoogleMap';
import {Link} from 'react-router-dom';


const Landing: React.FC = () => {
    const images = [
        'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
        'https://images.unsplash.com/photo-1470341223622-1019832be824?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2288&q=80',
        'https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2094&q=80',
        'https://images.unsplash.com/photo-1534161308652-fdfcf10f62c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2174&q=80'
    ]

    return (
        <>
            <IndexNavbar/>
            <section className="header relative pt-16 items-center flex h-screen max-h-860-px">
                <div className="container mx-auto items-center flex flex-wrap">
                    <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
                        <div className="pt-32 sm:pt-0">
                            <h2 className="font-semibold text-4xl text-gray-700">
                                Skal din virksomhed ISO certificeres?
                            </h2>
                            <p className="mt-4 text-lg leading-relaxed text-gray-600">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis commodo felis, eget eleifend elit. Proin egestas sem vitae mattis eleifend. Etiam elit ligula, pellentesque interdum dolor sit amet, fringilla tincidunt libero.
                            </p>
                            <div className="mt-12">
                                <a href="#"
                                   target="_blank"
                                   className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blue-500 active:bg-blue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                                >
                                    Opret profil
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <img
                    className="absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860px"
                    src={PatternImg}
                    alt="..."
                />
            </section>

            <section className="mt-48 md:mt-40 pb-40 relative bg-gray-200">
                <div
                    className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
                    style={{transform: "translateZ(0)"}}
                >
                    <svg
                        className="absolute bottom-0 overflow-hidden"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none"
                        version="1.1"
                        viewBox="0 0 2560 100"
                        x="0"
                        y="0"
                    >
                        <polygon
                            className="text-gray-200 fill-current"
                            points="2560 0 2560 100 0 100"
                        />
                    </svg>
                </div>
                <div className="container mx-auto">
                    <div className="flex flex-wrap items-center">
                        <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-32">
                            <div
                                className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-blue-600">
                                <img
                                    alt="..."
                                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
                                    className="w-full align-middle rounded-t-lg"
                                />
                                <blockquote className="relative p-8 mb-4">

                                    <h4 className="text-xl font-bold text-white">
                                        Sådan gør du
                                    </h4>
                                    <p className="text-md font-light mt-2 text-white">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis commodo felis, eget eleifend elit. Proin egestas sem vitae mattis eleifend. Etiam elit ligula, pellentesque interdum dolor sit amet, fringilla tincidunt libero. Morbi pretium accumsan ligula, eget pretium risus viverra et. Quisque imperdiet, odio non fringilla tempus, metus felis tempus ligula, vel luctus enim elit id nisi. Vestibulum vitae mi leo. Duis quis metus tristique, tincidunt ex sed, aliquam est. In rhoncus odio id arcu mattis placerat. Nulla ac justo ante. Integer nec est bibendum, finibus quam a, mattis ligula.
                                    </p>
                                </blockquote>
                            </div>
                        </div>

                        <div className="w-full md:w-6/12 px-4">
                            <div className="flex flex-wrap">
                                <div className="w-full md:w-6/12 px-4">
                                    <div className="relative flex flex-col mt-4">
                                        <div className="px-4 py-5 flex-auto">
                                            <div
                                                className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                                                1
                                            </div>
                                            <h6 className="text-xl mb-1 font-semibold">
                                                Opret en profil
                                            </h6>
                                            <p className="mb-4 text-gray-600">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis commodo felis, eget eleifend elit. Proin egestas sem vitae mattis eleifend. Etiam elit ligula, pellentesque interdum dolor sit amet, fringilla tincidunt libero.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="relative flex flex-col min-w-0">
                                        <div className="px-4 py-5 flex-auto">
                                            <div
                                                className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                                                3
                                            </div>
                                            <h6 className="text-xl mb-1 font-semibold">
                                                Opret systemejere
                                            </h6>
                                            <p className="mb-4 text-gray-600">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis commodo felis, eget eleifend elit. Proin egestas sem vitae mattis eleifend. Etiam elit ligula, pellentesque interdum dolor sit amet, fringilla tincidunt libero.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full md:w-6/12 px-4">
                                    <div className="relative flex flex-col min-w-0 mt-4">
                                        <div className="px-4 py-5 flex-auto">
                                            <div
                                                className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                                                2
                                            </div>
                                            <h6 className="text-xl mb-1 font-semibold">
                                                Opret dine systemadministratore
                                            </h6>
                                            <p className="mb-4 text-gray-600">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis commodo felis, eget eleifend elit. Proin egestas sem vitae mattis eleifend. Etiam elit ligula, pellentesque interdum dolor sit amet, fringilla tincidunt libero.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="relative flex flex-col min-w-0">
                                        <div className="px-4 py-5 flex-auto">
                                            <div
                                                className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                                                4
                                            </div>
                                            <h6 className="text-xl mb-1 font-semibold">
                                                Udfyld vores spørgeskema
                                            </h6>
                                            <p className="mb-4 text-gray-600">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                Fusce sit amet suscipit tortor.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container mx-auto px-4 pb-32 pt-48">
                    <div className="items-center flex flex-wrap">
                        <div className="w-full md:w-5/12 ml-auto px-12 md:px-4">
                            <div className="md:pr-12">
                                <h3 className="text-3xl font-semibold">
                                    Samarbejdspartnere
                                </h3>
                                <p className="mt-4 text-lg leading-relaxed text-gray-600">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis commodo felis, eget eleifend elit. Proin egestas sem vitae mattis eleifend. Etiam elit ligula, pellentesque interdum dolor sit amet, fringilla tincidunt libero. Morbi pretium accumsan ligula, eget pretium risus viverra et. Quisque imperdiet, odio non fringilla tempus, metus felis tempus ligula, vel luctus enim elit id nisi. Vestibulum vitae mi leo. Duis quis metus tristique, tincidunt ex sed, aliquam est. In rhoncus odio id arcu mattis placerat. Nulla ac justo ante. Integer nec est bibendum, finibus quam a, mattis ligula.
                                    Læs mere om vores samarbejdspartnere <Link href={""} className="text-blue-400">HER</Link>.
                                </p>
                                <ul className="list-none mt-6">
                                    <li className="py-2">
                                        <div className="flex items-center">
                                            <div>
                        <span
                            className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-gray-100 mr-3">
                          <i className="fas fa-fingerprint"/>
                        </span>
                                            </div>
                                            <div>
                                                <h4 className="text-gray-600">
                                                    Built by Developers for Developers
                                                </h4>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="py-2">
                                        <div className="flex items-center">
                                            <div>
                        <span
                            className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-gray-100 mr-3">
                          <i className="fab fa-html5"/>
                        </span>
                                            </div>
                                            <div>
                                                <h4 className="text-gray-600">
                                                    Carefully crafted code for Components
                                                </h4>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="py-2">
                                        <div className="flex items-center">
                                            <div>
                        <span
                            className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-gray-100 mr-3">
                          <i className="far fa-paper-plane"/>
                        </span>
                                            </div>
                                            <div>
                                                <h4 className="text-gray-600">
                                                    One ring to rule them all
                                                </h4>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
                            <img
                                alt="..."
                                className="max-w-full rounded-lg shadow-xl"
                                style={{
                                    transform:
                                        "scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)",
                                }}
                                src={DocumentationImg}
                            />
                        </div>
                    </div>
                </div>

                <div className="">
                    <Slider slides={images} autoPlay={3} />
                </div>

            </section>


            <section className="pb-16 bg-gray-300 relative pt-32">
                <div
                    className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
                    style={{transform: "translateZ(0)"}}
                >
                    <svg
                        className="absolute bottom-0 overflow-hidden"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none"
                        version="1.1"
                        viewBox="0 0 2560 100"
                        x="0"
                        y="0"
                    >
                        <polygon
                            className="text-gray-300 fill-current"
                            points="2560 0 2560 100 0 100"
                        />
                    </svg>
                </div>

                <div className="container mx-auto">

                    <div
                        className="flex flex-wrap justify-center bg-white shadow-xl rounded-lg -mt-56 py-16 px-12 relative z-10 bg-gray-300">
                {/*        <div className="w-full text-center lg:w-8/12" >*/}
                {/*            <GoogleMap />*/}
                {/*        </div>*/}
                                <div className="flex-auto p-5 lg:p-10">
                                    <h4 className="text-2xl font-semibold">
                                        Kontakt os!
                                    </h4>
                                    <p className="leading-relaxed mt-1 mb-4 text-gray-600">
                                        Udfyld skemaet, så vender vi tilbage inden for 24 timer
                                    </p>
                                    <div className="relative w-full mb-3 mt-8">
                                        <label
                                            className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                            htmlFor="name"
                                        >
                                            Navn
                                        </label>
                                        <input
                                            type="text"
                                            className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                                            placeholder="name"
                                        />
                                    </div>

                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                            htmlFor="email"
                                        >
                                            E-mail
                                        </label>
                                        <input
                                            type="email"
                                            className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                                            placeholder="E-mail"
                                        />
                                    </div>

                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                            htmlFor="message"
                                        >
                                            Besked
                                        </label>
                                        <textarea
                                            rows="4"
                                            cols="80"
                                            className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                                            placeholder="Besked..."
                                        />
                                    </div>
                                    <div className="text-center mt-6">
                                        <button
                                            className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="button"
                                        >
                                            Send besked
                                        </button>
                                    </div>
                                </div>
                            </div>

                </div>

            </section>
            <Footer/>
        </>
    )
}

export default Landing;
