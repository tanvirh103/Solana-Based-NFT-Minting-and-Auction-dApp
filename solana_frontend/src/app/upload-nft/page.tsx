"use client";

import React from "react";
import SideBar from "../Component/SideBar";
import Link from "next/link";

export default function NFTUploadPage() {
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [symbol, setSymbol] = React.useState("");
  const [website, setWebsite] = React.useState("");
  const [blockchain, setBlockchain] = React.useState("");
  const [attribute, setAttribute] = React.useState("");
  const [value, setValue] = React.useState("");
  const [isSetSideBar, setIsSetSideBar] = React.useState(false);
  const [file, setFile] = React.useState<File | null>(null);
  const [preview, setPreview] = React.useState<string | null>(null);
  const [error, setError] = React.useState<string | null>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = event.target.files?.[0];
    if (uploadedFile) {
      if (uploadedFile.type.startsWith("image/")) {
        setFile(uploadedFile);
        setPreview(URL.createObjectURL(uploadedFile));
        setError(null);
      } else {
        setError("Only image files are allowed!");
        setFile(null);
        setPreview(null);
      }
    }
  };

  const handleSubmit = () => {
    console.log({
      name,
      description,
      symbol,
      website,
      blockchain,
      file,
      attribute,
      value,
    });
  };

  return (
    <div className="max-w-1400px lg:max-w-[1400px] 2xl:max-w-[1560px] md:max-w-[1200px] sm:max-w-[1020px] mx-auto px-4 2xl:px-12 lg:px-8 pb-8 flex justify-center items-center">
      <div className="w-full p-6">
        <div className="flex justify-between">
          <div className="flex justify-start">
            <h2 className="text-[45px] font-[700] mb-4">Create Your NFT</h2>
          </div>
          <div
            onClick={() => {
              setIsSetSideBar(true);
            }}
            className="flex justify-end cursor-pointer"
          >
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
        <div className="w-[1460px] space-y-6">
          <div className="mb-4">
            <label className="block mb-2">NFT Name *</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-[90%] p-2 bg-[#454545] rounded text-[18px] text-[#ffffff] font-[400]"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">NFT Description *</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-[90%] p-2 bg-[#454545] rounded text-[18px] text-[#ffffff] font-[400]"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="file-upload"
              className="block w-[90%] h-48 border-2 border-dashed border-gray-300 rounded-lg flex flex-col justify-center items-center cursor-pointer hover:border-[#867dbf] transition duration-300"
            >
              {preview ? (
                <img
                  src={preview}
                  alt="Preview"
                  className="object-contain h-full w-full rounded-lg"
                />
              ) : (
                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    <svg
                      width="76"
                      height="76"
                      viewBox="0 0 76 76"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.267578 37.732C0.267578 16.8932 17.1608 0 37.9996 0C58.8384 0 75.7316 16.8932 75.7316 37.732C75.7316 58.5708 58.8384 75.464 37.9996 75.464C17.1608 75.464 0.267578 58.5708 0.267578 37.732Z"
                        fill="#F4F4F5"
                      />
                      <path
                        d="M37.9999 38.6529L44.67 45.323L42.4466 47.5463L39.5721 44.673V53.4536H36.4277V44.6699L33.5531 47.5463L31.3298 45.323L37.9999 38.6529ZM37.9999 22.0103C43.6493 22.0103 48.3045 26.2671 48.9329 31.7482C52.5987 32.7506 55.2937 36.1057 55.2937 40.0902C55.2937 44.6004 51.8406 48.3041 47.4338 48.7019L47.4343 45.5368C50.1002 45.1548 52.1494 42.8617 52.1494 40.0902C52.1494 37.0512 49.6858 34.5876 46.6468 34.5876C46.3185 34.5876 45.997 34.6164 45.6857 34.6725C45.8004 34.1383 45.8607 33.5839 45.8607 33.0154C45.8607 28.674 42.3413 25.1546 37.9999 25.1546C33.6585 25.1546 30.1391 28.674 30.1391 33.0154C30.1391 33.5839 30.1994 34.1383 30.3152 34.6714C30.0028 34.6164 29.6812 34.5876 29.353 34.5876C26.314 34.5876 23.8504 37.0512 23.8504 40.0902C23.8504 42.7633 25.7565 44.9912 28.2837 45.489L28.567 45.5371L28.5675 48.7019C24.16 48.3051 20.7061 44.601 20.7061 40.0902C20.7061 36.1057 23.4011 32.7506 27.0678 31.7484C27.6953 26.2671 32.3505 22.0103 37.9999 22.0103Z"
                        fill="#71717A"
                      />
                    </svg>
                  </div>

                  <p className="text-[20px]  text-[#ffffff] font-[400]">
                    Drag & drop or click to upload an image
                  </p>
                  <p className="text-sm">
                    Only .jpg, .jpeg, .png files are allowed
                  </p>
                </div>
              )}
            </label>
            <input
              id="file-upload"
              type="file"
              accept="image/*"
              onChange={handleFileUpload}
              className="hidden"
            />
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            {file && !error && (
              <div className="mt-4">
                <p className="text-sm text-gray-600">
                  Uploaded: <span className="font-medium">{file.name}</span>
                </p>
              </div>
            )}
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-2">Symbol</label>
              <input
                type="text"
                value={symbol}
                onChange={(e) => setSymbol(e.target.value)}
                className="w-[80%] p-2 bg-[#454545] rounded text-[18px] text-[#ffffff] font-[400]"
                placeholder="Symbol"
              />
            </div>
            <div>
              <label className="block mb-2">Website Link</label>
              <input
                type="url"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                className="w-[80%] p-2 bg-[#454545] rounded text-[18px] text-[#ffffff] font-[400]"
                placeholder="Website"
              />
            </div>
          </div>
          <div className="my-4">
            <label className="block mb-2">Blockchain</label>
            <div className="flex space-x-4">
              {["Bitcoin", "Ethereum", "Cardano", "Solana"].map((chain) => (
                <button
                  key={chain}
                  onClick={() => setBlockchain(chain)}
                  className={`p-2 rounded ${
                    blockchain === chain ? "bg-[#ab9ff2]" : "bg-black-900"
                  }`}
                >
                  {chain}
                </button>
              ))}
            </div>
          </div>
          <div className="mb-6">
            <label className="block mb-2">Attributes</label>
            <div className="flex space-x-4">
              <input
                type="text"
                value={attribute}
                onChange={(e) => setAttribute(e.target.value)}
                className="w-[45%] p-2 bg-[#454545] rounded text-[18px] text-[#ffffff] font-[400]"
                placeholder="Attribute Name"
              />
              <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="w-[45%] p-2 bg-[#454545] rounded text-[18px] text-[#ffffff] font-[400]"
                placeholder="Value"
              />
            </div>
          </div>
          <div className="w-[91%] mt-6 flex justify-end space-x-4 mt-4">
            <Link href="/">
              <button className="w-[100px] h-[40px] bg-[#ab9ff2] rounded-[8px] px-2 py-2 hover:bg-[#867dbf]">
                Cancel
              </button>
            </Link>
            <button
              onClick={handleSubmit}
              className="w-[100px] h-[40px] bg-[#ab9ff2] rounded-[8px] px-2 py-2 hover:bg-[#867dbf]"
            >
              Create NFT
            </button>
          </div>
        </div>
      </div>

      {isSetSideBar && <SideBar setSidebar={setIsSetSideBar} />}
    </div>
  );
}
