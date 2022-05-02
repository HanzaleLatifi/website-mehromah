import React from "react";
import logoo from "../assets/logo.png";
import { RiInstagramFill } from "react-icons/ri";
import { RiWhatsappFill } from "react-icons/ri";
import { FaTelegram } from "react-icons/fa";

function Footer() {
  return (
    <div className="w-full bg-gray-800 lg:p-8 mt-8 flex items-center justify-between rounded-t-3xl ">
      <div className="flex flex-col  w-1/3 ">
        <strong className="text-yellow-200 text-2xl mb-2 text-center">
          درباره ما
        </strong>
        <p className="text-white">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزارهای کاربردی می باشد{" "}
        </p>
      </div>
      <div className="w-1/4 ">
        <div className="w-3/4 text-center">
          <img src={logoo} />
        </div>
      </div>
      <div className="w-1/4  flex flex-col items-center">
        <strong className="text-yellow-200 text-2xl mb-2 text-center">
          تماس با ما
        </strong>
        <div className="text-white text-xl text-center ">
          <p className="tracking-widest ">07152853686</p>
          <p className="tracking-widest"> 09389876868</p>
        </div>
        <div className="flex text-5xl mt-4 text-white">
          <RiInstagramFill />
          <RiWhatsappFill />
          <FaTelegram />
        </div>
      </div>
    </div>
  );
}

export default Footer;
