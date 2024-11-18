import { useConnection } from "@solana/wallet-adapter-react";
import { PublicKey } from "@solana/web3.js";
import { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
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
      str.substring(0, len) + ".." + str.substring(str.length - len, str.length)
    );
  }
  return str;
}
export default function TransactionHistory({ address }: props) {
  const query = useGetSignatures({ address });
  const [showAll, setShowAll] = useState(false);

  const items = useMemo(() => {
    if (showAll) return query.data;
    return query.data?.slice(0, 5);
  }, [query.data, showAll]);

  return (
    <div className="mt-4 table-wrp block max-h-[400px]  overflow-y-auto border rounded-xl overflow-hidden">
      <table className="table-fixed w-full rounded-[8px]">
        <thead className="sticky top-0 bg-[#FCFCFD]">
          <tr className="text-[#667085] text-[14px] font-[500] h-[44px]">
            <td className="border-b border-[#EAECF0] p-2">
              <div className="flex items-center gap-1">Signature</div>
            </td>
            <td className="border-b border-[#EAECF0] p-2">
              <div className="flex items-center gap-1">Slot</div>
            </td>
            <td className="border-b border-[#EAECF0] p-2">
              <div className="flex items-center gap-1">Block Time</div>
            </td>
            <td className="border-b border-[#EAECF0] p-2">
              <div className="flex items-center gap-1">Status</div>
            </td>
          </tr>
        </thead>
        <tbody className="text-[#6F6F6F] bg-[#FFFFFF] text-[16px] font-[500]">
          {items?.map((item: any) => (
            <tr key={item.signature} className="h-[40px]">
              <td className="border-b border-[#EAECF0] p-2">
                {ellipsify(item.signature, 8)}
              </td>
              <td className="border-b border-[#EAECF0] p-2">{item.slot}</td>
              <td className="border-b border-[#EAECF0] p-2">
                {new Date((item.blockTime ?? 0) * 1000).toISOString()}
              </td>
              <td className="border-b border-[#EAECF0] p-2">
                {item.err ? (
                  <div
                    className="badge badge-error"
                    title={JSON.stringify(item.err)}
                  >
                    Failed
                  </div>
                ) : (
                  <div className="badge badge-success">Success</div>
                )}
              </td>
            </tr>
          ))}
           {(query.data?.length ?? 0) > 5 && (
                  <tr>
                    <td colSpan={4} className="text-center">
                      <button className="btn btn-xs btn-outline" onClick={() => setShowAll(!showAll)}>
                        {showAll ? 'Show Less' : 'Show All'}
                      </button>
                    </td>
                  </tr>
            )}
        </tbody>
      </table>
    </div>
  );
}
