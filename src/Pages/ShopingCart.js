import React from "react";
import { BiTrash } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import {NavLink} from "react-router-dom"
import { addToCart, decCart, incCart } from "../feature/cart/cartSlice";

function ShopingCart() {
  const cart = useSelector((state) => state.cart);
  const isAuth=useSelector((state)=>state.auth)
  console.log(isAuth.user)
  const dispatch = useDispatch();
  const sumPrice = cart.length
  ? cart.reduce((acc, curr) => acc + curr.count * curr.price, 0)
  : "0";

  return (
    <section className="my-12 container flex mx-auto  ">
      <div className="w-3/4  bg-white shadow-xl rounded-2xl ml-14 pb-4">
        <div className="bg-black p-2 text-xl text-yellow-100 flex justify-around items-center rounded-t-2xl">
          <p>ردیف</p>
          <p>عکس محصول</p>
          <p>نوع محصول</p>
          <p>تعداد</p>
          <p>قیمت (تومان)</p>
        </div>
        {cart.length ? (
          cart.map((item, index) => {
            return (
              <Item
                name={item.name}
                price={item.price}
                key={item.productID}
                count={item.count}
                row={++index}
                detail={item}
              />
            );
          })
        ) : (
          <div className="w-full  text-center flex flex-col space-y-10 items-center  lg:my-10">
            <p className="text-xl "> محصولی در سبد خرید شما وجود ندارد !</p>
            <NavLink to="/order" className="text-2xl btnAnim hover:bg-yellow-200 hover:text-black bg-pink-700 px-8 py-2 w-max text-white rounded-2xl">سفارش محصول</NavLink>
          </div>
        )}
      </div>
      <div className="w-1/4 h-64 bg-white text-lg shadow-xl flex flex-col justify-between rounded-2xl ">
        <div className="space-y-6 px-4 py-6">
          <p>قیمت کل : {sumPrice} تومان</p>
          <p>تخفیف : 0 تومان</p>
          <hr />
          <p >مبلغ پرداختی : {sumPrice} تومان</p>
        </div>
        <NavLink  to={isAuth.user?"/factor" :"/login" } className={`${sumPrice==0 ? "" :"btnAnim" } bg-pink-700 text-center text-white p-2 text-2xl rounded-b-2xl hover:bg-yellow-200 hover:text-black`}>
          ادامه خرید
        </NavLink>
      </div>
    </section>
  );
}

export default ShopingCart;

function Item({ name, price, count, row, detail }) {
  const dispatch = useDispatch();
  return (
    <div className="bg-white text-xl w-full p-2 text-black flex justify-around items-center border-b-2 border-gray-500">
      <p className="ml-6">{row} ) </p>
      <div className="h-16 w-16 bg-yellow-100 rounded-xl">
        <img />
      </div>
      <p>{name}</p>
      {/* <p >نوع محصول</p> */}
      <div className="">
        <div className="flex w-28 justify-between ">
          <button
            onClick={() => dispatch(decCart(detail))}
            className=" w-8 bg-red-400 rounded-full  h-8 flex justify-center items-center"
          >
            {count===1 ?<BiTrash/> : <AiOutlineMinus />}
          </button>
          <p className="mx-1 ">{count}</p>
          <button
            onClick={() => dispatch(incCart(detail))}
            className="bg-green-400 w-8 rounded-full  h-8 flex justify-center items-center"
          >
            <AiOutlinePlus />
          </button>
        </div>
      </div>
      <p>{price}</p>
    </div>
  );
}

