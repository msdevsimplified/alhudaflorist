import NavBar from "../Nav";

export default function AdminLayout({ children }) {
    return (
        <html>
            <head></head>
           <body className="bg-white">
           <main className="bg-white">
            <div classNameName="min-h-[100vh]">
            <NavBar />
            <div className="container w-full flex flex-wrap mx-auto">
                <div className="w-full md:min-h-[90vh] pb-4 h-auto bg-[#FFF0E9] lg:w-1/5 px-6 text-xl text-gray-800 leading-normal">
                    <p className="text-base pt-4 font-bold lg:pb-2 text-gray-700">Dashboard</p>

                    <div className="w-full sticky inset-0 max-h-64 lg:h-auto overflow-x-hidden overflow-y-auto lg:overflow-y-hidden mt-0 my-2 lg:my-0 border border-gray-400 lg:border-transparent bg-white shadow lg:shadow-none lg:bg-transparent z-20"
                        id="menu-content">
                        <ul className="list-reset py-2 md:py-0">
                            <li className="py-1 md:my-2 hover:bg-[#FFF0E9] lg:hover:bg-transparent border-transparent">
                                <a href='/admin/flowers'
                                    className="block pl-4 align-middle text-gray-700 hover:text-yellow-600">
                                    <span className="pb-1 md:pb-0 text-sm">Flowers</span>
                                </a>
                            </li>
                            <li className="py-1 md:my-2 hover:bg-[#FFF0E9] lg:hover:bg-transparent border-transparent">
                                <a href='/admin/addflowers'
                                    className="block pl-4 align-middle text-gray-700 hover:text-yellow-600">
                                    <span className="pb-1 md:pb-0 text-sm">Add flowers</span>
                                </a>
                            </li>
                            <li className="py-1 md:my-2 hover:bg-[#FFF0E9] lg:hover:bg-transparent border-transparent">
                                <a href='/admin/settings'
                                    className="block pl-4 align-middle text-gray-700 no-underline hover:text-yellow-600">
                                    <span className="pb-1 md:pb-0 text-sm">Settings</span>
                                </a>
                            </li>
                            <li className="py-1 md:my-2 hover:bg-[#FFF0E9] lg:hover:bg-transparent border-transparent">
                                <a href='/auth/reset_password'
                                    className="block pl-4 align-middle text-gray-700 no-underline hover:text-yellow-600">
                                    <span className="pb-1 md:pb-0 text-sm">Change password</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <section className="w-full lg:w-4/5">
                    {children}
                </section>


            </div>
        </div>
            </main>
           </body>
        </html>
    )
}