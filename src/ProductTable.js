import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";

const ProductTable = ({ products, onEdit, onDelete }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Model Name</TableCell>
            <TableCell>Brand</TableCell>
            <TableCell>Screen Size</TableCell>
            <TableCell>Display</TableCell>
            <TableCell>Resolution</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.modelName}>
              <TableCell>{product.brand}</TableCell>
              <TableCell>{product.screenSize}</TableCell>
              <TableCell>{product.display}</TableCell>
              <TableCell>{product.resolution}</TableCell>
              <TableCell>
                <Button onClick={() => onEdit(product)}>Edit</Button>
                <Button onClick={() => onDelete(product.modelName)}>Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProductTable;