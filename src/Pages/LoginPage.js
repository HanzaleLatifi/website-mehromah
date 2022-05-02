import { useFormik } from "formik";
import { Link, withRouter } from "react-router-dom";
import * as Yup from "yup";
import Input from "../common/Input";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../feature/auth/authSlice";
import { getAysncProfile } from "../feature/profile/profileSlice";

const initialValues = {
  username: "", //username == email
  password: "",
};
const validationSchema = Yup.object({
  username: Yup.string()
    .email("ایمیل نا معتبر است")
    .required("لطفا ایمیل خود را وارد كنيد"),
  password: Yup.string().required("رمز عبور خود را وارد كنيد"),
});

function LoginPage({ history }) {
  const dispatch = useDispatch();
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  const onSubmit = (values) => {
    const { username, password } = values;
    const userdata = {
      username,
      password,
    };
    dispatch(login(userdata));

    try {
      if (isSuccess) {
        history.push("/");
      }
    } catch (error) {}
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });

  return (
    <div className="rounded-xl shadow-xl lg:w-1/4 mx-auto my-4 lg:my-20 ">
      <form
        onSubmit={formik.handleSubmit}
        className="p-4 flex flex-col items-center  "
      >
        {message && <p className="text-red-600 text-2xl">ایمیل ثبت نشده است</p>}
        <Input formik={formik} label="ایمیل" name="username" />

        <Input
          formik={formik}
          label="رمزعبور"
          name="password"
          type="password"
        />
        <button
          type="submit"
          className="btn px-6  py-2 w-1/2 text-xl text-white bg-pink-600 rounded-xl mt-4 mb-4 "
          disabled={!formik.isValid}
        >
          ورود
        </button>

        <Link to="/register" className="text-lg">
          ایجاد حساب کاربری
        </Link>
      </form>
    </div>
  );
}

export default withRouter(LoginPage);
