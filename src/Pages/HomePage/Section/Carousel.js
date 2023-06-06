import { Carousel } from "antd";
import img1 from "../../../Assets/Images/college1.jpg";
import img2 from "../../../Assets/Images/college2.jpg";
import img3 from "../../../Assets/Images/college3.jpg";
import img4 from "../../../Assets/Images/college4.jpg";
import { LayoutImg2 } from "./Section.style";

const App2 = () => {
  return (
    <Carousel autoplay>
      <div>
        <LayoutImg2 src={img1} />
      </div>
      <div>
        <LayoutImg2 src={img2} />
      </div>
      <div>
        <LayoutImg2 src={img3} />
      </div>
      <div>
        <LayoutImg2 src={img4} />
      </div>
      {/* <div> 
        <LayoutImg2 src={img5} />
      </div>*/}
    </Carousel>
  );
};
export default App2;
