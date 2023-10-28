import SellerListingGrid from "./SellerListingGrid";
import { sellers } from "../data";
import styled from "styled-components";

const Sellers = () => {
  const sellerList = Object.values(sellers);

  return (
    <Wrapper>
      <p>Here are our world renowed sellers:</p>
      <SellerListingGrid sellerList={sellerList} />
    </Wrapper>
  );
};

export default Sellers;

const Wrapper = styled.div`
  > p {
    margin-left: 15%;
  }
`;
