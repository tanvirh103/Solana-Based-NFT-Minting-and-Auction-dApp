"use client";
import Image from "next/image";

import React, { useState } from "react";
import AuctionModal from "../Component/auction";
import SideBar from "../Component/SideBar";
const nftData = [
  {
    id: 1,
    title: "Alien Ape",
    creator: "@deepChainLabs",
    createdBy: "9yTY...qGnF",
    creatorType: "Creator",
    network: "Solana",
    category: "AAP",
    image: "/images/picture1.png",
  },
  {
    id: 2,
    title: "SolPunk #001",
    creator: "@deepChainLabs",
    createdBy: "9yTY...qGnF",
    creatorType: "SPR",
    network: "Solana",
    category: "SPK",
    image: "/images/picture1.png",
  },
  {
    id: 3,
    title: "Crypto Cat",
    creator: "@deepChainLabs",
    createdBy: "9yTY...qGnF",
    creatorType: "Solana",
    network: "Blockahin",
    category: "CCT",
    image: "/images/picture3.png",
  },
  {
    id: 4,
    title: "SolPunk #001",
    creator: "@deepChainLabs",
    createdBy: "9yTY...qGnF",
    creatorType: "SPR",
    network: "Solana",
    category: "SPK",
    image: "/images/picture2.png",
  },
];

export default function AuctionCreationPage() {
  const [nft, setNft] = useState(null);
  const [startingPrice, setStartingPrice] = useState();
  const [isSetSideBar, setIsSetSideBar] = React.useState(false);
  const [showAuctionModal, setShowAuctionModal] = useState(false);

  const handleAuctionSubmission = () => {
    console.log({
      nft,
      startingPrice,
    });
    alert("Auction created successfully!");
  };

  const handleAddToAuction = (selectedNft: any) => {
    setNft(selectedNft);
    setShowAuctionModal(true);
  };
  return (
    <div className="max-w-1400px lg:max-w-[1400px] 2xl:max-w-[1560px] md:max-w-[1200px] sm:max-w-[1020px] mt-6 mx-auto px-4 2xl:px-12 lg:px-8 pb-8">
      <div className="flex justify-between">
        <div className="flex justify-start">
          <h2 className="text-[#ffffff] text-[32px] font-[700] mb-6">
            Your NFT
          </h2>
        </div>
        <div
          onClick={() => {
            setIsSetSideBar(true);
          }}
          className="flex justify-end cursor-pointer"
        >
          <svg
            className=""
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.75 8.75H18.75"
              stroke="#FFFFFF"
              strokeWidth="2.5"
              strokeLinecap="round"
            ></path>
            <path
              d="M3.75 15H26.25"
              stroke="#FFFFFF"
              strokeWidth="2.5"
              strokeLinecap="round"
            ></path>
            <path
              d="M3.75 21.25H15"
              stroke="#FFFFFF"
              strokeWidth="2.5"
              strokeLinecap="round"
            ></path>
          </svg>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {nftData.map((nft) => (
          <div key={nft.id} className="bg-[#1f2937] rounded-[8px] p-4 relative">
            <div className="relative w-full h-[300px]">
              <Image
                src={nft.image}
                alt={nft.title}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
              <div className="absolute top-2 right-2 bg-[#1f2937] text-[#ffffff] text-[12px] rounded-full px-2 py-1 ">
                {nft.category}
              </div>
              <button
                onClick={() => {
                  handleAddToAuction(nft);
                }}
                className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-white text-black rounded-full px-4 py-1 text-[12px] font-[600] hover:bg-gray-200"
              >
                Add to Auction
              </button>
            </div>
            <div className="mt-4">
              <p className="text-[#ffffff] text-[20px] font-[600]">
                {nft.title}
              </p>
              <p className="text-[#9ca3af] text-[14px]">{nft.creator}</p>
              <div className="flex items-center gap-2 mt-2">
                <Image
                  src="/images/picture2.png"
                  alt="Creator Avatar"
                  width={24}
                  height={24}
                  className="rounded-full"
                />
                <p className="text-[#9ca3af] text-[12px]">
                  Created by: {nft.createdBy}
                </p>
              </div>
              <div className="flex justify-between items-center mt-2 text-[#9ca3af] text-[14px]">
                <p>{nft.creatorType}</p>
                <p>{nft.network}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {showAuctionModal && (
        <AuctionModal isOpen={setShowAuctionModal} nftDetails={nft} />
      )}
      {isSetSideBar && <SideBar setSidebar={setIsSetSideBar} />}
    </div>
  );
}
