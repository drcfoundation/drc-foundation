import * as React from "react";
import { Language } from "../../../../../types/language";
import { Theme } from "../../../../../types/theme";
import { mediaPostLinks } from "../../../../data/resource-link-sections";
import { communityLinks, marketLinks } from "../../../../data/resource-links";
import { grid } from "../../../ui-library/design-tokens/grid";
import MarginBox from "../../../ui-library/margin-box/margin-box";
import Heading from "../../../ui-library/text/heading";
import LinksSection from "../../../ui-library/links-section/links-section";
import ContractAudit from "./contract-audit";
import LinkButtonGroup from "./link-button-group";
import LinkButtonSingle from "./link-button-single";

const mediaSectionHeading: Record<Language, string> = {
  en: "Press and Media",
  zh: "媒体 - 新闻",
};

const topSectionHeading: Record<Language, string> = {
  en: "DRC Token Contract Address",
  zh: "DRC代币合约地址",
};

const bottomSectionHeading: Record<Language, string> = {
  en: "Join DRC Community",
  zh: "加入DRC社区",
};

const bottomSectionSubHeading: Record<Language, string> = {
  en: "Participate and grow together",
  zh: "参与并共同成长",
};

const mainMarketLinks = [
  {
    label: "ETHERSCAN",
    url: marketLinks.etherscan.url,
  },
  // {
  //   label: "UNISWAP",
  //   url: marketLinks.uniswapTrade.url,
  // },
  // {
  //   label: "DEXTOOLS",
  //   url: marketLinks.dexTools.url,
  // },
];

const mainCommunityLinks = [
  {
    label: "TELEGRAM",
    url: communityLinks.telegram.url,
  },
  {
    label: "TWITTER",
    url: communityLinks.twitter.url,
  },
  {
    label: "DISCORD",
    url: communityLinks.discord.url,
  },
  // {
  //   label: "SNAPSHOT",
  //   url: communityLinks.snapshot.url,
  // },
  // {
  //   label: "REDDIT",
  //   url: communityLinks.reddit.url,
  // },
  // {
  //   label: "DRC GLOBAL SITE",
  //   url: communityLinks.drcGlobal.url,
  // },
];

interface RelatedLinksProps {
  lang?: Language;
}

const RelatedLinks: React.FC<RelatedLinksProps> = ({ lang = "en" }) => {
  return (
    <section>
      <MarginBox
        margin={{ desktop: { bottom: grid(8) }, mobile: { bottom: grid(5) } }}
      >
        <Heading component="h2" textAlign="center" margin={{ bottom: grid(2) }}>
          {topSectionHeading[lang]}
        </Heading>

        <div
          css={(theme: Theme) => ({
            color: theme.text,
            textAlign: "center",
            wordBreak: "break-word",
            marginBottom: grid(3),
          })}
        >
          0xa150Db9b1Fa65b44799d4dD949D922c0a33Ee606
        </div>

        <LinkButtonSingle link={mainMarketLinks[0]} />
      </MarginBox>

      {/* <MarginBox
        margin={{ desktop: { bottom: grid(5) }, mobile: { bottom: grid(2) } }}
      >
        <LinksSection
          heading={mediaSectionHeading[lang]}
          links={mediaPostLinks}
        />
      </MarginBox> */}

      <MarginBox
        margin={{ desktop: { bottom: grid(8) }, mobile: { bottom: grid(5) } }}
      >
        <ContractAudit lang={lang} />
      </MarginBox>

      <Heading component="h2" textAlign="center" margin={{ bottom: grid(2) }}>
        {bottomSectionHeading[lang]}
      </Heading>

      <div
        css={(theme: Theme) => ({
          color: theme.text,
          textAlign: "center",
          marginBottom: grid(3),
        })}
      >
        {bottomSectionSubHeading[lang]}
      </div>

      <LinkButtonGroup links={mainCommunityLinks} />
    </section>
  );
};

export default RelatedLinks;
