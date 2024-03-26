import { products, tabData } from "@/utils/dummyData";
import Footer from "./components/Footer";
import Gallary from "./components/Gallary";
import Header from "./components/Header";
import OurStory from "./components/OurStory";
import { Tabs } from "./components/TabComponents/tabs";

export default function Home() {

  return (
    <main className="">
      <Header />
      <OurStory />
      <div className="">
        <div className="max-w-xl flex flex-col justify-center mb-2 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12 mt-24">
          {/* <div>
            <p className="parisienne-regular px-3 py-px mb-4 text-3xl text-center font-semibold tracking-wider text-gray-200 rounded-full bg-teal-accent-400">
              Hot Sale
            </p>
          </div> */}
          <h2 className="max-w-lg text-[#E6BE8A] parisienne-regular text-3xl text-center font-medium leading-none tracking-tight sm:text-4xl md:mx-auto">

            Our Favourites
          </h2>
        </div>
        <Tabs tabData={tabData} listing={products} />
      </div>
      <Gallary />
      <Footer />
    </main>
  );
}
