import "./App.css";
import Layout from "./layout/Layout";
import { Switch , Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import RegisterPage from "./Pages/RegisterPage";
import LoginPage from "./Pages/LoginPage";

function App() {
  return (
    <>
      <Layout>
        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/" exact component={HomePage} />
        </Switch>
      </Layout>
    </>
  );
}

export default App;
