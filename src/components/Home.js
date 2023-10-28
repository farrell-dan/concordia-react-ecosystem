import ListingGrid from "./ListingGrid";
import { items } from "../data";

const Home = () => {
  const itemList = Object.values(items);

  return (
    <div>
      <p>Fruit emporium sells the finest fruits from this world and beyond.</p>
      <p>Browse items:</p>
      <ListingGrid itemList={itemList} />
    </div>
  );
};

export default Home;
