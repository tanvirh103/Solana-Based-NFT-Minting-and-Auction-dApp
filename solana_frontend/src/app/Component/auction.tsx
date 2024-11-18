import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

const AuctionModal = ({ isOpen, nftDetails }: any) => {
  const [startingPrice, setStartingPrice] = useState<number | undefined>();
  const [auctionDuration, setAuctionDuration] = useState<number | undefined>();
  const modalRef = useRef<HTMLDivElement>(null);
  console.log(nftDetails);
  const handleAuctionSubmission = () => {
    console.log({
      startingPrice,
      auctionDuration,
      nftId: nftDetails.id,
    });
    isOpen(false);
  };

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        isOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalRef, isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
      <div
        ref={modalRef}
        className="bg-[#151515] text-white rounded-[12px] p-6 w-[850px] relative"
      >
        <div>
          <h2 className="text-[28px] text-[#ffffff] font-[700] mb-4">Create Auction</h2>
          <button
            className="absolute top-3 right-3 text-gray-400 hover:text-gray-300"
            onClick={() => {
              isOpen(false);
            }}
          >
            &#x2715;
          </button>
        </div>
        <div  className="grid grid-cols-2 gap-8 items-start">
          <div>
            <Image
              src={nftDetails.image}
              alt={nftDetails.title}
              width={520}
              height={720}
              className="rounded-[8px]"
            />
          </div>
          <div className="space-y-2">
            <h2 className="text-[26px]  text-[#ffffff] font-[700] mb-4">NFT Details</h2>

            <h3 className="text-[20px]  text-[#ffffff] font-[600]">{nftDetails.title}</h3>
            <p className="text-[14px]  text-[#ffffff] font-[400]">
              Creator:{nftDetails.creator}
            </p>
            <p className="text-[14px]  text-[#ffffff] font-[400]">
              Created By: {nftDetails.createdBy}
            </p>
            <p className="text-[14px]  text-[#ffffff] font-[400]">
              Category: {nftDetails.category}
            </p>
            <p className="text-[14px]  text-[#ffffff] font-[400]">
              Network: {nftDetails.network} 
            </p>
          </div>
        </div>

        <div className="space-y-4 mt-6">
          <div>
            <p className="text-[14px]  text-[#ffffff] font-[400] mb-2">
              Starting Price (in SOL)
            </p>
            <input
              type="number"
              value={startingPrice || ""}
              onChange={(e) => setStartingPrice(Number(e.target.value))}
              className="w-[50%] h-[35px] bg-[#454545] rounded text-[14px] text-[#ffffff] font-[400] px-2"
              placeholder="Enter starting price"
            />
          </div>
          <div>
            <p className="text-[14px]  text-[#ffffff] font-[400] mb-2">
              Auction Duration (in hours)
            </p>
            <input
              type="number"
              value={auctionDuration || ""}
              onChange={(e) => setAuctionDuration(Number(e.target.value))}
              className="w-[50%] h-[35px] bg-[#454545] rounded text-[14px] text-[#ffffff] font-[400] px-2"
              placeholder="Enter duration"
            />
          </div>
        </div>

        <div className="flex justify-end gap-6 mt-6">
          <button
            onClick={() => {
              isOpen(false);
            }}
            className="w-[120px] h-[40px] bg-[#ab9ff2] rounded-[8px] px-2 py-2 mt-4 hover:bg-[#867dbf]"
          >
            Cancel
          </button>
          <button
            onClick={handleAuctionSubmission}
            className="w-[140px] h-[40px] bg-[#ab9ff2] rounded-[8px] px-2 py-2 mt-4 hover:bg-[#867dbf]"
          >
            Submit Auction
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuctionModal;
