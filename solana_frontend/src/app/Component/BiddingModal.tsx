'use client';
import React, { useEffect, useRef, useState } from "react";

const PlaceBidModal = ({ isOpen }:any) => {
  const [bidAmount, setBidAmount] = useState("");
  const modalRef =useRef<HTMLDivElement>(null);
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
    <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
      <div ref={modalRef} className="bg-gray-800 p-6 rounded-lg max-w-md w-full">
        <h2 className="text-[24px] font-[600] text-[#ffffff] mb-4">Place Your Bid</h2>
        <label className="text-[#5f7ea9] block mb-2">Bid Amount (SOL)</label>
        <input
          type="number"
          step="0.01"
          value={bidAmount}
          onChange={(e) => setBidAmount(e.target.value)}
          className="w-full p-2 bg-gray-700 text-[#ffffff] rounded-[7px] mb-4"
        />
        <div className="flex gap-4">
          <button
            className="w-[100px] h-[40px] bg-[#ab9ff2] rounded-[8px] px-2 py-2 hover:bg-[#867dbf]"
           onClick={() => isOpen(false)}
          >
            Submit Bid
          </button>
          <button
            className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-md"
            onClick={()=>{
              isOpen(false);
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
export default PlaceBidModal;