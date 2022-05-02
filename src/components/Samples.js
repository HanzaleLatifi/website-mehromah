import React from "react";
import livan from "../assets/livan.jpg";
import img1 from "../assets/پرچم.jpg"
import img2 from "../assets/ساعت دیجیتال.jpg"
import img3 from "../assets/جا کلیدی پیکسل دورو.jpg"
import img4 from "../assets/جلد مدارک.jpg"
import img5 from "../assets/ساعت چوبی.png"
import img6 from "../assets/فرش.jpg"
import img7 from "../assets/لوح.jpg"
import img8 from "../assets/لوح چوبی.jpg"
import img9 from "../assets/فندک.jpg"
import img10 from "../assets/پدموس.jpg"
import img11 from "../assets/چاپ-پازل.webp"

function Samples() {
  return (
    <section className="container mx-auto my-20" id="sample">
      <h3 className="text-center text-4xl mx-auto lg:mt-28 lg:mb-16 border-2 border-r-0 border-l-0 border-pink-700 py-2 max-w-xs">
        نمونه ها
      </h3>
      <div className="flex flex-wrap gap-10 ">
        <Sample text="پازل سایز A4" image={img11} />
        <Sample text="پرچم پایه سنگی" image={img1} />
        <Sample text="ساعت دیجیتال" image={img2} />
        <Sample text="پیکسل دو رو" image={img3} />
        <Sample text="جلد مدارک" image={img4} />
        <Sample text="قالیچه سایز A4" image={img6} />
        <Sample text="قاب عکس" image={img7} />
        <Sample text="لوح چوبی" image={img8} />
        <Sample text="ساعت جوبی" image={img5} />
        <Sample text="پد موس" image={img10} />
        <Sample text="ماگ ساده" image={livan} />
        <Sample text="فندک" image={img9} />
        
      </div>
    </section>
  );
}

export default Samples;

function Sample({text,image}) {
  return (
    <div className="bg-gray-100 rounded-3xl w-72 shadow-2xl transform transition-all hover:scale-105 hover:shadow-inner ">
      <div className="w-72 h-60 mx-auto ">
        <img src={image} className="h-full w-full" />
      </div>
      <p className="text-2xl w-full bg-white rounded-b-3xl text-center text-black py-2">
        {text}
      </p>
    </div>
  );
}
