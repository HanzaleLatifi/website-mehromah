import React from "react";
import Services from "../components/Services";
import Slider from "../components/Slider";

function HomePage() {
  return (
    <>
    <div className="w-full  flex lg:my-6 md:my-4 p-2 lg:px-12">
      <section className="border-2 border-red-700 w-1/4">
        right components
      </section>
      <section className="w-3/4 mx-2  ">
        <Slider />
      </section>

      <section className="border-2 border-red-700 w-1/4">
        left components
      </section>
    </div>
    <Services/>
    <section className="w-full h-96 bg-yellow-200 lg:mt-20"></section>

    </>
  );
}

export default HomePage;
