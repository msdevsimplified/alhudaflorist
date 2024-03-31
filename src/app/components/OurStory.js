
export default function OurStory() {
  return (
    <div className="px-4 bg-[#fff] py-20 mx-auto max-w-full lg:pb-24">
      <div className="flex flex-col justify-center items-center mb-2 md:mx-auto sm:text-center md:mb-24">
        <div>
          <p className="inline-block parisienne-regular px-3 py-px mb-4 text-3xl font-semibold tracking-wider text-[#0c5b47] rounded-full bg-teal-accent-400">
          Why Choose Us
          </p>
        </div>
        <h2 className="max-w-lg mb-6  text-3xl font-medium leading-none tracking-tight text-[#0c5b47] sm:text-4xl md:mx-auto">

          Perfect Florist Spot
        </h2>
      </div>
      <div className="grid gap-8 lg:grid-cols-2 sm:mx-auto">
        <div className="flex flex-col justify-center bg-[url('https://rosebud.qodeinteractive.com/wp-content/uploads/2018/02/h2-img-1.png')] bg-center bg-no-repeat">
          <div className="flex">
            <div className="">
              <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full text-[#0c5b47]">
                <i class="fa-duotone fa-flower-daffodil"></i>
              </div>
            </div>
            <div>
              <h6 className="mb-2 text-gray-800 font-medium text-xl ">
                Freshness Guaranteed
              </h6>
              <p className="text-sm text-[#0c5b47] font-normal">
                We source our flowers from the finest local and international
                growers to ensure freshness and quality in every arrangement.
              </p>
              {/* <hr className="w-full my-6 border-pink-300" /> */}<br />
            </div>
          </div>
          <div className="flex">
            <div className="">
              <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full text-[#0c5b47]">
                <i class="fa-duotone fa-flower-daffodil"></i>
              </div>
            </div>
            <div>
              <h6 className="mb-2 text-gray-800 font-medium text-xl">
                Expert Florists
              </h6>
              <p className="text-sm text-[#0c5b47] font-normal">
                Our team of skilled florists combines creativity and expertise
                to design captivating floral masterpieces that exceed your expectations.
              </p>
              {/* <hr className="w-full my-6 border-pink-300" /> */}<br />
            </div>
          </div>
          <div className="flex">
            <div className="">
              <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full text-[#0c5b47]">
                <i class="fa-duotone fa-flower-daffodil"></i>
              </div>
            </div>
            <div>
              <h6 className="mb-2 text-gray-800 font-medium text-xl">
                Wide Selection
              </h6>
              <p className="text-sm text-[#0c5b47] font-normal">
                Explore our diverse range of flowers, including classic roses, exotic orchids,
                vibrant lilies, and more, to find the perfect blooms for any occasion.
              </p>
              {/* <hr className="w-full my-6 border-pink-300" /> */}<br />
            </div>
          </div>
          <div className="flex">
            <div className="">
              <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full text-[#0c5b47]">
                <i class="fa-duotone fa-flower-daffodil"></i>
              </div>
            </div>
            <div>
              <h6 className="mb-2 text-gray-800 font-medium text-xl">
                Customization
              </h6>
              <p className="text-sm text-[#0c5b47] font-normal">
                Looking for something unique? We offer customizable arrangements tailored to your preferences and budget, ensuring a personalized touch every time.
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-5">
          <img
            className="object-cover w-full h-56 col-span-2 rounded shadow-lg"
            src="https://ld-wp73.template-help.com/wordpress/prod_7609/v1/wp-content/uploads/2020/02/img16-1355x1020-1-1024x771.jpg"
            alt=""
          />
          <img
            className="object-cover w-full h-48 rounded shadow-lg"
            src="https://asset.bloomnation.com/c_pad,d_vendor:global:catalog:product:image.png,f_auto,fl_preserve_transparency,q_auto/v1612079608/vendor/818/catalog/product/2/0/20200303112318_file_5e5ee6e638ca4_5e5ee750915a6_5ed038470a41b_5ed0384932f72.jpg"
            alt=""
          />
          <img
            className="object-cover w-full h-48 rounded shadow-lg"
            src="https://www.nancysfloral.com/product_images/uploaded_images/find-top-quality-cut-flowers-at-nancys-floral.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};