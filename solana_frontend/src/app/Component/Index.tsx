import Image from "next/image";
import Link from "next/link";

export default function Index() {
  return (
    <div className="max-w-1400px lg:max-w-[1400px] 2xl:max-w-[1560px] md:max-w-[1200px] sm:max-w-[1020px] mx-auto px-4 2xl:px-12 lg:px-8 pb-8">
      <div className="flex flex-col lg:flex-row justify-between mt-4 gap-8">
        <div className="lg:w-1/2 mt-4 lg:mt-0">
          <h1 className="text-[45px] lg:text-[65px] 2xl:text-[70px] md:text-[55px] sm:text-[45px] text-white font-[600]">
            Create Solana & Collect Digital Art NFTs
          </h1>
          <p className="text-[16px] lg:text-[18px] text-white font-normal mt-4">
            Buy and sell NFTs from the world’s top artists. More than 1,000
            premium digital artworks are available for you!
          </p>
            <div className="flex gap-6">
            <button className="w-[160px] h-[40px] bg-[#ab9ff2] rounded-[8px] px-2 py-2 mt-4 hover:bg-[#867dbf]">
            <p>Get Offer</p>
          </button>
          <Link href="/upload-nft">         
          <button className="w-[160px] h-[40px] bg-[#ab9ff2] rounded-[8px] px-2 py-2 mt-4 hover:bg-[#867dbf]">
            <p>Create NFT</p>
          </button>
          </Link>

            </div>
        </div>
        <div className="lg:w-1/2 h-full mt-8 flex justify-center lg:justify-end">
          <Image
            src="/images/picture1.png"
            width={960}
            height={1200}
            alt="Picture of digital artwork"
            className="rounded-[12px] object-cover"
          />
        </div>
      </div>
    </div>
  );
}
