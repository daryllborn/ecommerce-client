import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";

const Info = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  border: solid 1px;
  padding: 10px;
  background-color: transparent;
  color: gray;
  cursor: pointer;
  font-weight: 600;
  font-size: 30px;
  &:hover {
    color: white;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: "50vh" })}
`;

const Container = styled.div`
  flex: 1;
  margin: 20px;
  height: 70vh;
  position: relative;
  transition: all 0.5s ease-in-out;

  &:hover {
    //border: 1px solid lightgray;
    transform: scale(1.05);
  }
  &:hover ${Button} {
    color: white;
  }
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Link to={`/products/${item.cat}`}>
        <Image src={item.img} />
        <Info>
          <Button>{item.title}</Button>
        </Info>
      </Link>
    </Container>
  );
};

export default CategoryItem;
