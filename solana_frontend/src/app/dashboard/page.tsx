'use client';
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
    image: "/images/picture2.png",
  },
  {
    id: 3,
    title: "Crypto Cat",
    creator: "@deepChainLabs",
    createdBy: "9yTY...qGnF",
    creatorType: "Solana",
    network: "Blockchain",
    category: "CCT",
    image: "/images/picture3.png",
  },
  {
    id: 4,
    title: "Alien Ape",
    creator: "@deepChainLabs",
    createdBy: "9yTY...qGnF",
    creatorType: "Creator",
    network: "Solana",
    category: "AAP",
    image: "/images/picture1.png",
  },
  {
    id: 5,
    title: "SolPunk #001",
    creator: "@deepChainLabs",
    createdBy: "9yTY...qGnF",
    creatorType: "SPR",
    network: "Solana",
    category: "SPK",
    image: "/images/picture2.png",
  },

];

export default function Dashboard() {
  const { connection } = useConnection();
  const { publicKey } = useWallet();
  const [balance, setBalance] = useState<number>(0);
  const [isSetSideBar, setIsSetSideBar] = useState(false);

  useEffect(() => {
    if (publicKey) {
      (async function getBalanceEvery10Seconds() {
        const newBalance = await connection.getBalance(publicKey);
        setBalance(newBalance / LAMPORTS_PER_SOL);
        setTimeout(getBalanceEvery10Seconds, 10000);
      })();
    }
  }, [publicKey, connection]);

  return (
    <div className="max-w-1400px lg:max-w-[1400px] 2xl:max-w-[1560px] md:max-w-[1200px] sm:max-w-[1020px] mx-auto px-4 2xl:px-12 lg:px-8 pb-4 flex">
      <aside className="w-1/4 bg-gray-900 p-6 hidden lg:block rounded-[8px] mt-6">
        <div className="bg-gray-800 p-6 rounded-lg mb-8">
          <h3 className="text-lg font-semibold mb-4">Your Total Earnings</h3>
          <p className="text-4xl font-bold text-purple-400 mb-2">$4,587.58</p>
          <p className="text-sm text-gray-400">10 Jan 2022 at 10:00 PM</p>
          <button className="mt-4 bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg">
            Withdraw
          </button>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-4">Top Creators</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <Image
                src="/images/picture2.png"
                alt="Creator 1"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <p>Darlene Robertson</p>
                <p className="text-sm text-gray-400">245 Items</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Image
                src="/images/picture3.png"
                alt="Creator 2"
                width={40}
                height={40}
                className="rounded-full"
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
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <p className="text-gray-400 mt-2">
              Hello {ellipsify(publicKey?.toString(), 8)}, Welcome Back
            </p>
          </div>
        </header>
        <div className="bg-gray-800 p-6 rounded-lg mb-8 flex items-center gap-6">
          <Image
            src="/images/profilepicture.png"
            alt="Wallet Avatar"
            width={100}
            height={100}
            className="rounded-lg"
          />
          <div>
            <h2 className="text-xl font-semibold mb-4">
              Public Key: {ellipsify(publicKey?.toString(), 8)}
            </h2>
            <div className="flex gap-2 items-center">
              <span className="text-md text-gray-300">Wallet Balance:</span>
              <span className="text-2xl font-bold text-purple-400">
                {balance} SOL
              </span>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Your NFTs</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {nftData.map((nft) => (
              <div key={nft.id} className="h-[300px] w-[250px] bg-gray-800 p-2 rounded-lg">
                <div className="">
                <Image
                  src={nft.image}
                  alt={nft.title}
                  width={480}
                  height={360}
                  className="rounded-[8px]"
                />
                </div>
                <div>
                <h4 className="text-lg font-bold mt-4">{nft.title}</h4>
                <p className="text-sm text-gray-400">{nft.creator}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4 mt-4">Trending Bids</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {nftData.map((nft) => (
              <div key={nft.id} className="h-[300px] w-[250px] bg-gray-800 p-2 rounded-lg">
                <div className="">
                <Image
                  src={nft.image}
                  alt={nft.title}
                  width={480}
                  height={360}
                  className="rounded-[8px]"
                />
                </div>
                <div>
                <h4 className="text-lg font-bold mt-4">{nft.title}</h4>
                <p className="text-sm text-gray-400">{nft.creator}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
