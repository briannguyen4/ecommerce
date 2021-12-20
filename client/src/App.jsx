import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Success from "./pages/Success";

const App = () => {
  const user = false;
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />}>
          <Route path=":category" element={<ProductList />} />
        </Route>
        <Route path="/product">
          <Route path=":id" element={<Product />} />
        </Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="/success" element={<Success />} />
        <Route path="/login" element={
          user ? (
            <Navigate to="/" />
          ) : (
            <Login/>
          )}
        />
        <Route path="/register" element={
          user ? (
            <Navigate to="/" />
          ) : (
            <Register/>
          )}
        />
      </Routes>
    </Router>
  );
};

export default App;