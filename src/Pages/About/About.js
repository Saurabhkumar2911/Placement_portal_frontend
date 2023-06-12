import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Div1 } from "./About.style";
import { Multicard } from "./About.style";
import { Tech } from "./About.style";
import Member1 from "../../Assets/Images/saurabh.jpg";
import Html1 from "../../Assets/Images/html.png";
import css from "../../Assets/Images/css-3.png";
import Rt from "../../Assets/Images/react.png";
// import img from "../../Assets/Images/aboutback1.jpg";
import Javascript from "../../Assets/Images/javascript.png";
import mongodb from "../../Assets/Images/database.png";

export default function ActionAreaCard() {
  return (
    <>
      <Div1
        style={{
          // backgroundImage: `url(${img})`,
          backgroundImage:
            "linear-gradient(to right bottom, #03010e, #0e091c, #141128, #181534, #1e1941, #242c56, #2a406b, #31557f, #517e99, #80a6b2, #b7cecf, #f1f5f4)",
          minHeight: `100vh`,
          backgroundSize: `cover`,
        }}
      >
        <h1
          style={{
            margin: `50px 0 0 0`,
            color: `#fff`,
          }}
        >
          Myself Saurabh Kumar I am a full stack Web Developer and i have
          amazing experience while creating this college placement portal!
        </h1>

        <Multicard>
          <Card
            sx={{ maxWidth: 300 }}
            style={{
              border: "none",
              borderRadius: "20px",
              boxShadow: "10px 10px 10px rgb(0,0,0,0.4)",
            }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="auto"
                width="80%"
                image={Member1}
                alt="Member 1"
              />
              <CardContent
                style={{
                  backgroundImage:
                    "linear-gradient(to top, #fddb92 0%, #d1fdff 100%)",
                }}
              >
                <Typography gutterBottom variant="h5" component="div">
                  SAURABH KUMAR
                </Typography>
                <Typography>
                  <h5>University Roll: 19050440037</h5>
                  <h5>Branch: Computer Science and Engineering</h5>
                  <h5>College Roll: 2K19/CSE/301</h5>
                  <h5>Batch: 2019-2023</h5>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card
            sx={{ maxWidth: 300 }}
            style={{
              border: "none",
              borderRadius: "20px",
              boxShadow: "10px 10px 10px rgb(0,0,0,0.4)",
            }}
          ></Card>
        </Multicard>
      </Div1>

      <Tech>
        <h1>Technologies Used</h1>

        <div className="main">
          <div className="data">
            <img src={Html1} alt="html" />
            HTML
          </div>
          <div className="data">
            <img src={css} alt="css" />
            CSS
          </div>
          <div className="data">
            <img src={Rt} alt="react" />
            React JS
          </div>
          <div className="data">
            <img src={Javascript} alt="javascript" />
            JavaScript
          </div>
          <div className="data">
            <img src={mongodb} alt="mongodb" />
            mongoDB
          </div>
        </div>
      </Tech>
    </>
  );
}
