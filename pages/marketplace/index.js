import React from 'react'
import {Squares2X2Icon, ArrowPathIcon, XMarkIcon, ChevronDownIcon} from '@heroicons/react/24/solid'
import Marketplace from '../../Marketplace.json'

import { useEffect, useState } from "react";
import axios from "axios";
import NFT_Card from '../../components/NFT_Card';

const mobileFilter = (setOpenFilter) => {
    
    //   const { title, content } = accordionData;

    const Accordion = ({title, content}) => {
        const [isActive, setIsActive] = useState(false)
        const accordionStyle = 'flex justify-between items-center px-3 '
        return <div>
            <div>
                <div className={`${accordionStyle} my-3`}>
                    <div className='text-white font-bold '>Sale Type</div>
                    <ChevronDownIcon className='h-5 w-5'/>
                </div>
                <div className='px-3 font-bold'>
                    <h1>Buy Now</h1>
                    <h1>Verified</h1>
                </div>
            </div>
            <div className='w-full px-3 my-2'><hr /></div>

        </div>
    }

    
    return <div className='bg-black h-full w-full text-white absolute z-10'>
        <div className='w-full flex justify-end px-3'><XMarkIcon className='h-5 w-5'/></div>
        <hr className='bg-white my-2'/>
        <div className='accordion'>
            <Accordion />
        </div>
    </div>
}

const index = () => {
    const [allitems, setItems] = useState([])
    const [openFilter, setOpenFilter] = useState(false)

    useEffect(() => {
    getAllNFTs()
    }, [])

    const getAllNFTs = async () => {
    try {

    const ethers = require('ethers')
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner()
    const contract = new ethers.Contract(Marketplace.address, Marketplace.abi, signer);
    let transaction = await contract.getAllNFTs();
    let items = []
    await Promise.all(transaction.map(async i => {
        const tokenURI = await contract.tokenURI(i.tokenId);
        let meta = await axios.get(tokenURI)
        meta = meta.data;
        let price = ethers.utils.formatUnits(i.price.toString(), 'ether')
        let item = {
        price,
        tokenId: i.tokenId.toNumber(),
        seller: i.seller,
        owner: i.owner,
        image: meta.image,
        name: meta.name,
        description: meta.description
        }
        console.log({item})
        items.push(item)
    }))

    setItems(items)
    } catch (error) {
    console.log(error.message)
    }
}

return (
    <>
        {openFilter && mobileFilter()}
        <div className={`my-6 ${openFilter && 'hidden'}`}>
            <div className='grid grid-cols-4 grid-flow-row-dense items-center justify-between px-3 border-b-2 border-white pb-4'>
                <Squares2X2Icon className='h-5 w-5 justify-self-center' fill='white' onClick={() => setOpenFilter(!openFilter)}/>
                <b className='text-white col-span-2'>Recently Listed</b>
                <ArrowPathIcon className='h-5 w-5 col-start-5' fill='white' />
            </div>
            {/* NFTS */}
            <div className='px-5 flex flex-col'>
                {allitems.map(item => 
                <NFT_Card key={item.tokenId} image={item.image} description={item.description} name={item.name} price={item.price}/>
            )}
            </div>
        </div>
    </>
)
}

export default index