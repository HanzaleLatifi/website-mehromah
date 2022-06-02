import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import img0 from "../assets/فندک.jpg";
import img1 from "../assets/livan.jpg";
import { NavLink } from "react-router-dom";

const images = [img0, img1];

function OrderPage() {
  const [product, setProduct] = useState([]);

 

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/home/product/")
      .then((res) => {
        setProduct(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <>
    <h3 className="text-center text-4xl mx-auto lg:mt-12 lg:mb-16 border-2 border-r-0 border-l-0 border-pink-700 py-2 max-w-xs">
      محصولات
      </h3>
    <section className="container mt-16 mb-10 flex felx-wrap justify-center gap-10">
      {product.map((p, index) => {
        return <Item key={p.productId}  detail={[p,images[index]]}  name={p.name} imgAddress={images[index]} price={p.price} />;
      })}
    </section>
    </>
  );
}

export default OrderPage;

function Item({ name, imgAddress ,detail , price  }) {
  const addToStorage=(product)=>{
      localStorage.clear(product)
      localStorage.setItem('product', JSON.stringify(product))

  }
  return (
    <div className="w-64 bg-white shadow-xl flex flex-col  items-center rounded-2xl transform  hover:scale-105  ">
      <span className="w-36 h-36 bg-yellow-200 rounded-full mt-4">
        <img   />
      </span>
      <p className="text-xl tracking-wider my-2 mb-8">{name}</p>
      <NavLink to="/orderform" onClick={()=>addToStorage(detail[0])} className="bg-pink-700 p-4  text-white flex items-center justify-between text-xl w-full rounded-b-2xl">
      سفارش<p>{price} تومان </p></NavLink>
 
    </div>

  );
}
