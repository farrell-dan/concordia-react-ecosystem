import { useParams } from "react-router-dom";
import { items, sellers } from "../data";
import styled from "styled-components";

const ItemDetails = () => {
  const { itemId } = useParams();
  const item = items[itemId];
  if (!item) {
    return <div> Item not found</div>;
  }
  const seller = sellers[item.sellerId];
  return (
    <Wrapper>
      <PictureWrapper>
        <FruitPic src={item.imageSrc} alt={item.name} />
      </PictureWrapper>
      <InfoWrapper>
        <Name>{item.name}</Name>
        <LatinName>{item.latinName}</LatinName>
        <Description>{item.description}</Description>
        <Location>Product of: {item.countryOfOrigin}</Location>
        <Stock>
          {" "}
          {item.quantity > 0 ? (
            <Button> Buy Now </Button>
          ) : (
            <p> Out of Stock </p>
          )}
        </Stock>
      </InfoWrapper>
      <SellerWrapper>
        Sold by:
        <SellerPic src={seller.avatarSrc} alt={seller.name} />
        <Store>{seller.storeName} </Store>
      </SellerWrapper>
    </Wrapper>
  );
};
export default ItemDetails;

const Wrapper = styled.div`
  display: flex;
  height: 400px;
  width: 800px;
  margin: auto;
`;

const PictureWrapper = styled.div`
  width: 50%;
`;
const FruitPic = styled.img`
  display: inline-flex;
  float: left;
  width: 400px;
  height: 400px;
  border-radius: 8%;
`;

const InfoWrapper = styled.div`
  display: inline-flex;
  height: 400px;
  width: 25%;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: stretch;
  align-content: center;
  margin: 0;
`;

const Name = styled.h1`
  display: flex;
  justify-content: center;
  margin: 0;
`;

const LatinName = styled.p`
  display: flex;
  justify-content: center;
  margin: 0;
  color: grey;
  font-style: italic;
`;

const Description = styled.p`
  display: flex;
  text-align: justify;
  margin: 5px 5px;
`;

const Location = styled.p`
  display: flex;
  justify-content: center;
  margin: 5px 0;
`;

const Stock = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  width: 100px;
  height: 30px;
  background-color: lightblue;
  color: white;
  border: 3px solid darkblue;
  border-radius: 5px;
`;
const SellerWrapper = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SellerPic = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

const Store = styled.h3`
  display: flex;
  justify-content: center;
`;
