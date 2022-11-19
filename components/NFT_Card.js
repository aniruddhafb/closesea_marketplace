import React from 'react'
import Image from 'next/image'
const NFT_Card = ({ image, name, description, price }) => {
  return (
    <div className="my-5">
      <div className=" rounded-2xl hover:shadow-3xl lg:p-4 bg-gray-800 p-2">
        {/* Image */}
          <Image
            src={image}
            objectFit="cover"
            height={600}
            width={500}
            className="rounded-md w-full "
          />
        {/* CARD INFO */}
        <div className="text-white my-2 flex justify-between items-start">
          <div>
            <h1 className=" font-bold text-gray-500" id="collection_name">{name}</h1>
            <h1 className=" font-bold text-sm" id="nft_title">{description}</h1>
          </div>
            <Image 
            src={image}
            objectFit="cover"
            height={25}
            width={25}
            className="rounded-full "/>
        </div>
        <div className='flex flex-col items-end space-y-2'>
            <h1 className='text-xs text-gray-400'>Price</h1>
            <div className='flex space-x-2 text-white'>
                <Image 
                src={image}
                objectFit="cover"
                height={25}
                width={25}/>
                <h1 className='text-bold'>{price}</h1>
            </div>
        </div>
      </div>
    </div>
  )
}

export default NFT_Card