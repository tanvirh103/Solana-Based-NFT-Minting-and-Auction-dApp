"use client";
import dynamic from "next/dynamic";
import Link from "next/link";
import React from "react";
import Sidebar from "./SideBar";
const WalletMultiButton = dynamic(
  () =>
    import("@solana/wallet-adapter-react-ui").then(
      (mod) => mod.WalletMultiButton
    ),
  { ssr: false }
);

export default function Navbar() {
  const [isSetSideBar,setIsSetSideBar]=React.useState(false);
  return (
    <main className="lg:max-w-[1400px] 2xl:max-w-[1560px] md:max-w-[1200px] sm:max-w-[1020px] mx-auto px-4 2xl:px-12 lg:px-8 pb-8 flex justify-center mt-2">
      <div className="w-[1150px] flex justify-between h-[60px] p-4 rounded-[12px] gap-6">
        <div className="w-[80px] h-[40px] hover:shadow hover:border-b-2 hover:border-[#bfa7ff] cursor-pointer flex item-center justify-center pt-2 rounded-[7px]">
          <p className="text-[18px] text-[#ffffff] font-[400]">Home</p>
        </div>
        <Link href={"#TopNft"}>
          <div className="w-[100px] h-[40px] hover:shadow hover:border-b-2 hover:border-[#bfa7ff] cursor-pointer flex item-center justify-center pt-2 rounded-[7px]">
            <p className="text-[18px] text-[#ffffff] font-[400]">Top NFTs</p>
          </div>
        </Link>
        <div className="w-[100px] h-[40px] hover:shadow hover:border-b-2 hover:border-[#bfa7ff] cursor-pointer flex item-center justify-center pt-2 rounded-[7px]">
          <p className="text-[18px] text-[#ffffff] font-[400]">About</p>
        </div>
        <div className="w-[100px] h-[40px] hover:shadow hover:border-b-2 hover:border-[#bfa7ff] cursor-pointer flex item-center justify-center pt-2 rounded-[7px]">
          <p className="text-[18px] text-[#ffffff] font-[400]">Popular</p>
        </div>
        <div className="w-[100px] h-[40px] hover:shadow hover:border-b-2 hover:border-[#bfa7ff] cursor-pointer flex item-center justify-center pt-2 rounded-[7px]">
          <p className="text-[18px] text-[#ffffff] font-[400]">Action</p>
        </div>
        <div className="w-[100px] h-[40px] hover:shadow hover:border-b-2 hover:border-[#bfa7ff] cursor-pointer flex item-center justify-center pt-2 rounded-[7px]">
          <p className="text-[18px] text-[#ffffff] font-[400]">Discover</p>
        </div>
        <div className="w-[250px] h-[40px] flex justify-end ml-[40px]">
          <WalletMultiButton />
        </div>
        <div onClick={()=>{
          setIsSetSideBar(true);
        }} className="h-[40px] flex justify-end mt-1 cursor-pointer">
          
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
      {isSetSideBar&&(
        <Sidebar setSidebar={setIsSetSideBar} />
      )}
    </main>
  );
}
