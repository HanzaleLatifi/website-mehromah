import "./App.css";
import Layout from "./layout/Layout";
import { Switch , Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Login from "./components/Login";

function App() {
  return (
    <>
      <Layout>
        <Switch>
          <Route path="login" component={Login} />
          <Route path="/" exact component={HomePage} />
        </Switch>
      </Layout>
    </>
  );
}

export default App;
