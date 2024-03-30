"use client"

import axios from "axios";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";


export default function AllFlowers() {
    const { data } = useSession();
    const router = useRouter();
    console.log(data)
    // if (status !== "authenticated") {
    //   router.push("/login");
    // }
    const [flowers, setFlowers] = useState([])

    const getFlowers = async () => {
        const res = await axios.get('http://localhost:3000/api/flowers')
        setFlowers(res.data.data)
    }
    useEffect(() => {
        getFlowers()

    }, [0])

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
            const res = axios.delete(`http://localhost:3000/api/flowers/${id}`)
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
              router.refresh()
            }
          });
        
    }

    return (
        <section className="container bg-white px-4 mx-auto">
            <div className="sm:flex sm:items-center sm:justify-between">
                <div className="flex items-center gap-x-3">
                    <h2 className="text-lg font-medium text-gray-800">Flowers</h2>

                    <span className="px-3 py-1 text-xs text-black bg-[#FAFAD2] rounded-full">{flowers.length} flowers</span>
                </div>
                <div className="flex items-center mt-4 gap-x-3">

                    <button className="flex items-center justify-center w-1/2 px-5 py-2 text-sm tracking-wide text-[#FAFAD2] transition-colors duration-200 bg-[#1B1B1B] rounded-lg sm:w-auto gap-x-2 hover:bg-gray-600">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_3098_154395)">
                                <path d="M13.3333 13.3332L9.99997 9.9999M9.99997 9.9999L6.66663 13.3332M9.99997 9.9999V17.4999M16.9916 15.3249C17.8044 14.8818 18.4465 14.1806 18.8165 13.3321C19.1866 12.4835 19.2635 11.5359 19.0351 10.6388C18.8068 9.7417 18.2862 8.94616 17.5555 8.37778C16.8248 7.80939 15.9257 7.50052 15 7.4999H13.95C13.6977 6.52427 13.2276 5.61852 12.5749 4.85073C11.9222 4.08295 11.104 3.47311 10.1817 3.06708C9.25943 2.66104 8.25709 2.46937 7.25006 2.50647C6.24304 2.54358 5.25752 2.80849 4.36761 3.28129C3.47771 3.7541 2.70656 4.42249 2.11215 5.23622C1.51774 6.04996 1.11554 6.98785 0.935783 7.9794C0.756025 8.97095 0.803388 9.99035 1.07431 10.961C1.34523 11.9316 1.83267 12.8281 2.49997 13.5832" stroke="currentColor" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0_3098_154395">
                                    <rect width="20" height="20" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>

                        <span>Upload</span>
                    </button>
                </div>
            </div>

            <div className="flex flex-col mt-6">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>


                                        <th scope="col" className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">
                                            Flower name
                                        </th>

                                        <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">
                                            Category
                                        </th>

                                        <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">
                                            Section
                                        </th>
                                        <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">
                                            Price
                                        </th>

                                        <th scope="col" className="relative py-3.5 px-4">
                                            <span className="sr-only">Edit</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {
                                        flowers && flowers.map((flower, index) => {
                                            return (
                                                <tr key={index}
                                                >

                                                    <td className="px-4 py-4 inline-flex gap-2 text-sm font-medium text-gray-700 whitespace-nowrap">
                                                        <input type="checkbox" className="text-blue-500 border-gray-300 rounded" />
                                                        <div className="flex items-center gap-x-2">

                                                            <img className="object-cover w-12 h-12 rounded-full" src={flower.image} alt="" />
                                                            <div>
                                                                <h2 className="text-sm font-medium text-gray-500">{flower.title}</h2>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">{flower.category}</td>
                                                    <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">{flower.section}</td>
                                                    <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">AED {flower.price}</td>
                                                    <td className="px-4 py-4 inline-flex gap-0 text-sm whitespace-nowrap">

                                                        <Link href={`editflowers/${flower.id}`} className="block px-2 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform">
                                                            <i className="fa-sharp fa-solid fa-pen-to-square"></i> Edit
                                                        </Link>

                                                        <button 
                                                        onClick={() => handleDelete(flower.id)}
                                                        className="block px-2 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform">
                                                            <i className="fa-regular fa-trash-can"></i> Delete
                                                        </button>

                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-between mt-6">
                <a href="#" className="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 rtl:-scale-x-100">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                    </svg>

                    <span>
                        previous
                    </span>
                </a>

                <div className="items-center hidden md:flex gap-x-3">
                    <a href="#" className="px-2 py-1 text-sm text-blue-500 rounded-md bg-blue-100/60">1</a>
                    <a href="#" className="px-2 py-1 text-sm text-gray-500 rounded-md hover:bg-gray-100">2</a>
                    <a href="#" className="px-2 py-1 text-sm text-gray-500 rounded-md hover:bg-gray-100">3</a>
                    <a href="#" className="px-2 py-1 text-sm text-gray-500 rounded-md hover:bg-gray-100">...</a>
                    <a href="#" className="px-2 py-1 text-sm text-gray-500 rounded-md hover:bg-gray-100">12</a>
                    <a href="#" className="px-2 py-1 text-sm text-gray-500 rounded-md hover:bg-gray-100">13</a>
                    <a href="#" className="px-2 py-1 text-sm text-gray-500 rounded-md hover:bg-gray-100">14</a>
                </div>

                <a href="#" className="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100">
                    <span>
                        Next
                    </span>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 rtl:-scale-x-100">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                    </svg>
                </a>
            </div>
        </section>
    )
}