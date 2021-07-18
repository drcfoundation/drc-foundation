import * as React from "react";
import { Language } from "../../../../../../types/language";
import styles from "./nft-claimed-process.styles";

interface ClaimedProgressProps {
  lang?: Language;
  remaining: number;
}

const NftClaimedProgress: React.FC<ClaimedProgressProps> = ({
  lang = "en",
  remaining,
}) => {
  const claimedCount = 100 - remaining;

  const label: Record<Language, string> = {
    en: `${claimedCount} of 100 NFTs claimed`,
    zh: `${claimedCount}个NFT已送出`,
  };

  const total: Record<Language, string> = {
    en: "100 total",
    zh: "总计100个",
  };

  return (
    <div>
      <div css={styles.labels}>
        <div>{label[lang]}</div>
        <div>{total[lang]}</div>
      </div>
      <div css={styles.progressBar}>
        <div css={styles.activeArea} style={{ width: `${claimedCount}%` }} />
      </div>
    </div>
  );
};

export default NftClaimedProgress;
