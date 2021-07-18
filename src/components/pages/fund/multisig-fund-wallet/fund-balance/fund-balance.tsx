import * as React from "react";
import { CurrencySymbol } from "../../../../../../types/currency";
import { useCoinsPrices } from "../../../../../hooks/query-hooks/use-coin-price";
import { useFoundationBalance } from "../../../../../hooks/query-hooks/use-foundation-balance";
import { formatCurrency } from "../../../../../utils/format-number";
import Column from "../../../../ui-library/column-system/column";
import Row from "../../../../ui-library/column-system/row";
import styles from "./fund-balance.styles";

const FundBalance: React.FC = () => {
  const { data: coinPrices } = useCoinsPrices({
    ids: ["ethereum", "digital-reserve-currency", "usd-coin"],
  });

  const { data: foundationBalance } = useFoundationBalance();

  const ethPriceUSD = coinPrices?.ethereum?.usd;
  const drcPriceUSD = coinPrices?.["digital-reserve-currency"]?.usd;
  const usdcPriceUSD = coinPrices?.["usd-coin"]?.usd;

  if (
    !foundationBalance ||
    !coinPrices ||
    !ethPriceUSD ||
    !drcPriceUSD ||
    !usdcPriceUSD
  ) {
    return null;
  }

  const ethUSDBalance = foundationBalance.ethBalance * ethPriceUSD;
  const wethUSDBalance = foundationBalance.wethBalance * ethPriceUSD;
  const drcUSDBalance = foundationBalance.drcBalance * drcPriceUSD;
  const usdcBalance = foundationBalance.usdcBalance * usdcPriceUSD;

  const total = ethUSDBalance + wethUSDBalance + drcUSDBalance + usdcBalance;

  const currency = CurrencySymbol.USD;
  const currencySymbol = "USD";

  return (
    <div>
      <div css={styles.heading}>Current balance</div>
      <div css={styles.balance}>
        {formatCurrency({ value: total, currency })} {currencySymbol}
      </div>

      <Row>
        <Column spanLg={3} spanMd={3} spanSm={6} spanXs={6}>
          <div css={styles.col}>
            <div css={styles.colHeading}>ETH</div>
            <div css={styles.mainAssetBalance}>
              {formatCurrency({
                value: foundationBalance.ethBalance,
                currency: CurrencySymbol.ETH,
                round: 3,
              })}
            </div>
            <div>
              {formatCurrency({
                value: ethUSDBalance,
                currency,
              })}{" "}
              {currencySymbol}
            </div>
          </div>
        </Column>
        <Column spanLg={3} spanMd={3} spanSm={6} spanXs={6}>
          <div css={styles.col}>
            <div css={styles.colHeading}>WETH</div>
            <div css={styles.mainAssetBalance}>
              {formatCurrency({
                value: foundationBalance.wethBalance,
                currency: CurrencySymbol.ETH,
                round: 3,
              })}
            </div>
            <div>
              {formatCurrency({
                value: wethUSDBalance,
                currency,
              })}{" "}
              {currencySymbol}
            </div>
          </div>
        </Column>
        <Column spanLg={3} spanMd={3} spanSm={6} spanXs={6}>
          <div css={styles.col}>
            <div css={styles.colHeading}>DRC</div>
            <div css={styles.mainAssetBalance}>
              {formatCurrency({
                value: foundationBalance.drcBalance,
                currency: CurrencySymbol.DRC,
              })}
            </div>
            <div>
              {formatCurrency({
                value: drcUSDBalance,
                currency,
              })}{" "}
              {currencySymbol}
            </div>
          </div>
        </Column>
        <Column spanLg={3} spanMd={3} spanSm={6} spanXs={6}>
          {" "}
          <div css={styles.col}>
            <div css={styles.colHeading}>USDC</div>
            <div css={styles.mainAssetBalance}>
              {formatCurrency({
                value: foundationBalance.usdcBalance,
                currency: CurrencySymbol.USDC,
              })}
            </div>
            <div>
              {formatCurrency({
                value: usdcBalance,
                currency,
              })}{" "}
              {currencySymbol}
            </div>
          </div>
        </Column>
      </Row>
    </div>
  );
};

export default FundBalance;
