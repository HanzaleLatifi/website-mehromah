import { useFormik } from "formik";
import { Link, withRouter } from "react-router-dom";
import * as Yup from "yup";
import Input from "../common/Input";
import { useDispatch } from "react-redux";
import { register } from "../feature/auth/authSlice";

const initialValues = {
  username: "",
  email: "",
  password: "",
  passwordConfirm: "",
  phoneNumber: "",
};
const validationSchema = Yup.object({
  username: Yup.string().required("لطفا نام کاربری خود را وارد كنيد"),
  email: Yup.string()
    .required("ايميل خود را وارد كنيد")
    .email("ايميل نامعتبر است"),
  password: Yup.string().required("رمز عبور خود را وارد كنيد"),
  passwordConfirm: Yup.string()
    .required("رمز عبور خود را مجددا وارد كنيد")
    .oneOf([Yup.ref("password"), null], "با رمز شما مطابقت ندارد"),
  phoneNumber: Yup.number("شماره وارد شده نامعتبر است !").required("شماره همراه خود را وارد كنيد"),
});

function RegisterPage({history}) {

  const dispatch=useDispatch() 

  const onSubmit = (values) => {
    const { username, email, phoneNumber, password } = values;
    const userdata = {
      username,
      email,
      password,
      phoneNumber,
    };
    try {
      
      dispatch(register(userdata))
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
    <div className="rounded-xl bg-yellow-200 lg:w-1/4 mx-auto my-4 lg:my-8 ">
      <form onSubmit={formik.handleSubmit} className="p-4 flex flex-col items-center ">
        <Input formik={formik} label="نام کاربری" name="username" />
        <Input formik={formik} label="ايميل" name="email" />
        <Input formik={formik} label="تلفن همراه" name="phoneNumber" />

        <Input
          formik={formik}
          label="رمز عبور"
          name="password"
          type="password"
        />
        <Input
          formik={formik}
          label="رمز عبور مجدد"
          name="passwordConfirm"
          type="password"
        />
        <button
          type="submit"
          className="px-6  py-2 w-1/2 text-xl text-white bg-pink-600 rounded-xl mt-4 mb-4 "
          disabled={!formik.isValid}
        >
          ثبت نام
        </button>

        <Link to="/login">ورود به حساب كاربری</Link>
      </form>
    </div>
  );
}

export default withRouter(RegisterPage);
