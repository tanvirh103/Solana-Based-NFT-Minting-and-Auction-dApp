import Image from "next/image";

const nftData = [
  { id: 1, name: "Jane Cooper", price: "7,080.95", image: "/images/picture1.png" },
  { id: 2, name: "Darrell Steward", price: "7,080.95", image: "/images/picture2.png" },
  { id: 3, name: "Arlene McCoy", price: "7,080.95", image: "/images/picture3.png" },
  { id: 4, name: "ArleneGy Cat", price: "7,080.95", image: "/images/picture4.png" },
  { id: 5, name: "Muse Cooper", price: "7,080.95", image: "/images/picture5.png" },
  { id: 6, name: "Gymhyho Life", price: "7,080.95", image: "/images/picture1.png" },
  { id: 7, name: "Healthy No Fly", price: "7,080.95", image: "/images/picture1.png" },
  { id: 8, name: "Fly Fun Cooper", price: "7,080.95", image: "/images/picture1.png" },
  { id: 9, name: "Fly Fun Cooper", price: "7,080.95", image: "/images/picture1.png" },
];

export default function TopNFTs() {
  return (
    <div className="max-w-1400px lg:max-w-[1400px] 2xl:max-w-[1560px] md:max-w-[1200px] sm:max-w-[1020px] mx-auto px-2 2xl:px-12 lg:px-8 pb-8 mt-12">
      <h2 className="text-[#ffffff] text-[32px] font-[700] mb-6">Top NFTs Promotions</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {nftData.map((nft) => (
          <div key={nft.id} className="flex flex-col items-center bg-gray-800 rounded-lg p-4 w-[120px] lg:w-[140px]">
            <div className="relative w-[80px] h-[80px] lg:w-[100px] lg:h-[100px] mb-2">
              <Image
                src={nft.image}
                alt={nft.name}
                width={300}
                height={350}
                className="rounded"
              />
              <span className="absolute top-0 right-0 bg-[#ab9ff2] text-white rounded-full px-2 py-1 text-xs lg:text-sm font-semibold">
                {nft.id}
              </span>
            </div>
            <p className="text-[#ffffff] text-[14px] font-[500] text-center">{nft.name}</p>
            <p className="text-gray-400 text-[12px] font-[500] text-center">Ξ {nft.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
