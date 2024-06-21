// src/App.js
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import ProductPage from "./components/ProductPage";
import OrderPage from "./components/OrderPage";
import AdminPanel from "./components/AdminPanel";
import Blog from "./components/Blog";
import ContactForm from "./components/ContactForm";
import PrivacyPage from "./components/PrivacyPage";
import Footer from "./components/Footer";
import AuthProvider, { AuthContext } from "./contexts/AuthContext";

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <AuthContext.Consumer>
      {({ currentUser }) => (
        <Route
          {...rest}
          render={(props) =>
            currentUser ? <Component {...props} /> : <Navigate to="/" />
          }
        />
      )}
    </AuthContext.Consumer>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" component={HomePage} />
          <Route path="/osta" component={HomePage} />
          <Route
            path="/:productType(order/senioritabletti|order/senioripuhelin|order/turvaranneke)"
            component={OrderPage}
          />
          <PrivateRoute path="/admin" component={AdminPanel} />
          <Route path="/blog" component={Blog} />
          <Route path="/contact" component={ContactForm} />
          <Route path="/privacy" component={PrivacyPage} />
          <Route
            path="/:productType(senioritabletti|senioripuhelin|turvaranneke)"
            component={ProductPage}
          />
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
  );
};

export default App;
