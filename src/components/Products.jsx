import styled from "styled-components";
//import { popularProducts } from "../data";
import Product from "./Product";
import { useState, useEffect } from "react";
import axios from "axios";
import { publicRequest } from "../requestMethods";

const Container = styled.div`
  justify-self: center;
  padding: 30px;
  //margin-top: 40px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  //grid-gap: 20px;
  /*display: flex;
  flex-wrap: wrap;
  justify-content: space-between;*/
`;

const Products = ({ filter, sort, category }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await publicRequest.get(
          category
            ? `/products?category=${category}`
            : "/products"
        );
        setProducts(res.data);
      } catch (err) {}
    };
    getProducts();
  }, [category]);

  useEffect(() => {
    category &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filter).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, category, filter]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  return (
    <Container>
      {category
        ? filteredProducts.map((item) => <Product item={item} key={item.id} />)
        : products
            .slice(0, 8)
            .map((item) => <Product item={item} key={item.id} />)}
    </Container>
  );
};

export default Products;
