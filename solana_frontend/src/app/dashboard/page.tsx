'use client'
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import SideBar from "../Component/SideBar";
import { ellipsify } from "../Component/TransactionHistory";
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
    }
  ];
export default function Dashboard() {
    const { connection } = useConnection();
    const { publicKey } = useWallet();
    const [balance, setBalance] = useState<number>(0);
  
    useEffect(() => {
      if (publicKey) {
        (async function getBalanceEvery10Seconds() {
          const newBalance = await connection.getBalance(publicKey);
          setBalance(newBalance / LAMPORTS_PER_SOL);
          setTimeout(getBalanceEvery10Seconds, 10000);
        })();
      }
    }, [publicKey, connection]);
  const [isSetSideBar, setIsSetSideBar] = React.useState(false);

  return (
    <div className="max-w-1400px lg:max-w-[1400px] 2xl:max-w-[1560px] md:max-w-[1200px] sm:max-w-[1020px] mt-6 mx-auto px-4 2xl:px-12 lg:px-8 pb-8 min-h-screen flex">
      <aside className="w-1/4 p-6 mt-10">
        <div className="bg-gray-800 p-6 rounded-lg mb-8 mt-12">
          <h3 className="text-lg font-semibold mb-4">Your Total Earnings</h3>
          <p className="text-4xl font-bold text-purple-400 mb-2">$4,587.58</p>
          <p className="text-sm">10 Jan 2022 at 10:00 PM</p>
          <button className="mt-4 bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-md">
            Withdraw
          </button>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-4">Top Creators</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <img
                src="/images/picture2.png"
                alt="Creator 1"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p>Darlene Robertson</p>
                <p className="text-sm text-gray-400">245 Items</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <img
                src="/images/creator2.jpg"
                alt="Creator 2"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p>Savannah Nguyen</p>
                <p className="text-sm text-gray-400">210 Items</p>
              </div>
            </div>
          </div>
        </div>
      </aside>

      <main className="flex-1 p-6">
        <header className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <p className="text-gray-400">Hello  {ellipsify(publicKey?.toString(), 8)} , Welcome Back</p>
          </div>
          <div  onClick={() => {
              setIsSetSideBar(true);
            }} className="flex items-center gap-4">
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
        </header>
        <div className="bg-gray-800 p-6 rounded-lg mb-8 flex items-center gap-6">
          <img
            src="/images/caricature.jpg"
            alt="3D Caricatures"
            className="w-1/3 rounded-lg"
          />
          <div>
            <h2 className="text-2xl font-bold mb-4">3D Caricatures</h2>
            <p className="text-gray-400 mb-2">Product ID: 236489</p>
            <p className="mb-4">
              <span className="text-xl font-semibold text-purple-400">
                2.55 ETH
              </span>{" "}
              <span className="text-gray-400">(Current Bid)</span>
            </p>
            <p className="mb-6">Auction Time: 20h 45m 15s</p>
            <button className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-lg">
              Place a Bid
            </button>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Trending Bids</h3>
          <div className="grid grid-cols-3 gap-6">
          {nftData.map((nft) => (
             <div key={nft.id}  className="bg-gray-800 p-4 rounded-lg">
             <Image
                   src={nft.image}
                   alt="Creator Avatar"
                   width={480}
                   height={360}
                   className="rounded-[8px]"
                 />
               <h4 className="text-lg font-semibold">Item Name</h4>
               <p className="text-gray-400">1.2 ETH</p>
             </div>
          ))}
          </div>
        </div>
      </main>
      {isSetSideBar && <SideBar setSidebar={setIsSetSideBar} />}
    </div>
  );
}
