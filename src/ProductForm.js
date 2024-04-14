import React, { useState, useEffect } from "react";
import { TextField, Button } from "@mui/material";

const ProductForm = ({ onSubmit, product }) => {
  const [modelName, setModelName] = useState("");
  const [brand, setBrand] = useState("");
  const [screenSize, setScreenSize] = useState("");
  const [display, setDisplay] = useState("");
  const [resolution, setResolution] = useState("");

  

  useEffect(() => {
    if (product) {
      setModelName(product.modelName);
      setBrand(product.brand);
      setScreenSize(product.screenSize);
      setDisplay(product.display);
      setResolution(product.resolution);
    }
  }, [product]);

  
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ modelName, brand, screenSize, display, resolution });
    setModelName("");
    setBrand("");
    setScreenSize("");
    setDisplay("");
    setResolution("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Model Name"
        value={modelName}
        onChange={(e) => setModelName(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Brand"
        value={brand}
        onChange={(e) => setBrand(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="ScreenSize"
        value={screenSize}
        onChange={(e) => setScreenSize(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Display"
        value={display}
        onChange={(e) => setDisplay(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Resolution"
        value={resolution}
        onChange={(e) => setResolution(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary">
        {product ? "Update" : "Submit"}
      </Button>
    </form>
  );
};

export default ProductForm;