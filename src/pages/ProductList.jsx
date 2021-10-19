import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcements from "../components/Announcements";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { mobile } from "../responsive";
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  text-transform: capitalize;
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option`
  text-transform: capitalize;
`;

const ProductList = () => {

  const location = useLocation();
  const [filter, setFilter] = useState({});
  const [sort, setSort] = useState({});
  const [category, setCategory] = useState(location.pathname.split("/")[2]);


  const handleFilters = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setFilter({
      ...filter,
      [name]: value,
    });
  }

  

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <Container>
      <Navbar />
      <Announcements />
      <Title>Products</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select name="color" onChange={handleFilters}>
            <Option selected disabled hidden>
              Color
            </Option>
            <Option>white</Option>
            <Option>black</Option>
            <Option>red</Option>
            <Option>blue</Option>
            <Option>yellow</Option>
            <Option>green</Option>
          </Select>
          <Select name="size" onChange={handleFilters}>
            <Option selected disabled hidden>
              Size
            </Option>
            <Option>s</Option>
            <Option>m</Option>
            <Option>l</Option>
            <Option>xl</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Category:</FilterText>
          <Select onChange={(e) => setCategory(e.target.value)}>
            <Option value="" selected disabled hidden>{category}</Option>
            <Option value="sale">Sale</Option>
            <Option value="casual">Casual</Option>
            <Option value="business">Business</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value="newest">Popular</Option>
            <Option value="newest">Newest</Option>
            <Option value="asc">Price (Lowest)</Option>
            <Option value="desc">Price (Highest)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products filter={filter} sort={sort} category={category} />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;