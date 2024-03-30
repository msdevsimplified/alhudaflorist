import { products, tabData } from "@/utils/dummyData";
import Footer from "./components/Footer";
import Gallary from "./components/Gallary";
import Header from "./components/Header";
import OurStory from "./components/OurStory";
import { Tabs } from "./components/TabComponents/tabs";
import Pricing from "./components/pricing";

export default function Home() {

  return (
    <main className="">
      <Header />
      <OurStory />
      <Pricing/>
      <div className="bg-white pt-16">
        <div className="max-w-xl flex flex-col justify-center mb-2 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p className="parisienne-regular px-3 py-px mb-4 text-3xl text-center font-semibold tracking-wider text-[#0c5b47] rounded-full bg-teal-accent-400">
              Our Favourites
            </p>
          </div>
          <h2 className="max-w-lg text-[#E6BE8A] text-3xl text-center font-medium leading-none tracking-tight sm:text-4xl md:mx-auto">
          Featured Products
          </h2>
        </div>
        <Tabs tabData={tabData} listing={products} />
      </div>
      <Gallary />
      <Footer />
    </main>
  );
}
