"use client";

import React, { useState } from "react";

export default function AuctionCreationPage() {
  const [nft, setNft] = useState(null); // The NFT selected for auction
  const [startingPrice, setStartingPrice] = useState("");
  const [auctionDuration, setAuctionDuration] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleAuctionSubmission = () => {
    console.log({
      nft,
      startingPrice,
      auctionDuration,
    });
    alert("Auction created successfully!");
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Auction Creation</h1>

      {!showConfirmation ? (
        <div className="space-y-4">
         
          <div>
            <label className="block text-sm font-medium mb-2">
              Select NFT for Auction
            </label>
            <select
             
              //onChange={(e) => setNft(e.target.value)}
              className="w-full p-2 bg-gray-800 text-white rounded"
            >
              <option value="" disabled>
                Select your NFT
              </option>
              <option value="NFT-1">NFT-1</option>
              <option value="NFT-2">NFT-2</option>
              <option value="NFT-3">NFT-3</option>
            </select>
          </div>

          {/* Starting Price */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Starting Price (in SOL)
            </label>
            <input
              type="number"
              value={startingPrice}
              onChange={(e) => setStartingPrice(e.target.value)}
              className="w-full p-2 bg-gray-800 text-white rounded"
              placeholder="Enter starting price"
            />
          </div>

          {/* Auction Duration */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Auction Duration (in hours)
            </label>
            <input
              type="number"
              value={auctionDuration}
              onChange={(e) => setAuctionDuration(e.target.value)}
              className="w-full p-2 bg-gray-800 text-white rounded"
              placeholder="Enter duration"
            />
          </div>

          {/* Proceed Button */}
          <button
            onClick={() => setShowConfirmation(true)}
            className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded"
          >
            Next: Confirm Auction
          </button>
        </div>
      ) : (
        <div>
          {/* Confirmation Screen */}
          <h2 className="text-2xl font-bold mb-4">Confirm Auction Details</h2>
          <div className="bg-gray-800 p-4 rounded mb-4">
            <p className="mb-2">
              <strong>NFT:</strong> {nft || "Not selected"}
            </p>
            <p className="mb-2">
              <strong>Starting Price:</strong> {startingPrice} SOL
            </p>
            <p className="mb-2">
              <strong>Duration:</strong> {auctionDuration} hours
            </p>
          </div>

          <div className="flex justify-between">
            {/* Go Back */}
            <button
              onClick={() => setShowConfirmation(false)}
              className="bg-gray-500 hover:bg-gray-600 text-white font-medium py-2 px-4 rounded"
            >
              Back
            </button>
            {/* Submit Auction */}
            <button
              onClick={handleAuctionSubmission}
              className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded"
            >
              Submit Auction
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
