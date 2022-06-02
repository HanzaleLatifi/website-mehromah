import React from "react";
import Services from "../components/Services";
import Slider from "../components/Slider";
import img1 from "../assets/design.jpg";
import img2 from "../assets/contact.jpg"
import img3 from "../assets/Wavy_Bus-38_Single-03.jpg"
import img4 from "../assets/19955.jpg"
import {useEffect} from 'react'
import { useDispatch } from "react-redux";
import { getAysncProfile } from "../feature/profile/profileSlice";
import Samples from "../components/Samples";

function HomePage() {


  return (
    <>
      <div className="w-full flex lg:my-2 md:my-4 p-2 lg:px-4 z-0  ">
        <section className="w-1/4 flex flex-col  ">
          <div className=" bg-yellow-100 rounded-3xl lg:mb-6 transition-all hover:bg-yellow-200 shadow-lg ">
            <div className="transform hover:-translate-y-1">
              <img src={img1} className="w-full h-full rounded-3xl" />
            </div>
            <button className="text-xl w-full text-center  py-2 ">
              ثبت سفارش طراحی
            </button>
          </div>

          <div className=" bg-yellow-100 rounded-3xl transition-all hover:bg-yellow-200 shadow-lg">
            <div className="transform hover:-translate-y-1">
              <img src={img3} className="w-full h-full rounded-3xl" />
            </div>
            <button className="text-xl w-full text-center  py-2">
              مشاهده محصولات جدید
            </button>
          </div>
        </section>
        <section className="w-3/4 lg:mx-10  ">
          <Slider />
        </section>

        <section className="flex flex-col w-1/4   ">
          <div className="  bg-yellow-100 rounded-3xl lg:mb-6 transition-all hover:bg-yellow-200 shadow-lg">
            <div className="transform hover:-translate-y-1">
              <img src={img4} className="w-full h-full rounded-3xl" />
            </div>
            <button className="text-xl w-full text-center   py-2">
                پیگیری سفارشات
            </button>
          </div>

          <div className=" bg-yellow-100 rounded-3xl transition-all  hover:bg-yellow-200  shadow-lg ">
            <div className="transform hover:-translate-y-1">
              <img src={img2} className="w-full h-full rounded-3xl" />
            </div>
            <button className="text-xl w-full text-center py-2">
              تماس با ما
            </button>
          </div>
        </section>
      </div>
      <Services />
      <Samples/>
    </>
  );
}

export default HomePage;
