import * as React from "react";
// import { useFoundationBalance } from "../../../../../../hooks/query-hooks/use-foundation-balance";
// import { grid } from "../../../../../ui-library/design-tokens/grid";
// import Text from "../../../../../ui-library/text/text";
import styles from "./campaign-progress.styles";

const CampaignProgress: React.FC = () => {
  // const { data: foundationBalance } = useFoundationBalance();

  // if (!foundationBalance) {
  //   return null;
  // }

  // const percentage = (foundationBalance.usdcBalance / 100000) * 100;
  // const leftToFill = 100000 - foundationBalance.usdcBalance;
  // const leftNFTs = Math.floor(leftToFill / 1000);

  return (
    <div>
      <div css={styles.labels}>
        <div>$100k of $100k target</div>
        <div>$100k</div>
      </div>
      <div css={styles.progressBar}>
        <div css={styles.activeArea} style={{ width: `100%` }} />
      </div>

      {/* <Text
        component="div"
        type="secondary"
        textSize={14}
        textAlign="right"
        margin={{ top: grid(1) }}
      >
        {leftNFTs} NFTs Left
      </Text> */}
    </div>
  );
};

export default CampaignProgress;
