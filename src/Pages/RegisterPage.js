import { useFormik } from "formik";
import { Link, withRouter } from "react-router-dom";
import * as Yup from "yup";
import Input from "../common/Input";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../feature/auth/authSlice";
import "../App.css"

const initialValues = {
  username: "",
  email: "",
  phone: "",
  password: "",
  password2: "",
};
const validationSchema = Yup.object({
  username: Yup.string().required("لطفا نام کاربری خود را وارد كنيد"),
  email: Yup.string()
    .required("ايميل خود را وارد كنيد")
    .email("ايميل نامعتبر است"),
  phone: Yup.number("شماره وارد شده نامعتبر است !").required(
    "شماره همراه خود را وارد كنيد"
  ),
  password: Yup.string().required("رمز عبور خود را وارد كنيد"),
  password2: Yup.string()
    .required("رمز عبور خود را مجددا وارد كنيد")
    .oneOf([Yup.ref("password"), null], "با رمز شما مطابقت ندارد"),
});

function RegisterPage({ history }) {
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  const onSubmit = (values) => {
    const { username, email, phone, password , password2 } = values;
    const userdata = {
      username,
      email,
      phone,
      password,
      password2
    };
    try {
      dispatch(register(userdata));
      history.push("/");
    } catch (error) {}
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });

  return (
    <div className="rounded-xl shadow-xl lg:w-1/4 mx-auto my-4 lg:my-8 ">
      <form
        onSubmit={formik.handleSubmit}
        className="p-4 flex flex-col items-center "
      >
        <Input formik={formik} label="نام کاربری" name="username" />
        <Input formik={formik} label="ايميل" name="email" />
        <Input formik={formik} label="تلفن همراه" name="phone" />

        <Input
          formik={formik}
          label="رمز عبور"
          name="password"
          type="password"
        />
        <Input
          formik={formik}
          label="رمز عبور مجدد"
          name="password2"
          type="password"
        />
        <button
          type="submit"
          className="btn px-6  py-2 w-1/2 text-xl text-white bg-pink-600 rounded-xl mt-4 mb-4 "
          disabled={!formik.isValid}
        >
          ثبت نام
        </button>

        <Link to="/login" className="text-lg">
          ورود به حساب كاربری
        </Link>
      </form>
    </div>
  );
}

export default withRouter(RegisterPage);
