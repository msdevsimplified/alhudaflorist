"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import ReactWhatsapp from 'react-whatsapp';
export const Card = (props) => {

    const [open, setOpen] = useState(false);
    const [hoverStates, setHoverStates] = useState(
        Array(props.products.length).fill(false)
    );
    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    return (
        <div className='border-[#FAFAD2]/30 border'>
            <div
                key={props.index}
                className="  group relative transition duration-500 transform hover:scale-100"
                onMouseEnter={() =>
                    setHoverStates((prev) =>
                        prev.map((state, i) => (i === props.index ? true : state))
                    )
                }
                onMouseLeave={() =>
                    setHoverStates((prev) =>
                        prev.map((state, i) => (i === props.index ? false : state))
                    )
                }
            >
                <a href="#" className=''>
                    <img
                        src={props.product.images}
                        alt="Product"
                        className="h-80 w-full object-cover"
                    />
                    <div className="px-4 pt-2 w-auto relative font-['Poppins'] text-[#0c5b47] text-center">

                        <p className=" text-base text-center capitalize">
                            {props.product.title}
                            {/* Flowr title */}
                        </p>
                        {
                           ! hoverStates[props.index] ? (
                                <p className="text-base text-[#0c5b47] cursor-auto my-2">
                                    {props.product.price} AED
                                </p>
                            ) : (
                                <ReactWhatsapp number="+971 56 464 8961" className='text-base text-[#0c5b47] cursor-pointer underline my-2' message="Hello World!!!" >Order Now</ReactWhatsapp>
                            )
                        }


                    </div>

                </a>

                {/* Hidden Icons */}
                <div
                    className={`hover-manue card-icons ${hoverStates[props.index] ? "flex" : "hidden"
                        } absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all ease-in-out w-full justify-center gap-2`}
                >
                    <div title='View Product' className="p-6 w-6 hover:bg-[#FFF0E9] cursor-pointer text-gray-400 hover:text-gray-800 transition ease-in duration-300 h-6 flex rounded-full text-sm justify-center items-center bg-[#FFF0E9] shadow-xl">
                        <i
                            onClick={onOpenModal}
                            className="fa-sharp fa-solid fa-eye"></i>
                    </div>
                    <Link href="#" title='Add to cart' className="p-6 w-6 h-6 hover:bg-[#FFF0E9] cursor-pointer text-gray-400 hover:text-gray-800 transition ease-in duration-300 flex rounded-full justify-center items-center bg-[#FFF0E9] shadow-xl">
                        <i className="fa-regular fa-cart-shopping text-xl"></i>
                    </Link>
                    <Link href="#" title='Add to wishlist' className="p-6 w-6 h-6 hover:bg-[#FFF0E9] cursor-pointer text-gray-400 hover:text-gray-800 transition ease-in duration-300 flex rounded-full justify-center items-center bg-[#FFF0E9] shadow-xl">
                        <i className="fa-light fa-heart"></i>
                    </Link>
                    <Link href="#" title='Compare product' className="p-6 w-6 h-6 hover:bg-[#FFF0E9] cursor-pointer text-gray-400 hover:text-gray-800 transition ease-in duration-300 flex rounded-full justify-center items-center bg-[#FFF0E9] shadow-xl">
                        <i className="fa-regular fa-code-compare"></i>
                    </Link>
                </div>
            </div>
            <Modal open={open} onClose={onCloseModal} center>
                <div className=''>
                    <img
                        src="https://urbanmeadowflowers.com.sg/cdn/shop/products/Urban-Meadow-Flowers-Small-Vase-1-MR_450x450.jpg?v=1647417608"
                        alt="Product"
                        className="w-full object-cover"
                    />
                </div>
            </Modal>
        </div>
    );
};

export default Card;