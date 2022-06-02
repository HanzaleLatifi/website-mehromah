import React from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
function FactorPage() {
  const cart = useSelector((state) => state.cart);
  const sumPrice = cart.length
    ? cart.reduce((acc, curr) => acc + curr.count * curr.price, 0)
    : "0";
    console.log(cart)

  const pay = () => {
    const orderDetail = {
      count:1,
      desc:"desc",
      imgfile: cart.imgfile,
      userId:2,
      productId:2,
      price: 27000,
      name: "name",
    };
    axios.post("http://127.0.0.1:8000/api/orders/detail/", orderDetail);
  };
  return (
    <section className="w-container mx-auto lg:mt-16  flex flex-col justify-center items-center">
      <table className="flex flex-col w-1/2 items-center  bg-white py-4 px-8 rounded-2xl mb-8">
        <tr className="flex text-xl justify-between w-full pb-6 text-pink-700">
          <th>محصول</th>
          <th>تعداد</th>
          <th>قیمت (تومان)</th>
        </tr>
        {cart
          ? cart.map((item) => {
              return (
                <tr className="flex justify-between w-full space-y-2 border-b-2 border-gray-800 p-1" >
                  <td>{item.name}</td>
                  <td className>{item.count}</td>
                  <td>{item.price*item.count}</td>
                </tr>
              );
            })
          : ""}
        <tfoot className="mt-8 ">
          <tr>
            <td className="text-xl">قیمت کل : {sumPrice} تومان</td>
          </tr>
        </tfoot>
      </table>
      <div className="w-1/3 flex justify-evenly">
        <button onClick={()=>{pay()}} className="text-2xl px-10 py-2 btnAnim bg-pink-700 text-white hover:bg-yellow-200 hover:text-black rounded-2xl  ">پرداخت</button>
        <button className="text-2xl px-10 py-2  bg-transparent border-2 border-pink-700 hover:bg-yellow-200 rounded-2xl">بازگشت</button>
      </div>
    </section>
  );
}

export default FactorPage;
