import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { addProduct } from '../redux/cartRedux';


const Info = styled.div`
  opacity: 0;
  width: 400px;
  height: 500px;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  flex-direction: column;
  margin: 5px;
  //max-width: 400px;
  //min-width: 400px;
  display: flex;
  //align-items: center;
  //justify-content: center;
  background-color: white;
  position: relative;
  &:hover ${Info} {
    opacity: 1;
  }
`;

const Image = styled.img`
  height: 500px;
  width: 100%;
  
  display: block;
  min-width:400px;
  min-height:500px;
  max-width:350px;
  max-height:500px;
  width: auto;
  height: auto;
  object-fit: cover;
  z-index: 2;
`;

const Details = styled.div`
`;

const Title = styled.h2`
`;

const Price = styled.h3`
`;


const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;




const Product = ({ item }) => {

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(addProduct({...item}))
  }


  return (
    <Container>
      <Image src={item.img} />
      <Details>
        <Title>{item.title}</Title>
        <Price>${item.price}</Price>        
      </Details>
      <Info>
        <Icon onClick={handleClick}>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <Link to={`/product/${item._id}`}>
            <SearchOutlined />
          </Link>
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
