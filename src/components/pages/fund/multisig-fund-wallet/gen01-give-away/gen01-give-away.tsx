import * as React from "react";
import { Language } from "../../../../../../types/language";
import { NFT01_GIVE_AWAY } from "../../../../../data/nft-give-away";
import { grid } from "../../../../ui-library/design-tokens/grid";
import Image from "../../../../ui-library/image/image";
import MarginBox from "../../../../ui-library/margin-box/margin-box";
import Heading from "../../../../ui-library/text/heading";
import ExternalLinkBlackIcon from "../../../../../images/icons/external-link-icon-black.svg";
import ExternalLinkWhiteIcon from "../../../../../images/icons/external-link-icon-white.svg";
import { SiteContext } from "../../../../../site-context/site-context";
import { useNFTBalance } from "../../../../../hooks/query-hooks/use-foundation-balance";
import Text from "../../../../ui-library/text/text";
import { Fonts } from "../../../../ui-library/design-tokens/fonts";
import NftClaimedProgress from "../nft-claimed-progress/nft-claimed-process";
import styles from "./gen01-give-away.styles";

const headingOnGoing: Record<Language, string> = {
  en: "Become a DRC Supporting Member GEN01",
  zh: "成为GEN01的DRC赞助成员",
};

const headingClaimed: Record<Language, string> = {
  en: "DRC Supporting Member GEN01",
  zh: "GEN01的DRC赞助成员",
};

const description: Record<Language, string> = {
  en:
    "100 limited edition Official DRC Supporting Member GEN01 Digital Collectibles",
  zh: "100个官方限量版DRC赞助成员NFT收藏",
};

const subHeadingClaimed: Record<Language, string> = {
  en: "All GEN01 NFTs have now been claimed",
  zh: "GEN01 NFT已全部送出",
};

const descriptionClaimed: Record<Language, string> = {
  en: "Thank you to all who donated to claim a DRC Supporting Member GEN01 NFT",
  zh: "感谢所有为DRC发展做出贡献的朋友",
};

interface NFTGiveAwayProps {
  lang?: Language;
}

const GEN01NFTGiveAway: React.FC<NFTGiveAwayProps> = ({ lang = "en" }) => {
  const { data: remaining } = useNFTBalance("gen01");

  if (remaining === undefined) {
    return null;
  }

  const { isDarkMode } = React.useContext(SiteContext);
  const externalLinkIcon = isDarkMode
    ? ExternalLinkWhiteIcon
    : ExternalLinkBlackIcon;

  const isAllClaimed = remaining === 0;
  const heading = isAllClaimed ? headingClaimed : headingOnGoing;

  return (
    <div>
      <Heading component="h2" textAlign="center" margin={{ bottom: grid(2) }}>
        {heading[lang]}
      </Heading>

      <div css={styles.description}>{description[lang]}</div>

      <MarginBox margin={{ bottom: grid(4) }}>
        <NftClaimedProgress lang={lang} remaining={remaining} />
      </MarginBox>

      {isAllClaimed && (
        <>
          <Text
            component="div"
            textAlign="center"
            textSize={18}
            weight={Fonts.Weight.Bold}
            margin={{ bottom: grid(2) }}
          >
            {subHeadingClaimed[lang]}
          </Text>

          <Text component="div" css={styles.description}>
            {descriptionClaimed[lang]}
          </Text>
        </>
      )}

      {!isAllClaimed &&
        NFT01_GIVE_AWAY[lang].map((content) => (
          <p
            key={content.slice(0, 30)}
            css={styles.paragraph}
            dangerouslySetInnerHTML={{ __html: content }}
          />
        ))}

      <a
        css={styles.gifLink}
        href="https://app.rarible.com/token/0xe57b446d45432a1827210240ef18a21059bfe945:16"
        target="_blank"
        rel="noreferrer"
      >
        <video
          css={styles.gif}
          width={800}
          height={800}
          autoPlay={true}
          muted={true}
          loop={true}
          playsInline={true}
        >
          <source
            src="https://storage.opensea.io/files/211594df7771e0b571749a97e8132080.mp4"
            type="video/mp4"
          />
        </video>
      </a>

      <a
        css={styles.textLink}
        href="https://app.rarible.com/token/0xe57b446d45432a1827210240ef18a21059bfe945:16"
        target="_blank"
        rel="noreferrer"
      >
        <span>View NFT on Rarible</span>
        <Image src={externalLinkIcon} alt="Link" />
      </a>
    </div>
  );
};

export default GEN01NFTGiveAway;
