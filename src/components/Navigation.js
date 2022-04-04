import { NavLink, withRouter } from "react-router-dom";
import blacklogo from "../assets/logo2.png";
import { CgShoppingCart } from "react-icons/cg";
import { HiOutlineLogin } from "react-icons/hi";
import {useSelector} from 'react-redux'
import Dropdown from "./Dropdown";

function Navigation() {

  const { user } = useSelector(
    (state) => state.auth
  ) 


  

  return (
    <nav className="flex  items-center text-lg shadow-lg  justify-between w-full sticky  md:px-4  lg:px-12 py-4 bg-pink-700 text-white ">
      <div className="flex w-2/3  items-center ">
        <div className="w-12 h-12 ml-8">
          <img src={blacklogo} className="cover-fill" />
        </div>
        <ul className="flex justify-between w-4/6  ">
          <li>
            <NavLink to="/" exact activeClassName="active-nav">
              صفحه اصلی
            </NavLink>
          </li>
          <li>
            <NavLink to="/samples" activeClassName="active-nav">
              نمونه ها
            </NavLink>
          </li>

          <li>
            <NavLink to="/order" activeClassName="active-nav">
              سفارش
            </NavLink>
          </li>
          <li>
            <NavLink to="/aboutus" activeClassName="active-nav">
              درباره ما
            </NavLink>
          </li>
          <li>
            <NavLink to="/questions" activeClassName="active-nav">
              سوالات متداول
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex w-1/3 items-center justify-end ">
        <NavLink to="/shopingcart" className="relative lg:ml-4 ml-2">
          <span className="rounded-full w-6 h-6 flex justify-center items-center bottom-5 left-5 bg-black text-yellow-200 absolute" >0</span>
          <CgShoppingCart className="text-3xl"/>
        </NavLink>

        <NavLink to="/register" className="flex items-center">
          {user ? <Dropdown /> :
          <><HiOutlineLogin className="text-3xl ml-2" />
          ورود</>
           }
          
        </NavLink>
      </div>
    </nav>
  );
}

export default withRouter(Navigation);
