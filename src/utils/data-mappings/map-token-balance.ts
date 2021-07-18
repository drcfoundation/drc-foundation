import {
  TokenBalanceMapped,
  TokenBalanceResult,
} from "../../../types/api-results/token-balance";
import { toNumber } from "../format-number";

export const mapTokenBalance = (
  data?: TokenBalanceResult
): TokenBalanceMapped | undefined => {
  if (!data) {
    return undefined;
  }

  return {
    token: data.token,
    wallet: data.wallet,
    name: data.name,
    symbol: data.symbol,
    balance: toNumber(data.balance)!,
    ethBalance: toNumber(data.eth_balance)!,
    decimals: data.decimals,
    block: data.block,
  };
};
