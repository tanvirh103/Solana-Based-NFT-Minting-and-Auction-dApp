import { useConnection } from "@solana/wallet-adapter-react";
import { PublicKey } from "@solana/web3.js";
import { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
interface props {
  address: PublicKey;
}
export function useGetSignatures({ address }: props) {
  const { connection } = useConnection();

  if (!connection) {
    throw new Error("Connection object is undefined");
  }

  return useQuery({
    queryKey: ["get-signatures", address.toString()],
    queryFn: async () => {
      const result = await connection.getSignaturesForAddress(address);
      return result;
    },
  });
}
export function ellipsify(str = "", len = 4) {
  if (str.length > 30) {
    return (
      str.substring(0, len) + "..." + str.substring(str.length - len, str.length)
    );
  }
  return str;
}
export default function TransactionHistory({ address }: props) {
  const query = useGetSignatures({ address });
  const [showAll, setShowAll] = useState(false);

  const items = useMemo(() => {
    if (showAll) return query.data;
    return query.data?.slice(0, 4);
  }, [query.data, showAll]);

  return (
    <div className="mt-4 max-h-[400px] overflow-y-auto rounded-xl shadow-lg bg-black border border-gray-800">
      <table className="table-fixed w-full text-left">
        <thead className="sticky top-0 bg-gray-900  text-[#ffffff] font-[500] text-[14px] font-medium uppercase">
          <tr>
            <th className="border-b border-gray-700 px-4 py-3 w-28">Signature</th>
            <th className="border-b border-gray-700 px-4 py-3 w-24">Slot</th>
            <th className="border-b border-gray-700 px-4 py-3 w-32">Block Time</th>
            <th className="border-b border-gray-700 px-4 py-3 w-12">Status</th>
          </tr>
        </thead>
        <tbody className="text-[14px] text-[#ffffff] font-[400]">
          {items?.map((item: any, index: number) => (
            <tr
              key={item.signature}
              className={`h-[48px] ${
                index % 2 === 0 ? "bg-gray-700" : "bg-gray-800"
              }`}
            >
              <td className="border-b border-gray-700 px-4 py-3">
                <Link href={`https://explorer.solana.com/tx/${item.signature}?cluster=devnet`}>
                <p className="text-[#6f9cff]">{ellipsify(item.signature, 10)}</p>
                </Link>
              </td>
              <td className="border-b border-gray-700 px-4 py-3">
                {item.slot}
              </td>
              <td className="border-b border-gray-700 px-4 py-3">
                {new Date((item.blockTime ?? 0) * 1000).toISOString()}
              </td>
              <td className="border-b border-gray-700 px-4 py-3">
                {item.err ? (
                  <span
                    className="inline-block bg-red-500 text-[#ffffff] text-[12px] px-2 py-1 rounded-full"
                    title={JSON.stringify(item.err)}
                  >
                    Failed
                  </span>
                ) : (
                  <span className="inline-block  bg-[#ab9ff2] text-[#ffffff] text-[12px] px-2 py-1 rounded-full">
                    Success
                  </span>
                )}
              </td>
            </tr>
          ))}
          {(query.data?.length ?? 0) > 5 && (
            <tr className="bg-gray-600">
              <td colSpan={4} className="text-center border-b border-gray-700">
                <button
                  className="text-[14px]  text-[#ffffff] font-[400] hover:text-gray-200 py-2 px-4 bg-gray-900 hover:bg-[#867dbf] rounded-[7px]"
                  onClick={() => setShowAll(!showAll)}
                >
                  {showAll ? "Show Less" : "Show All"}
                </button>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
