import React from "react";
import layer1 from "../assets/background/layer-1.png";
import layer2 from "../assets/background/layer-2.png";
import layer3 from "../assets/background/layer-3.png";
import layer4 from "../assets/background/layer-4.png";
import layer5 from "../assets/background/layer-5.png";

export const layers = [layer1, layer2, layer3, layer4, layer5];

const Background = () => {
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full">
        {layers.map((layer, index) => (
          <img
            key={index}
            src={layer}
            alt="background"
            className="w-full h-full"
          />
        ))}
      </div>
    </>
  );
};

export default Background;
