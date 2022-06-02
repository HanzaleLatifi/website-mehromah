import React from "react";
import Input from "../../common/Input";

function OrderForm2({ formik }) {
  return (
    <form
      onSubmit={formik.handleSubmit}
      className="flex flex-col p-2 my-2 items-center pb-4 w-full"
    >
      <div className="flex w-full ">
        <Input
          formik={formik}
          label="اسم"
          name="name"
          placeholder="اسم مغازه یا شرکت"
        />
        <Input formik={formik} label="حوزه کاری" name="workarea" />
      </div>
      <div className="flex w-full ">
        <Input formik={formik} label="مدیریت" name="management" />
        <Input formik={formik} label="آدرس اینستاگرام" name="insta" />
      </div>
      <div className="flex w-full ">
        <Input formik={formik} label="شماره همراه" name="number1" />
        <Input formik={formik} label="شماره ثابت" name="number2" />
      </div>
      <div className="flex w-full ">
        <Input formik={formik} label="تعداد" name="count" />
        <Input formik={formik} label="نوع" name="type" />
      </div>
      <div className="flex w-full ">
        <Input formik={formik} type="file" label="ارسال فایل" name="imgfile" />
        <Input formik={formik} type="textarea" label="توضیحات" name="desc" />
      </div>

      <div className="flex w-full justify-around items-center mt-8">
        <button
          type="submit"
          className="py-4 text-xl px-8 text-white bg-pink-700 rounded-3xl "
        >
          افزودن به سبد خرید{" "}
        </button>
        <p className="text-2xl text-pink-800">قیمت : 120000 تومان</p>
      </div>
    </form>
  );
}

export default OrderForm2;
