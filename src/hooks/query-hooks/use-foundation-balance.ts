import LRU from "lru-cache";
import * as React from "react";
import { NftGen } from "../../../types/nfts";
import { getBalance, getNFTBalance } from "../../utils/fund-balance";

interface FundBalanceData {
  ethBalance: number;
  wethBalance: number;
  drcBalance: number;
  usdcBalance: number;
}

const cache = new LRU<string, FundBalanceData>({
  max: 50000,
  maxAge: 1000 * 30,
});

export const useFoundationBalance = () => {
  const [data, setData] = React.useState<FundBalanceData>();

  React.useEffect(() => {
    const cachedData = cache.get("fundBalance");

    if (cachedData) {
      setData(cachedData);
    } else {
      getBalance().then((balance) => {
        if (balance) {
          setData(balance);
          cache.set("fundBalance", balance);
        }
      });
    }
  }, []);

  return {
    data,
  };
};

export const useNFTBalance = (gen: NftGen) => {
  const [data, setData] = React.useState<number>();

  React.useEffect(() => {
    getNFTBalance(gen).then(setData);
  }, []);

  return {
    data,
  };
};
