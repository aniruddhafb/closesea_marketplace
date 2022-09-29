import React from "react";
import Image from "next/image";

const Collection_Card_Item = ({ image, name, description }) => {
  return (
    <div className="my-10">
      <div className=" rounded-2xl">
        {/* Image */}
        <div>
          <Image
            src={image}
            objectFit="cover"
            height={300}
            width={500}
            className="rounded-t-2xl rounded-bl-[80px]"
          />
        </div>
        {/* CARD INFO */}
        <div className="text-white my-2">
          <h1 className=" font-bold">{name}</h1>
          <p className="text-xs">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Collection_Card_Item;
