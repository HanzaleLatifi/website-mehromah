import React from "react";
import axios from "axios";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import Input from "../common/Input";
import OrderForm1 from "../components/orderForms/OrderForm1";
import OrderForm2 from "../components/orderForms/OrderForm2";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../feature/cart/cartSlice";
import { toast } from "react-toastify";


const initialValues = {
  count: 1,
  imgfile: "",
  desc: "",
};
function OrderForm() {
  const [formData, setFormData] = useState({});
  const [currentProduct,setcurrentProduct]=useState("")
  const dispatch=useDispatch()
  const profile=useSelector((state)=>state.profile)

  useEffect(() => {
    const current = JSON.parse(localStorage.getItem('product'))
      setcurrentProduct(current)
   
  }, [])
  
  const onSubmit = (values) => {
    const {count , desc , imgfile}=values
    const itemDetail={
      count:Number(count),
      desc:desc,
      imgfile:imgfile,
      userId:profile.id ,
      productId:currentProduct.id ,
      price:currentProduct.price,
      name:currentProduct.name

    }
    dispatch(addToCart(itemDetail));
    toast.success(`${itemDetail.name} به سبد خرید اضافه شد`)
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validateOnMount: true,
  });

  return (
    <section>
      <div className="w-3/4  bg-white mt-12 mb-12 shadow-xl rounded-2xl mx-auto pb-4">
        <div className="bg-black p-4 text-xl text-yellow-100 flex justify-around items-center rounded-t-2xl">
          فرم سفارش
        </div>
        <OrderForm1 formik={formik} currentProduct={currentProduct} />
      </div>
    </section>
  );
}

export default OrderForm;
