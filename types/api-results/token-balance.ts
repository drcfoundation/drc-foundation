export interface TokenBalanceResult {
  token: string;
  wallet: string;
  name: string;
  symbol: string;
  balance: string;
  eth_balance: string;
  decimals: number;
  block: number;
}

export interface TokenBalanceMapped {
  token: string;
  wallet: string;
  name: string;
  symbol: string;
  balance: number;
  ethBalance: number;
  decimals: number;
  block: number;
}
