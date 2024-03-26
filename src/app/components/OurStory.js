
export default function OurStory() {
  return (
    <div className="px-4 bg-[#fff] py-24 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-12 lg:pb-24">
      <div className="max-w-xl flex flex-col justify-center items-center mb-2 md:mx-auto sm:text-center lg:max-w-2xl md:mb-24">
        <div>
          <p className="inline-block parisienne-regular px-3 py-px mb-4 text-3xl font-semibold tracking-wider text-gray-900 rounded-full bg-teal-accent-400">
            Our Services
          </p>
        </div>
        <h2 className="max-w-lg mb-6  text-3xl font-medium leading-none tracking-tight text-[#E6BE8A] sm:text-4xl md:mx-auto">

          Perfect Florist Spot
        </h2>
      </div>
      <div className="grid max-w-screen-xl gap-8 lg:grid-cols-2 sm:mx-auto">
        <div className="flex flex-col justify-center bg-[url('https://rosebud.qodeinteractive.com/wp-content/uploads/2018/02/h2-img-1.png')] bg-center bg-no-repeat">
          <div className="flex">
            <div className="mr-4">
              <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full text-gray-600">
                <i class="fa-duotone fa-flower-daffodil"></i>
              </div>
            </div>
            <div>
              <h6 className="mb-2 text-[#E6BE8A] font-medium text-xl ">
                Party Flower
              </h6>
              <p className="text-sm text-gray-600 font-normal">
                Skate ipsum dolor sit amet, alley oop vert mute-air Colby Carter
                flail 180 berm. Half-cab camel back ollie transition ledge Wes
                Humpston 1080.
              </p>
              {/* <hr className="w-full my-6 border-pink-300" /> */}<br />
            </div>
          </div>
          <div className="flex">
            <div className="mr-4">
              <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full text-gray-600">
                <i class="fa-duotone fa-flower-daffodil"></i>
              </div>
            </div>
            <div>
              <h6 className="mb-2 text-[#E6BE8A] font-medium text-xl">
                Wedding Flower
              </h6>
              <p className="text-sm text-gray-600 font-normal">
                The first mate and his Skipper too will do their very best to
                make the others comfortable in their tropic island nest. Michael
                Knight a young loner.
              </p>
              {/* <hr className="w-full my-6 border-pink-300" /> */}<br />
            </div>
          </div>
          <div className="flex">
            <div className="mr-4">
              <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full text-gray-600">
                <i class="fa-duotone fa-flower-daffodil"></i>
              </div>
            </div>
            <div>
              <h6 className="mb-2 text-[#E6BE8A] font-medium text-xl">
                Birthday Flower
              </h6>
              <p className="text-sm text-gray-600 font-normal">
                The first mate and his Skipper too will do their very best to
                make the others comfortable in their tropic island nest. Michael
                Knight a young loner.
              </p>
              {/* <hr className="w-full my-6 border-pink-300" /> */}<br />
            </div>
          </div>
          <div className="flex">
            <div className="mr-4">
              <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full text-gray-600">
                <i class="fa-duotone fa-flower-daffodil"></i>
              </div>
            </div>
            <div>
              <h6 className="mb-2 text-[#E6BE8A] font-medium text-xl">
                Valentine Flower
              </h6>
              <p className="text-sm text-gray-600 font-normal">
                Chase ball of string eat plants, meow, and throw up because I
                ate plants going to catch the red dot today going to catch the
                red dot today. I could pee on this if I had the energy.
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