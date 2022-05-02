import "./App.css";
import Layout from "./layout/Layout";
import { Switch, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import RegisterPage from "./Pages/RegisterPage";
import LoginPage from "./Pages/LoginPage";
import ShopingCart from "./Pages/ShopingCart";
import store from "./feature/store";
import { Provider } from "react-redux";
import ProfilePage from "./Pages/ProfilePage";
import UserOrders from "./Pages/UserOrders";
import FaqPgae from "./Pages/FaqPgae";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Provider store={store}>
        <Layout>
          <ToastContainer
            style={{
              fontSize: "1.2rem",
              zIndex: "1000000",
            }}
          />
          <Switch>
            <Route path="/userorders" component={UserOrders} />
            <Route path="/profile" component={ProfilePage} />
            <Route path="/shopingcart" component={ShopingCart} />
            <Route path="/faq" component={FaqPgae} />
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
            <Route path="/" exact component={HomePage} />
          </Switch>
        </Layout>
      </Provider>
    </>
  );
}

export default App;
