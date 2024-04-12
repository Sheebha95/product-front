import React, { useState, useEffect } from "react";
import ProductTable from "./ProductTable";
import ProductForm from "./ProductForm";
import { Button } from "@mui/material";
import axios from "axios";


const App = async (product) => {
  try{ 
  const response = await axios.post("https://localhost:5000/product", product);
  console.log("response", response.data);
  setProducts(response.data);
} catch (error){
      console.log(error);
}
  const [products, setProducts] = useState([]);
  const [showProduct, setShowProduct] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  useEffect(() => {
    fetchProduct();
    // Fetch todos from API
    // setTodos([
    //   { id: 1, title: "Todo 1", description: "Description 1" },
    //   { id: 2, title: "Todo 2", description: "Description 2" },
    //   { id: 3, title: "Todo 3", description: "Description 3" },
    // ]);
  }, []);

  const fetchProduct = async () => {
    try {
    const response = await axios.get("http://localhost:5000/products", product);
    console.log("Response", response.data);
    setProducts(response.data);
  } catch (error){
    console.log(error);
  }
};

  const handleAddProduct = (product) => {
    setProducts([...products, product]);
  };

  const handleEditProduct = (product) => {
    console.log(product);
    setShowProduct(true);
    setEditingProduct(product);
  };

  const handleUpdateProduct = (updatedProduct) => {
    setProducts(
      products.map((product) => (product.id === updatedProduct.id ? updatedProduct : product))
    );
    setEditingProduct(null);
  };

  const handleDeleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };
  const handleAdd = () => {
    setShowProduct(true);
    setEditingProduct("");
  };
  return (
    <div>
      <h1>product App</h1>
      <Button onClick={handleAdd}>Add</Button>
      <ProductTable
        products={products}
        onEdit={handleEditProduct}
        onDelete={handleDeleteProduct}
      />
      {editingProduct && showProduct && (
        <>
          <h2>Edit product</h2>
          <ProductForm product={editingProduct} onSubmit={handleUpdateProduct} />
        </>
      )}
      {!editingProduct && showProduct && (
        <>
          <h2>Add Product</h2>
          <ProductForm onSubmit={handleAddProduct} />
        </>
      )}
    </div>
  );

};

export default App;