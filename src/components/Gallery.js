import React from "react";
import Thumbnail from "./Thumbnail";

import intro from "../assets/thumbnails/intro-to-ct_thumbnail.png";
import plantItForward from "../assets/thumbnails/plant-it-forward_thumbnail.png";
import amendment from "../assets/thumbnails/protection-amendment_thumbnail.png";
import ycyt2 from "../assets/thumbnails/ycyt-2_thumbnail.png";

const Gallery = () => {
  return (
    <div>
      <Thumbnail imgSrc={intro}></Thumbnail>
      <Thumbnail imgSrc={plantItForward}></Thumbnail>
      <Thumbnail imgSrc={amendment}></Thumbnail>
      <Thumbnail imgSrc={ycyt2}></Thumbnail>
    </div>
  );
};

export default Gallery;
