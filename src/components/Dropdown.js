import React from "react";
import {Link} from 'react-router-dom'
import {BiUser} from 'react-icons/bi'
import {useDispatch} from 'react-redux'
import { logout } from "../feature/auth/authSlice";

function Dropdown() {
  
  const dispatch=useDispatch();
  
  return (
    <div className="flex justify-center">
      <div>
        <div className="dropdown relative">
          <Link
            className="
          dropdown-toggle
          px-2
          py-1
          text-white
          font-medium
          text-md
          leading-tight
          rounded
          shadow-md
          hover:bg-yellow-200 hover:shadow-lg hover:text-black
          focus:bg-yellow-200 focus:shadow-lg focus:outline-none focus:text-black
          active:bg-blue-800 active:shadow-lg active:text-white
          transition
          duration-200
          ease-in-out
          flex
          items-center
          whitespace-nowrap
        "
            to="/"
            type="button"
            id="dropdownMenuButton2"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <BiUser className="text-3xl"/>
            <svg
            className="mx-2"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="caret-down"
              className="w-2 ml-2"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path
                fill="currentColor"
                d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
              ></path>
            </svg>
          </Link>
          <ul
            className="
          dropdown-menu
          min-w-max
          absolute
          hidden
          bg-white
          z-1000
          float-left
          py-2
          list-none
          text-center
          rounded-lg
          shadow-lg
          mt-1
          hidden
          m-0
          bg-clip-padding
          border-none
        "
            aria-labelledby="dropdownMenuButton2"
          >
            <li>
              <Link
                className="
              dropdown-item
              text-lg
              py-2
              px-4
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-700
              hover:bg-gray-200
            "
                to="/profile"
              >
                پروفایل من
              </Link>
            </li>
            <li>
              <Link
                className="
              dropdown-item
              text-lg
              py-2
              px-4
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-700
              hover:bg-gray-200
            "
                to="/userorders"
              >
                سفارشات من
              </Link>
            </li>
            <li  >
              <Link
              onClick={()=>dispatch(logout())}
                className="
              dropdown-item
              text-lg
              py-2
              px-4
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-700
              hover:bg-gray-200
            "
                to="/"
              >
                خروج
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Dropdown;
