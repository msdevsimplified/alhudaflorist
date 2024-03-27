import PageLayout from "../components/layout/PageLayout";

const About = () => {
    return (
        <PageLayout>
            <section className="text-gray-600 body-font bg-white">
                <div className="container px-5 py-24 mx-auto flex flex-wrap">
                    <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
                        <div className="w-full sm:p-4 px-4 mb-6">
                            <h1 className="title-font text-2xl mb-2 text-gray-900 font-['Prata'] font-bold">Al Huda Flowers</h1>
                            <p className="leading-relaxed py-4 text-gray-600 font-semibold">Welcome to Alhuda Florist Your Premier Destination for Stunning Floral Arrangements in Dubai!</p>
                            <p className="leading-relaxed">At Alhuda Florist, nestled in the heart of Dubai, we take pride in being the quintessential destination for all your floral needs. With an unwavering commitment to excellence and a passion for the art of floral design, we offer an exquisite array of breathtaking arrangements that infuse every occasion with beauty and elegance.</p>
                            <p className="leading-relaxed py-4">What sets us apart is our dedication to crafting bespoke floral creations tailored to your unique vision and requirements. Whether you're celebrating a milestone birthday, commemorating an anniversary, marking a grand opening, or expressing love on a special day, our expert florists are here to transform your dreams into stunning reality.</p>
                        </div>
                        <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                            <h2 className="title-font font-medium text-3xl text-gray-900">2.7K</h2>
                            <p className="leading-relaxed">Users</p>
                        </div>
                        <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                            <h2 className="title-font font-medium text-3xl text-gray-900">2.8K</h2>
                            <p className="leading-relaxed">Customers</p>
                        </div>
                        <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                            <h2 className="title-font font-medium text-3xl text-gray-900">1000+</h2>
                            <p className="leading-relaxed">Flowers</p>
                        </div>
                        <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                            <h2 className="title-font font-medium text-3xl text-gray-900">4</h2>
                            <p className="leading-relaxed">Products</p>
                        </div>
                    </div>
                    <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
                        <img className="object-cover object-center w-full h-full" src="https://rosebud.qodeinteractive.com/wp-content/uploads/2018/02/h1-img-1.jpg" alt="stats" />
                    </div>
                </div>
            </section>
        </PageLayout>
    )
}

export default About;