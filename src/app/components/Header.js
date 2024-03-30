"use client"
import React from 'react';
import ReactWhatsapp from 'react-whatsapp';

const Header = () => {
    const toggleMobileMenu = () => {
        const hamburger = document.querySelector('#hamburger');
        const navbar = document.querySelector('#navbar');

        hamburger.querySelector('#line').classNameList.toggle('rotate-45');
        hamburger.querySelector('#line').classNameList.toggle('translate-y-1.5');
        hamburger.querySelector('#line2').classNameList.toggle('-rotate-45');
        hamburger.querySelector('#line2').classNameList.toggle('-translate-y-1');

        if (navbar.clientHeight === 0) {
            navbar.style.paddingTop = '20px';
            navbar.style.paddingBottom = '20px';
            navbar.style.height = `${parseInt(navbar.scrollHeight) + 60}px`;
        } else {
            navbar.style.height = '0px';
            navbar.style.paddingTop = '0px';
            navbar.style.paddingBottom = '0px';
        }
    };

    return (
        <div className="relative w-full bg-white bg-no-repeat bg-cover bg-center bg-[url('https://fiorello.qodeinteractive.com/wp-content/uploads/2018/05/h3-slider-background-3.jpg')]">
            <nav className="absolute w-full">
                <div className="container m-auto px-6 md:px-12 lg:px-7">
                    <div className="flex flex-wrap items-center justify-between py-6 gap-6 md:py-4 md:gap-0 relative">
                        <input type="checkbox" name="toggle_nav" id="toggle_nav" className="peer hidden" />
                        <div className="w-full flex justify-between md:w-max md:px-0">
                            <a href="#" aria-label="logo">
                                <h1 className='text-2xl font-bold'>Alhudaflorist</h1>
                                {/* <img src="images/logo.svg" className="w-36 grayscale contrast-200" alt="tailus logo" width="144" height="68" /> */}
                            </a>

                            <div className="flex items-center md:hidden max-h-10">
                                <label role="button" for="toggle_nav" aria-label="humburger" id="hamburger" className="relative z-40 px-2 py-3 sm:-mr-6">
                                    <div id="line"
                                        className="m-auto h-0.5 w-6 rounded bg-sky-900 transition duration-300"></div>
                                    <div id="line2"
                                        className="m-auto mt-2 h-0.5 w-6 rounded bg-sky-900 transition duration-300">
                                    </div>
                                </label>
                            </div>
                        </div>

                        <label role="button" htmlFor="toggle_nav" className="fixed w-full z-30 h-full top-0 left-0 bg-gray-700 bg-opacity-40 hidden peer-checked:block md:peer-checked:hidden"></label>

                        <div className="flex z-50 flex-col md:flex-row justify-between 
                            items-center gap-y-4 p-6 bg-white md:w-8/12 
                            md:gap-y-4 md:p-0 
                            md:bg-transparent lg:w-7/12 fixed top-0 -left-full transition-all duration-500 peer-checked:left-0 max-w-sm h-full 
                            md:left-0 md:h-auto w-4/5 md:max-w-none md:relative lg:first-letter:top-0">
                            <div className="flex md:hidden w-full pb-5">
                                <a href="#" aria-label="logo">
                                    <img src="images/logo.svg" className="w-36 grayscale contrast-200" alt="tailus logo" width="144" height="68" />
                                </a>
                            </div>
                            <div className="block w-full h-full md:h-auto">
                                <ul className="space-y-8 tracking-wide font-medium md:flex md:space-y-0">
                                    <li>
                                        <a href="#" className="block md:px-3">
                                            <div className="relative text-yellow-800
                                                before:absolute before:-inset-2 before:w-full before:h-0.5 before:origin-left before:mx-auto before:mt-auto before:rounded-full before:bg-yellow-800">
                                                <span>Home</span>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="block md:px-3 group">
                                            <div className="relative text-gray-600
                                                before:absolute before:-inset-2 before:w-full before:h-0.5 before:origin-left before:mx-auto before:mt-auto before:rounded-full before:bg-yellow-800 before:transition before:scale-x-0 group-hover:before:scale-x-100">
                                                <span className="transition group-hover:text-yellow-700">About</span>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="contact" className="block md:px-3 group">
                                            <div className="relative text-gray-600
                                                before:absolute before:-inset-2 before:w-full before:h-0.5 before:origin-left before:mx-auto before:mt-auto before:rounded-full before:bg-yellow-800 before:transition before:scale-x-0 group-hover:before:scale-x-100">
                                                <span className="transition group-hover:text-yellow-700">Contact</span>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div className="w-full gap-y-4 md:w-max md:gap-y-0 md:gap-x-4 flex md:flex-row flex-col">
                                <button type="button" title="Start buying" className="group w-full py-3 px-6 text-center transition active:bg-yellow-200 focus:bg-yellow-100 sm:w-max">
                                    <span className="block text-gray-700 font-semibold group-focus:text-yellow-700">
                                        Login
                                    </span>
                                </button>
                                <button type="button" title="Start buying" className="w-full py-3 px-6 text-center transition bg-gray-900 hover:bg-gray-800 active:bg-gray-700 focus:bg-gray-800 md:w-max">
                                    <span className="block text-white font-semibold">
                                        Shop now
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="h-[80vh] flex">
                <div className="container m-auto px-6 py-40 md:px-12 lg:py-0 lg:px-7">
                    <div className="flex items-center flex-wrap gap-12 lg:gap-0">
                        <div className="lg:w-5/12 space-y-8">
                            <span className="flex space-x-2">
                                <span className="block w-14 mb-2 border-b-2 border-gray-600"></span>
                                <span className="font-medium text-gray-600">New this summer</span>
                            </span>
                            <h1 className="text-4xl font-bold md:text-5xl">Your <span className='text-gray-800'>Oasis</span> of Floral Delights in the Heart of the UAE!</h1>
                            <p className="text-xl text-gray-700">Elevate Every Occasion with Our Handcrafted Bouquets and Arrangements.</p>

                            <div className="flex space-x-4">
                                <button type="button" title="Start buying" className="w-full py-3 px-6 text-center transition bg-gray-900 hover:bg-gray-800 active:bg-gray-700 focus:bg-gray-800 sm:w-max">
                                    <span className="block text-white font-semibold">
                                        Explore now
                                    </span>
                                </button>
                                <button type="button" title="Start buying" className="group w-full py-3 px-6 text-center transition active:bg-yellow-200 focus:bg-yellow-100 sm:w-max">
                                    <span className="block text-gray-700 font-semibold group-focus:text-yellow-700">
                                        Discover Our Collections
                                    </span>
                                </button>
                            </div>
                        </div>

                        <div className="hidden relative md:block lg:w-7/12">
                            {/* <div aria-hidden="true" className="absolute inset-0 m-auto w-[30rem] h-[30rem] rounded-full bg-yellow-200">

                            </div> */}
                            <img src="images/shoes.png" className="relative ml-auto" alt="" />
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-8 w-full">
                    <div className="container m-auto px-6 flex items-end justify-between md:px-12 lg:px-7">
                        <a href="" className="hidden space-x-4 md:flex md:items-center">
                            <img className="w-14 h-14 rounded-full object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKORutUEVkdtnSfhP8dvTy3wgaNuVvwxX3bbVQJcxCkg&s" alt="" />
                            <div className="text-gray-600">
                                <span className="text-sm">Question ?</span>
                                <ReactWhatsapp number="+971 56 464 8961" className='text-base text-[#0c5b47] cursor-pointer my-2' message="Hello World!!!" >Talk to our CEO</ReactWhatsapp>
                            </div>
                        </a>
                        <div>
                            <a href="#" className="hover:text-yellow-700"><i class="fa-brands fa-facebook fa-fw"></i> </a>
                            <a href="#" className="hover:text-yellow-700"><i class="fa-brands fa-instagram fa-fw"></i> </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;
