import React from "react";
import image from "../assets/nftImage.jpg";
import Image from "next/image";

const Collection_Card_Item = () => {
  return (
    <div className="my-10">
      <div className=" rounded-2xl">
        {/* Image */}
        <div>
          <Image
            src={image}
            objectFit="cover"
            height={400}
            className="rounded-t-2xl rounded-bl-[80px]"
          />
        </div>
        {/* CARD INFO */}
        <div className="text-white my-2">
          <h1 className=" font-bold">Bored Ape yacht Club</h1>
          <p className="text-xs">
            Lorem ipsum dolor sit amet consectetur sample...
          </p>
        </div>
      </div>
    </div>
  );
};

export default Collection_Card_Item;
