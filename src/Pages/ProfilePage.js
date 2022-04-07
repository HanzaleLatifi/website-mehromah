import React from 'react'
import image from "../assets/images.png"
function ProfilePage() {
  return (
    <section className='text-2xl mt-8 flex w-4/5 p-2 justify-around  bg-pink-700 mx-auto rounded-3xl'>
      <div className='flex flex-col p-4 w-2/3 bg-gray-100 ml-8 rounded-3xl ' >
            <div className=' text-center' >
                <p>اطلاعات</p>
            </div>
            <div className=' text-center' >
                <p>سفارشات</p>
            </div>
        </div>
        <div className='flex flex-col bg-gray-100 p-4 w-1/3 items-center rounded-3xl'>
            <div className='w-40 h-40  p-2 mb-8  '>
              <img src={image} className="text-center"/>
            </div >
            <p >نام کاربری : </p>
            <p>ایمیل :</p>
        </div>

    </section>
  )
}

export default ProfilePage