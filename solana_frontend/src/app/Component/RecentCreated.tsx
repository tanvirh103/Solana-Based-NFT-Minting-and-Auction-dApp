import Image from "next/image";
import Link from "next/link";

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
    image: "/images/picture1.png",
  },
  {
    id: 4,
    title: "SolPunk #001",
    creator: "@deepChainLabs",
    createdBy: "9yTY...qGnF",
    creatorType: "SPR",
    network: "Solana",
    category: "SPK",
    image: "/images/picture1.png",
  }
];

export default function RecentCreated() {
  return (
    <div className="max-w-1400px lg:max-w-[1400px] 2xl:max-w-[1560px] md:max-w-[1200px] sm:max-w-[1020px] mt-6 mx-auto px-4 2xl:px-12 lg:px-8 pb-8">
      <h2 className="text-[#ffffff] text-[32px] font-[700] mb-6">NFTs On Auction</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {nftData.map((nft) => (
          <div key={nft.id} className="bg-gray-800 rounded-lg p-4 relative">
            <div className="relative w-full h-[300px]">
              <Image
                src={nft.image}
                alt={nft.title}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
              <div className="absolute top-2 right-2 bg-gray-700 text-white rounded-full px-2 py-1 text-xs">
                {nft.category}
              </div>
              <Link href={"/bidding/1"}>
              <button className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-white text-black rounded-full px-4 py-1 text-sm font-semibold hover:bg-gray-200">
                Give Offer
              </button>
              </Link>
            </div>
            <div className="mt-4">
              <p className="text-white text-lg font-semibold">{nft.title}</p>
              <p className="text-gray-400 text-sm">{nft.creator}</p>
              <div className="flex items-center gap-2 mt-2">
                <Image
                  src="/images/picture2.png"
                  alt="Creator Avatar"
                  width={24}
                  height={24}
                  className="rounded-full"
                />
                <p className="text-gray-400 text-xs">Created by: {nft.createdBy}</p>
              </div>
              <div className="flex justify-between items-center mt-2 text-gray-400 text-xs">
                <p>{nft.creatorType}</p>
                <p>{nft.network}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
