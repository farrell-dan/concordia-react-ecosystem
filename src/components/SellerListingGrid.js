import styled from "styled-components";
import { NavLink } from "react-router-dom";



const SellerListingGrid = ({ sellerList }) => {

  console.log({ sellerList });

  return (
    <GridContainer>
      {sellerList.map((seller) => (
        <GridItem key={seller.id}>
          <Link
            to={`/sellers/${seller.id}`}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <img src={seller.avatarSrc} alt={seller.storeName} width="100" />
            <h3>{seller.storeName}</h3>
            <p>{seller.description}</p>
          </Link>
        </GridItem>
      ))}
    </GridContainer>
  );
};

export default SellerListingGrid;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin: 20px 0;
`;

const GridItem = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  text-align: center;
`;


const Link = styled(NavLink)`
  text-decoration: none;
  margin: 10px 10px;
  font-size: 16px;
  color: green;

  &.active {
    text-decoration: underline;
    color: blue;
  }
`;