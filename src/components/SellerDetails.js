import { useParams } from "react-router-dom";
import { sellers } from "../data";
import styled from "styled-components";

const SellerDetails = () => {
  const { sellerId } = useParams();
  const seller = sellers[sellerId];
  if (!seller) {
    return <div> Seller not found</div>;
  }
  return (
    <ResponsiveWrapper>
      <PictureWrapper>
        <FruitPic src={seller.avatarSrc} alt={seller.storeName} />
      </PictureWrapper>
        <ProductWrapper>
          <Name>{seller.storeName}</Name>
          <Description>{seller.description}</Description>
        </ProductWrapper>
    </ResponsiveWrapper>
  );
};
export default SellerDetails;

const ResponsiveWrapper = styled.div`
  display: flex;
  height: 400px;
  width: 800px;
  margin: auto;
  border: 1px solid gray;
  background-color: aliceblue;
  @media (max-width: 800px) {
    display: block;
    width: 400px;
    height: 800px;
  }
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

const ProductWrapper = styled.div`
  display: flex;
  height: 400px;
  width: 400px;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  align-content: center;
  margin: 0;
  justify-content: space-evenly;
`;

const Name = styled.h1`
  display: flex;
  justify-content: center;
  margin: 0;
`;

const Description = styled.p`
  display: flex;
  text-align: justify;
  margin: 5px 5px;
`;
