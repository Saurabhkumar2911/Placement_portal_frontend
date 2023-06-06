import React from "react";
import { Layout, LayoutWrapper, LayoutImg, Paragraph } from "./Section.style";
import img5 from "../../../Assets/Images/college5.jpg";

function Section() {
  return (
    <LayoutWrapper>
      <LayoutImg src={img5} />
      <Layout className="box">
        <Paragraph style={{ fontFamily: '"Redressed", cursive' }}>
          "Find out what you like doing best and get someone to pay you for
          doing it!"
        </Paragraph>
      </Layout>
    </LayoutWrapper>
  );
}
export default Section;
