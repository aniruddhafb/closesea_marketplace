import React, { useState } from "react";
import img from "../../assets/binance.png";
import axios from "axios";
import Marketplace from '../../Marketplace.json'
import {ArrowPathIcon} from '@heroicons/react/24/outline'
import {uploadFileToIPFS, uploadJSONToIPFS} from "../../pinata";
import { useRouter } from "next/router";

const create = () => { 
  const inputStyle =
    "p-1 px-2 border-2 border-gray-400 text-black outline-none rounded-lg my-1";

  const router = useRouter()

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    fileURL: "",
    extLink: "",
  });

  const [modalMessage, setModalMessage] = useState({type: '', message: ''})
  const [isLoading, setIsLoading] = useState(false)
  const [selectedFile, useSelectedFile] = useState();
  const [preview, setPreview] = useState();

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData)
  };

  const onFileSelect = async (file) => {
    const preview = URL.createObjectURL(file);
    setPreview(preview);
    useSelectedFile(file)
  };

  const uploadMetadataToIPFS = async (imageURL) => {
    const { name, description, extLink, fileURL, price } = formData;
    console.log({name, description, imageURL, price})
    if (!name || !description || !imageURL || !price) return console.log('fill complete form');
    const nftJson = {
      name,
      description,
      image: imageURL,
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
    setModalMessage({type:'', message: ''})
    setIsLoading(true)
    const ethers = require('ethers')
    try {
        const response = await uploadFileToIPFS(selectedFile);
        if (response.success) {
          console.log("Uploaded image to pinata: ", response.pinataURL);
        }
      const metadataURL = await uploadMetadataToIPFS(response.pinataURL);
      console.log({metadataURL})
      const provider = new ethers.providers.Web3Provider(window.ethereum)

      const signer = provider.getSigner();

      let contract = new ethers.Contract(Marketplace.address, Marketplace.abi, signer);
      const price = ethers.utils.parseEther(formData.price, 'ether');
      let listingPrice = await contract.getListPrice()
      listingPrice = listingPrice.toString()
      
      let transaction = await contract.createToken(metadataURL, price, {value: listingPrice})
      await transaction.wait()
      setModalMessage({type: 'success', message: 'Successfully listed your NFT'})
      router.push('/')
    } catch (error) {
      console.log({error: error.message})
      setModalMessage({type: 'error', message: error.message})
    }
    setIsLoading(false)
  };


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
          {modalMessage.type && <div className={`w-full h-auto ${modalMessage.type == "success" ? "bg-green-500" : "bg-red-500"} p-1 rounded-lg`}>{modalMessage.message.slice(0, 80)}</div>}
          <button disabled={isLoading} className="bg-blue-500 p-3 px-6 flex items-center space-x-2  text-white font-bold rounded-lg text-lg my-3 hover:bg-blue-700" type="submit">
            {isLoading ? <ArrowPathIcon className="h-5 w-5 animate-spin"/>: <b>Create</b>}
          </button>
        </div>
      </form>
      
    </div>
  );
};

export default create;