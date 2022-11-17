import React, { useState } from "react";
import img from "../../assets/binance.png";
import axios from "axios";
// import ethers from 'ethers'
import { uploadFileToIPFS, uploadJSONToIPFS } from "../../pinata";

const create = () => { 
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    fileURL: "",
    extLink: "",
  });
  const [selectedFile, useSelectedFile] = useState();
  const [preview, setPreview] = useState();
  const [fileURL, setFileUrl] = useState();
  const inputStyle =
    "p-1 px-2 border-2 border-gray-400 text-black outline-none rounded-lg my-1";

  const key = process.env.REACT_APP_PINATA_KEY;
  const secret = process.env.REACT_APP_PINATA_SECRET;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData)
  };

  const onFileSelect = async (file) => {
    const preview = URL.createObjectURL(file);
    setPreview(preview);
    try {
      const response = await uploadFileToIPFS(file);
      if (response.success) {
        console.log("Uploaded image to pinata: ", response.pinataURL);
        const imgUrl = response.pinataURL
        setFormData({...formData, fileURL: imgUrl})
      }
    } catch (error) {
      console.log("Error during file upload", error);
    }
  };

  const uploadMetadataToIPFS = async () => {
    const { name, description, extLink, fileURL, price } = formData;
    console.log({name, description, fileURL, price})
    if (!name || !description || !fileURL || !price) return;
    const nftJson = {
      name,
      description,
      image: fileURL,
      price,
    };
    
    try {
      const response = await uploadJSONToIPFS(nftJson);
      console.log('continue...')
      if (response.success) {
        console.log("Uploaded Json to Pinata: ", response);
        return response.pinataURL;
      }
    } catch (error) {
      console.log("error uploading JSON metadata");
    }
  };

  const listNFT = async (e) => {
    e.preventDefault();
    console.log({formData})
    const ethers = require('ethers')
    console.log('minting...')
    // try {
      const metadataURL = await uploadMetadataToIPFS();
      console.log({metadataURL})
      const provider = new ethers.providers.Web3Provider(window.ethereum)

      const signer = provider.getSigner();

      const {testMarketplace} = require('../../test')

      let contract = new ethers.Contract(testMarketplace.address, testMarketplace.abi, signer);
      const price = ethers.utils.parseEther(formData.price, 'ether');
      let listingPrice = await contract.getListPrice()
      listingPrice = listingPrice.toString()
      console.log({listingPrice})
      
      let transaction = await contract.createToken(metadataURL, price, {value: listingPrice})
      await transaction.wait()
      
      alert("Successfully listed your NFT");
      console.log('minted')
    // } catch (error) {
    //   console.log({error: error.message})
    // }
  };

  const testList = async (e) => {
    e.preventDefault()
    const ethers = require('ethers')
    // const metadataURL = await uploadMetadataToIPFS();
    //   const provider = new ethers.providers.Web3Provider(window.ethereum)

    //   const signer = provider.getSigner();
    //   console.log({signer})
  }

  return (
    <div className="w-full flex items-center flex-col">
      <h1 className="text-white my-10 text-center font-bold text-[35px]">
        Create New Item
      </h1>
      <form onSubmit={listNFT}>
        <div className="text-white px-10 space-y-2 my-3">
          <div className="text-start text-white my-3">
            <b>Image, Video, Audio, or 3D</b>
            <p className="text-sm my-2">
              File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV,
              OGG, GLB, GLTF. Max size: 100 MB
            </p>
          </div>
          {/* Image Upload */}
          <div className="">
            <label
              htmlFor="image"
              className="flex justify-start w-44 h-44  rounded-lg"
            >
              <img
                src={preview ? preview : ""}
                alt=""
                className="bg-white w-full h-full rounded-lg outline-none border-none"
              />
              <input
                type="file"
                name="image"
                id="image"
                className="hidden"
                onChange={(e) => onFileSelect(e.target.files[0])}
              />
            </label>
          </div>
          <div className="flex flex-col">
            <label htmlFor="nftName">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Item Name"
              className={inputStyle}
              onChange={onChange}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="extLink">Extenal Link</label>
            <input
              type="text"
              name="extLink"
              id="extLink"
              placeholder="https://www.yourlink.xyz"
              className={inputStyle}
              onChange={onChange}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="price">Price</label>
            <input
              type="text"
              name="price"
              id="price"
              placeholder="https://www.yourlink.xyz"
              className={inputStyle}
              onChange={onChange}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="description">Description</label>
            <textarea
              name="description"
              id=""
              cols="20"
              rows="5"
              className={inputStyle}
              onChange={onChange}
            ></textarea>
          </div>
          {/* <div className='flex flex-col'>
          <input type="text" name="collection" id="collection" placeholder='collection' className={inputStyle}/>
          </div> */}
          <button className="bg-blue-500 p-3 px-6 text-white font-bold rounded-lg text-lg my-3 hover:bg-blue-700" type="submit">
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default create;
