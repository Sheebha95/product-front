import React, { useState, useEffect } from "react";
import ProductTable from "./ProductTable";
import ProductForm from "./ProductForm";
import { Button } from "@mui/material";
import axios from "axios";


const App = async (product) => {
  
  const [products, setProducts] = useState([]);
  const [showProduct, setShowProduct] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  useEffect(() => {
    fetchProduct(); 
    }, []);

  const fetchProduct = async () => {
    try {
    const response = await axios.get("http://localhost:5000/products");
    console.log("Response", response.data);
    //setProducts(response.data);
  } catch (error){
    console.log(error);
  }
};

  const handleAddProduct = async (product) => {
    console.log("NewPeoduct", product);
    try{ 
      const response = await axios.post("https://localhost:5000/product", product);
      console.log("response", response.data);
      //setProducts(response.data);
      setProducts([...products, product]);
    } catch (error){
          console.log(error);
    }
    
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