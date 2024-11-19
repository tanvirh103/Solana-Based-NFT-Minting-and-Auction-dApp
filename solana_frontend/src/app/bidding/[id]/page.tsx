'use client';
import React from "react";
import Image from "next/image";
import PlaceBidModal from "../../Component/BiddingModal";

const NFTBiddingPage = () => {
  const [showBiddingModal,setShowBiddingModal]=React.useState(false);
  const nft = {
    id: 3976,
    name: "Monster Ape",
    owner: "Richarddigo",
    views: 27,
    favorites: 3,
    endTime: {
      hours: 23,
      minutes: 56,
      seconds: 11,
    },
    minBid: {
      value: 0.21,
      usdValue: 392.07,
    },
    description:
      "Monster Ape Club is a collection of 7,999 unique generated 3D Monster Apes, stored on the Solana Blockchain.",
    properties: [
      { trait: "Background", value: "Background LG", rarity: "3% have this trait" },
      { trait: "Body", value: "MAC Blonde Fur", rarity: "6% have this trait" },
      { trait: "Clothes", value: "Puffer Jacket 7", rarity: "2% have this trait" },
      { trait: "Eyes", value: "Eye 25", rarity: "5% have this trait" },
      { trait: "Face", value: "Blonde Fur Basic", rarity: "8% have this trait" },
    ],
    offers: [
      { price: 0.04, usdPrice: 74.68, floorDiff: "20% below", expiration: "18 hours", from: "NotTheRealGuyFie..." },
      { price: 0.0358, usdPrice: 66.84, floorDiff: "28% below", expiration: "21 hours", from: "love-nfts-" },
      { price: 0.035, usdPrice: 65.34, floorDiff: "30% below", expiration: "2 days", from: "crusty-joe" },
      { price: 0.0349, usdPrice: 65.21, floorDiff: "30% below", expiration: "6 minutes", from: "9732A8" },
      { price: 0.022, usdPrice: 41.07, floorDiff: "56% below", expiration: "1 day", from: "w00w.sol" },
    ],
    image: "/images/picture1.png",
  };

  return (
    <div className="max-w-1400px lg:max-w-[1400px] 2xl:max-w-[1560px] md:max-w-[1200px] sm:max-w-[1020px] mx-auto px-4 2xl:px-12 lg:px-8 pb-4">
      <div className="">
        <h1 className="text-[32px] font-[700] p-4">Bidding Details</h1>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1 ml-5">
            <Image
              src={nft.image}
              alt={nft.name}
              width={680}
              height={780}
              className="rounded-lg"
            />
          </div>
          <div className="flex-1">
            <h1 className="text-4xl font-bold">{`${nft.name} #${nft.id}`}</h1>
            <p className="text-gray-400 mt-2">
              Owned by <span className="text-[#ab9ff2]">{nft.owner}</span>
            </p>
            <div className="flex items-center gap-4 mt-4">
              <p>{nft.views} views</p>
              <p>{nft.favorites} favorites</p>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg mt-6">
              <p className="text-[24px] font-[600]">Sale ends in:</p>
              <div className="flex gap-4 mt-2">
                <div>
                  <p className="text-[24px] font-[700]">{nft.endTime.hours}</p>
                  <p className="text-[14px] text-[#5f7ea9] font-[500]">Hours</p>
                </div>
                <div>
                  <p className="text-[24px] font-[700]">{nft.endTime.minutes}</p>
                  <p className="text-[14px] text-[#5f7ea9] font-[500]">Minutes</p>
                </div>
                <div>
                  <p className="text-[24px] font-[700]">{nft.endTime.seconds}</p>
                  <p className="text-[14px] text-[#5f7ea9] font-[500]">Seconds</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg mt-4">
              <p className="text-[20px] font-[600]">Minimum Bid:</p>
              <p className="text-[24px] font-[700] text-[#ab9ff2] mt-2">
                {nft.minBid.value} SOL (${nft.minBid.usdValue})
              </p>
              <button
               onClick={()=>{
                setShowBiddingModal(true);
               }}
               className="w-[100px] h-[40px] bg-[#ab9ff2] rounded-[8px] px-2 py-2 hover:bg-[#867dbf] mt-4">
                Place Bid
              </button>
            </div>
          </div>
        </div>


        <div className="mt-8 bg-gray-800 p-4 rounded-lg">
          <h2 className="text-[18px] font-[600]">Description</h2>
          <p className="mt-2 text-gray-400">{nft.description}</p>
        </div>


        <div className="mt-8 bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-bold">Offers</h2>
          <table className="w-full mt-4 text-sm">
            <thead>
              <tr className="text-gray-400">
                <th className="text-left">Price</th>
                <th className="text-left">USD Price</th>
                <th className="text-left">Floor Difference</th>
                <th className="text-left">Expiration</th>
                <th className="text-left">From</th>
              </tr>
            </thead>
            <tbody>
              {nft.offers.map((offer, index) => (
                <tr key={index} className="border-t border-gray-700">
                  <td>{offer.price} SOL</td>
                  <td>${offer.usdPrice}</td>
                  <td>{offer.floorDiff}</td>
                  <td>{offer.expiration}</td>
                  <td>{offer.from}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {showBiddingModal&&(
        <PlaceBidModal
        isOpen={setShowBiddingModal}/>
      )}
    </div>
  );
};

export default NFTBiddingPage;
