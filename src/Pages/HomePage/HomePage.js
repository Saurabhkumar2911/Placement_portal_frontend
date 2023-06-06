import React from "react";
import Section from "./Section/Section";
import Carousel from "./Section/Carousel";
// import Graph from "./Section/View";
function HomePage() {
  return (
    <div>
      <Carousel />
      {/* <Graph /> */}
      <Section />
    </div>
  );
}

export default HomePage;
