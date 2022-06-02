import React from "react";
import Input from "../../common/Input";



function OrderForm1({ formik , currentProduct }) {
 
  return (
    <form
      onSubmit={formik.handleSubmit}
      className="flex flex-col p-2 my-2 items-center pb-4 w-full"
    >
      <div className="flex w-full ">
        <Input formik={formik} label="تعداد" name="count" />
        <Input formik={formik} type="file" label=" ارسال فایل عکس" name="imgfile" />
      </div>
      <div className="flex w-full ">
        <Input formik={formik} label="توضیحات" name="desc"  />
      </div>
    
      <div className="flex w-full justify-around items-center mt-8">
        <button
          type="submit"
          className="py-4 text-xl px-8 text-white bg-pink-700 rounded-3xl hover:bg-yellow-200 hover:text-black hover:btnAnim "
        >
          افزودن به سبد خرید{" "}
        </button>
        <p className="text-2xl text-pink-800 ">قیمت : {currentProduct.price} تومان</p>
      </div>
    </form>
  );
}

export default OrderForm1;
