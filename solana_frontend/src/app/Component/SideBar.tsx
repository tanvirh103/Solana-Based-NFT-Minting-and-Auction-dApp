import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import React, { useRef, useEffect, useState } from "react";
import TransactionHistory from "./TransactionHistory";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import axios from "axios";

export default function SideBar({ setSidebar }: any) {
  const modalRef = useRef<HTMLDivElement>(null);

  const queryClient = new QueryClient();

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setSidebar(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalRef, setSidebar]);
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
  }, [publicKey, connection, balance]);
  const [value, setValue] = React.useState<number>(0);
  useEffect(() => {
    const fetchPrice = () => {
      axios
        .get(
          "https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=bdt"
        )
        .then((response) => {
          const bdtValue = response.data.solana.bdt;
          setValue(bdtValue);
        })
        .catch((error) => {
          console.log("Error fetching data:", error);
        });
    };
    fetchPrice();
    const interval = setInterval(fetchPrice, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`fixed inset-0 bg-[#00000026] backdrop-blur-[2px] flex justify-end z-50 ${
        setSidebar
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      } transition-opacity duration-300`}
    >
      <div
        ref={modalRef}
        className={`bg-[#151515] rounded-l-[12px] p-6 w-[45vw] h-[100vh] transform ${
          setSidebar ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-out`}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-[#ffffff] text-[24px] font-[700] mb-2">
            Side Menu
          </h2>
          <div className="flex items-center gap-2 mb-2">
            <button
              onClick={() => setSidebar(false)}
              className="text-[#FFFFFF] hover:text-gray-600"
            >
              <p className="text-[#FFFFFF]">&#x2715;</p>
            </button>
          </div>
        </div>
        {publicKey ? (
          <div className="space-y-6">
            <div className="pt-4">
              <p className="text-[#FFFFFF] text-[20px] font-[700]">
                Wallet Information
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-[#FFFFFF] text-[16px] font-[500]">
                Public Key: {publicKey.toString()}
              </p>
              <p className="text-[#FFFFFF] text-[16px] font-[500]">
                Wallet Balance: {balance} SOL
              </p>
            </div>
            <div className="pt-2">
              <div>
                <p className="text-[#FFFFFF] text-[18px] font-[600]">
                  Transaction Info
                </p>
              </div>
              <div>
                <QueryClientProvider client={queryClient}>
                  <TransactionHistory address={publicKey} />
                </QueryClientProvider>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className="mt-6">
              <p className="text-[#FFFFFF] text-[18px] font-[600]">
                Wallet is not connected
              </p>
            </div>
            <div className="mt-6">
              <div className="mt-4">
                <h2 className="text-[#FFFFFF] text-[18px] font-[600]">
                  Solana market rate
                </h2>
              </div>
              <div className="mt-4 max-h-[400px] overflow-y-auto rounded-xl shadow-lg bg-black border border-gray-800">
                <table className="table-fixed w-full text-left">
                  <thead className="sticky top-0 bg-gray-900 text-[#ffffff] font-[500] text-[14px] font-medium uppercase">
                    <tr>
                      <th className="border-b border-gray-700 px-4 py-3">
                        Amount (SOL)
                      </th>
                      <th className="border-b border-gray-700 px-4 py-3">
                        Amount (BDT)
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-[14px] text-[#ffffff] font-[400]">
                    <tr className="h-[48px] bg-gray-800">
                      <td className="border-b border-gray-700 px-4 py-3">1</td>
                      <td className="border-b border-gray-700 px-4 py-3">
                        {value}
                      </td>
                    </tr>
                    <tr className="h-[48px] bg-gray-700">
                      <td className="border-b border-gray-700 px-4 py-3">5</td>
                      <td className="border-b border-gray-700 px-4 py-3">
                        {value * 5}
                      </td>
                    </tr>
                    <tr className="h-[48px] bg-gray-800">
                      <td className="border-b border-gray-700 px-4 py-3">10</td>
                      <td className="border-b border-gray-700 px-4 py-3">
                        {value * 10}
                      </td>
                    </tr>
                    <tr className="h-[48px] bg-gray-700">
                      <td className="border-b border-gray-700 px-4 py-3">50</td>
                      <td className="border-b border-gray-700 px-4 py-3">
                        {value * 50}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        <div className="flex justify-end gap-2 mt-6 pt-6">
          <button
            onClick={() => {
              setSidebar(false);
            }}
            className="w-[100px] h-[40px] bg-[#ab9ff2] rounded-[8px] px-2 py-2 mt-4 hover:bg-[#867dbf]"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
