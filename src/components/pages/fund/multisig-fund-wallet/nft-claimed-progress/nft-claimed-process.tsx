import * as React from "react";
import { Language } from "../../../../../../types/language";
import styles from "./nft-claimed-process.styles";

interface ClaimedProgressProps {
  lang?: Language;
  remaining: number;
  totalNft?: number;
}

const NftClaimedProgress: React.FC<ClaimedProgressProps> = ({
  lang = "en",
  remaining,
  totalNft = 100,
}) => {
  const claimedCount = totalNft - remaining;

  const label: Record<Language, string> = {
    en: `${claimedCount} of ${totalNft} NFTs claimed`,
    zh: `${claimedCount}个NFT已送出`,
  };

  const total: Record<Language, string> = {
    en: `${totalNft} total`,
    zh: `总计${totalNft}个`,
  };

  return (
    <div>
      <div css={styles.labels}>
        <div>{label[lang]}</div>
        <div>{total[lang]}</div>
      </div>
      <div css={styles.progressBar}>
        <div
          css={styles.activeArea}
          style={{ width: `${(claimedCount / totalNft) * 100}%` }}
        />
      </div>
    </div>
  );
};

export default NftClaimedProgress;
