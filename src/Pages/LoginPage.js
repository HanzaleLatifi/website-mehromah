import { useFormik } from "formik";
import { Link, withRouter } from "react-router-dom";
import * as Yup from "yup";
import Input from "../common/Input";

const initialValues = {
  email: "",
  password: "",
 
};
const validationSchema = Yup.object({
  email: Yup.string().email("ایمیل نا معتبر است").required("لطفا نام کاربری خود را وارد كنيد"),
  password: Yup.string().required("رمز عبور خود را وارد كنيد"),
});

function LoginPage({history}) {
  const onSubmit = (values) => {
    const { email , password } = values;
    const userdata = {
      email,
      password,
     
    };
    try {
      // setAuth(userdata)
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
    <div className="rounded-xl bg-yellow-200 lg:w-1/4 mx-auto my-4 lg:my-20 ">
      <form onSubmit={formik.handleSubmit} className="p-4 flex flex-col items-center ">
        <Input formik={formik} label="نام کاربری" name="email" />

        <Input
          formik={formik}
          label="رمز عبور"
          name="password"
          type="password"
        />
        <button
          type="submit"
          className="px-6  py-2 w-1/2 text-xl text-white bg-pink-600 rounded-xl mt-4 mb-4 "
          disabled={!formik.isValid}
        >
          ورود
        </button>

        <Link to="/register" className="text-lg">ایجاد حساب کاربری</Link>
      </form>
    </div>
  );
}

export default withRouter(LoginPage);