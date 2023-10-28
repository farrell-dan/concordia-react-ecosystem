//src/components/Home.js

import ListingGrid from "./ListingGrid";
import { items } from "../data";
import styled from "styled-components";

const Home = () => {
  const itemList = Object.values(items);

  return (
    <Wrapper>
      <p>Fruit emporium sells the finest fruits from this world and beyond.</p>
      <p style={{fontWeight: "bold"}}>Browse items:</p>
      <ListingGrid itemList={itemList} />
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
 > p{
    margin-left: 15%;
 }
`