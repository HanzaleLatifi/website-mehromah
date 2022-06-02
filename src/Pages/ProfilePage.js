import React from "react";
import image from "../assets/images.png";
import { useEffect, useState } from "react";
import axios from "axios";
import { useFormik } from "formik";
import Input from "../common/Input";
import { useSelector, useDispatch } from "react-redux";
import { getAysncProfile } from "../feature/profile/profileSlice";
import { toast } from "react-toastify";

const initialValues = {
  name: "",
  last_name: "",
  phone: "",
  phone2: "",
  province: "",
  address: "",
};
const getToken = () => {
  const tokenString = sessionStorage.getItem("user");
  const userToken = JSON.parse(tokenString);
  return userToken?.token;
};

function ProfilePage() {
  const profile = useSelector((state) => state.profile);
  console.log(profile)
  const dispatch = useDispatch();
  const [token, setToken] = useState(getToken());
  const [formData, setFormData] = useState({});

  useEffect(() => {
   dispatch(getAysncProfile());
    try {
      setFormData(profile);
    } catch (error) {
      setFormData({});
    }
  }, [token,profile]);

  const config = {
    headers: {
      Authorization: `Token ${token}
      `,
    },
  };

  const onSubmit = (values) => {
    const userData = {
      user: {
        username: profile.email,
        phone: values.phone,
      },
      name: values.name,
      last_name: values.last_name,
      phone2: values.phone2,
      province: values.province,
      address: values.address,
    };

    axios
      .put("http://127.0.0.1:8000/api/accounts/profile/", userData, config)
      .then(() => {
        toast.success("پروفایل شما با موفقیت ویرایش شد");
      })
      .catch((e) => {});
  };
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: formData || initialValues,
    onSubmit,
    validateOnMount: true,
  });

  return (
    <section className="text-2xl mt-8 flex w-4/5 mx-auto rounded-3xl">
      <div className="flex flex-col bg-white pt-4 max-h-72 w-1/3 items-center rounded-3xl shadow-2xl  ">
        <div className="w-40 h-40  p-2 mb-8  ">
          <img src={image} className="text-center" />
        </div>
        <p className=" text-white  bg-pink-700 w-full py-2 px-4">
          <span className="pl-6">ایمیل :</span>
          {profile.email}
        </p>
      </div>

      <div className="flex flex-col w-2/3 shadow-xl rounded-3xl  mr-8 ">
        <div className=" text-center mb-4 bg-white  rounded-3xl">
          <p className="mb-4 bg-pink-700 rounded-t-3xl text-white p-2">
            اطلاعات شخصی
          </p>
          <form
            onSubmit={formik.handleSubmit}
            className="flex flex-col p-2 items-center pb-8 w-full"
          >
            <div className="flex w-full ">
              <Input formik={formik} label="نام" name="name" />
              <Input formik={formik} label="نام خانوادگی" name="last_name" />
            </div>
            <div className="flex w-full my-4">
              <Input formik={formik} label="شماره همراه" name="phone" />
              <Input formik={formik} label="شماره ثابت" name="phone2" />
            </div>
            <div className="flex w-full">
              <Input formik={formik} label="استان" name="province" />
              <Input formik={formik} label="آدرس" name="address" />
            </div>

            <button type="submit" className="btn mt-8 w-1/4 rounded-3xl">
              ویرایش
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ProfilePage;
