import React from "react";
import Question from "../components/Question";
import { useEffect , useState } from "react";
import axios from "axios";


function FaqPgae() {
  const [data, setData] = useState([])

  useEffect(() => {

    getFAQ()
  }, []);

  const getFAQ=async()=>{
    await axios.get("http://127.0.0.1:8000/api/home/faq/").then((res)=>{
      setData(res.data)}).catch((e)=>{
        console.log(e)
      })
  }
  

  return (
    <div
      className="accordion w-3/4 min-h-screen mx-auto lg:mt-10"
      id="accordionExample"
    >
      <h3 className="text-center text-4xl mx-auto mb-12 border-2 border-r-0 border-l-0 border-pink-700 py-2 max-w-xs">
        {" "}
        سوالات متداول{" "}
      </h3>
      <Question
        ques="چگونه سفارشات خود را ثبت کنم‌ ؟"
        answer="شما می‌توانید در هرلحظه به صورت آنلاین محصول مورد نظرتان بر روی وبسایت در قسمت سفارش انتخاب کرده و فرم سفارش آن را تکمیل نمایید. توجه داشته باشید که در زمان ثبت سفارش چاپ محصولتان می‌توانید همزمان فایل طراحی خود را برای ما ارسال کرده تا متخصصان فایل چک ما آن را مطابق با استانداردهای چاپی، مورد بررسی قرار دهند. همچنین در صورتی که پیش از چاپ نیاز به طراحی محصولتان داشته باشید می‌توانید به صورت آنلاین از خدمات طراحی ما و گرافیست‌های حرفه‌‌ای مهروماه استفاده نمایید."
        id="headingOne"
        target="collapseOne"
        isShow={true}
      />
      <Question
        ques={"چگونه از خدمات طراحی استفاده کنم؟"}
        answer={"اگر پیش از چاپ محصولتان نیاز به طراحی آن دارید می‌توانید در صفحه اصلی و در قسمت ثبت سفارش طراحی میتوانید کار طراحی همه ی محصولات را به گرافیستای ما بسپارید."}
        id="headingTwo"
        target="collapseTwo"
        isShow={false}
      />
      <Question
        ques={"از چه طریقی می‌توانم وضعیت سفارشاتم را پیگیری کنم؟"}
        answer={"از طریق صفحه اصلی گزینه پیگیری سفارشات را انتخاب کرده و کد سفارش خود را وارد نمایید . یا میتوانید با واحد پیگیری سفارشات تماس حاصل فرمایید . ۰۷۱۵۲۸۵۳۶۸۶"}
        id="heading3"
        target="collapse3"
        isShow={false}
      />
      <Question
        ques={"سفاراشات من چند روزه برایم ارسال میشود ؟"}
        answer={"با توجه به محصول شما و نوع سفارش ( فوری یا عادی ) مدت زمان ارسال تخمین زده میشود ."}
        id="heading4"
        target="collapse4"
        isShow={false}
      />
       <Question
        ques={"شرایط گارانتی به چه صورت است ؟"}
        answer={"چاپ مهروماه برای جلب رضایت و آسودگی خاطر شما مشتریان عزیز برای تمامی محصولات خود ضمانت پس از خرید ارائه می‌دهد. از این رو در صورت وجود مشکل در محصول دریافتی، می‌توانید با کارشناسان مربوطه تماس گرفته و نارضایتی خود را اعلام فرمایید. چنانچه مشکل مطرح شده مشمول قوانین گارانتی باشد و توسط متخصصان این مجموعه تایید گردد می‌توانید محصول معیوب را مرجوع نموده. توجه داشته باشید که حداکثر زمان استفاده از گارانتی متناسب با محصول و مشکل موجود، از لحظه تحویل محصول به شما به مدت ۲ الی ۱۰ روز کاری خواهد بود."}
        id="heading5"
        target="collapse5"
        isShow={false}
      />
    </div>
  );
}

export default FaqPgae;
