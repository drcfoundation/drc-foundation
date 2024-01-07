import * as React from "react";
import { Language } from "../../../../types/language";
import {
  communityResourceLinks,
  informationResourceLink,
  marketResourceLinks,
  mediaPostLinks,
} from "../../../data/resource-link-sections";
import PageHeading from "../../modules/page-heading/page-heading";
import TopLogo from "../../modules/top-logo/top-logo";
import Container from "../../ui-library/container/container";
import { grid } from "../../ui-library/design-tokens/grid";
import MarginBox from "../../ui-library/margin-box/margin-box";
import LinksSection from "../../ui-library/links-section/links-section";
import GovernanceAndProposals from "./governance-and-proposals/governance-and-proposals";
import LogoDivider from "./logo-divider/logo-divider";

const headings = {
  reps: {
    en: "Q2 2021 elect DRC Community Core Contributors",
    zh: "2021年第二季度DRC社区代表",
  },
  community: {
    en: "Discussion and Community",
    zh: "讨论 - 社区",
  },
  media: {
    en: "Press and Media",
    zh: "媒体 - 新闻",
  },
  market: {
    en: "Marketplace and Data",
    zh: "市场 - 数据",
  },
  information: {
    en: "Information and Media",
    zh: "信息媒体",
  },
};

interface EcosystemProps {
  lang?: Language;
}

const Ecosystem: React.FC<EcosystemProps> = ({ lang = "en" }) => {
  return (
    <Container>
      <PageHeading />

      <TopLogo />

      <MarginBox
        margin={{ desktop: { bottom: grid(6) }, mobile: { bottom: grid(5) } }}
      >
        <GovernanceAndProposals lang={lang} />
      </MarginBox>

      <LogoDivider />

      <MarginBox margin={{ bottom: grid(3) }}>
        <LinksSection
          heading={headings.community[lang]}
          links={communityResourceLinks}
        />
      </MarginBox>

      {/* <MarginBox margin={{ bottom: grid(3) }}>
        <LinksSection heading={headings.media[lang]} links={mediaPostLinks} />
      </MarginBox> */}

      <MarginBox margin={{ bottom: grid(3) }}>
        <LinksSection
          heading={headings.market[lang]}
          links={marketResourceLinks}
        />
      </MarginBox>

      <MarginBox margin={{ bottom: grid(3) }}>
        <LinksSection
          heading={headings.information[lang]}
          links={informationResourceLink}
        />
      </MarginBox>
    </Container>
  );
};

export default Ecosystem;
