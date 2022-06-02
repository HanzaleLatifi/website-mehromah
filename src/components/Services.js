import React from 'react'
import {MdTimer} from 'react-icons/md'
import Aos from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";

function Services() {

  useEffect(() => {
    Aos.init({duration:2000 , delay:300 })
   }, [])

  return (
    <section className='container p-4 mx-auto lg:mt-20 h-auto flex items-center justify-center'>
        <Service  text="انجام سفارشات در اسرع وقت"/>
        <Service text="بهره مندی از تخفیف به ازای تعداد سفارشات"/>
        <Service text="امکان بازگشت محصول تا هفت روز پس از تحویل"/>
        <Service text="انجام کلیه خدمات مربوطه از طراحی تا چاپ"/>

    </section>
  )
}

export default Services

function Service({text}){
  return(
    <div data-aos="flip-left" className='bg-pink-700 shadow-2xl px-2 rounded-md ring-4 border-2 border-white ring-pink-700 w-40 h-36 flex justify-center mx-12 items-center' > 
       <p className='text-center text-lg transform  text-white'>{text}</p>
    </div>
  )
}
