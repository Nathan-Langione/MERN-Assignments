import "./App.css";
// eslint-disable-next-line
import ProductForm from "./components/ProductForm";
import { Router, navigate } from "@reach/router";
import Main from "./views/Main";
import DisplayProduct from "./components/DisplayProduct";
import EditProduct from "./components/EditProduct";
import axios from "axios";

function App() {
  const handleDeleteProduct = (id) => {
    axios
      .delete(`http://localhost:8000/api/products/${id}`)
      .then((response) => {
        console.log("success deleting", response);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="App">
      <Router>
        <Main path="/" handleDeleteProduct={handleDeleteProduct} />
        <DisplayProduct
          handleDeleteProduct={handleDeleteProduct}
          path="/:_id"
        />
        <EditProduct path="/:id/edit" />
      </Router>
    </div>
  );
}

export default App;