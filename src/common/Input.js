
function Input({ formik, name, label, type , placeholder}) {
    return (
      <div className="flex flex-col mb-1 w-full mx-6 my-2 " >
        <label  className="text-xl text-right ">{label}</label>
        <input accept="image/png, image/gif, image/jpeg" placeholder={placeholder} type={type} name={name}  {...formik.getFieldProps(name)} className="p-2 rounded-xl text-base border-b-4 focus:outline-none focus:border-pink-700"></input>
        {formik.errors[name] && formik.touched[name] && (
          <div className="text-red-600">{formik.errors[name]}</div>
        )}
      </div>
    );
  }
  
  export default Input;