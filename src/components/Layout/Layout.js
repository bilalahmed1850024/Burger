import React from "react";
import Auxs from "../../hoc/Auxs";
import  "./Layout.css"

const layout = (props) => (
  <Auxs>
    <div>TOOLBAR , SIDEDRAWER,BACKDROP</div>
    <main className="Content" >{props.children}</main>
  </Auxs>
);

export default layout;
