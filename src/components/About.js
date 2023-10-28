import styled from "styled-components";

const About = () => {
  return (
    <Wrapper>
      <p>
        Fruit emporium is founded on a very simple principle: Fruit is good.
      </p>
      <p>
        We carry the finest selection of produce from around the world, from
        tart citrus to sweet cherries. Our sellers are world-class, and your
        fruit is guaranteed to be worthy of auction in Asian markets.
      </p>
    </Wrapper>
  );
};

export default About;

const Wrapper = styled.div`
  border: 1px solid grey;
  background-color: peach;
  margin: 10% 15%;
  padding: 5%;
  background-color: aliceblue;

`;