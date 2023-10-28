import styled from "styled-components";
import { Link } from "react-router-dom";

const ListingGrid = ({ itemList }) => {
  return (
    <GridContainer>
      {itemList.map((item) => (
        <GridItem key={item.id}>
          <Link to={`/items/${item.id}`}>
            <img src={item.imageSrc} alt={item.name} width="100" />
            <h3>{item.name}</h3>
            <p>{item.latinName}</p>
          </Link>
        </GridItem>
      ))}
    </GridContainer>
  );
};

export default ListingGrid;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin: 20px 0;
`;

const GridItem = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  text-align: center;
`;
