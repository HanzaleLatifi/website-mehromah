import React from 'react'
import {MdTimer} from 'react-icons/md'

function Services() {
  return (
    <section className='container p-4 mx-auto lg:mt-20 h-auto flex items-center justify-center'>
        <Service text="انجام سفارشات در اسرع وقت"/>
        <Service text="بهره مندی از تخفیف به ازای تعداد سفارشات"/>
        <Service text="امکان بازگشت محصول تا هفت روز پس از تحویل"/>
        <Service text="انجام کلیه خدمات مربوطه از طراحی تا چاپ"/>

    </section>
  )
}

export default Services

function Service({text}){
  return(
    <div className='bg-pink-700 shadow-2xl px-2 rounded-md ring-4 border-2 border-white  transform rotate-45 ring-pink-700 w-36 h-36 flex justify-center mx-16 items-center'> 
       <p className='text-center text-lg transform -rotate-45 text-white'>{text}</p>
    </div>
  )
}