import "./App.css";
import { BrowserRouter, Switch, Route,  Redirect } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Upload from "./components/Upload/Upload";
import Regular from "./components/Regular/Regular";
import Hot from "./components/Hot/Hot";
import ErrorPage from "./components/ErrorPage/ErrorPage";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Header />
        <Navigation />
        <Switch>
          <Route exact path="/regular">
            <Regular />
          </Route>
          <Route exact path="/hot">
            <Hot />
          </Route>
          <Route exact path="/upload">
            <Upload />
          </Route>
          <Route path="*">
            <Redirect to="/regular"/>
            <ErrorPage />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
