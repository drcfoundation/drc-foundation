import * as React from "react";
import { Language } from "../../../../types/language";
import { Theme } from "../../../../types/theme";
import { FUND } from "../../../data/fund";
import PageHeading from "../../modules/page-heading/page-heading";
import TopLogo from "../../modules/top-logo/top-logo";
import Container from "../../ui-library/container/container";
import { grid } from "../../ui-library/design-tokens/grid";
import { Device } from "../../ui-library/design-tokens/media-queries";
import Heading from "../../ui-library/text/heading";
import MultisigFundWallet from "./multisig-fund-wallet/multisig-fund-wallet";

interface FundProps {
  lang?: Language;
}

const Fund: React.FC<FundProps> = ({ lang = "en" }) => {
  const data = FUND[lang];

  return (
    <Container>
      <PageHeading />

      <TopLogo />

      <Heading component="h1" textAlign="center" margin={{ bottom: grid(3) }}>
        {data.title}
      </Heading>

      <div
        css={(theme: Theme) => ({
          color: theme.text,
          marginBottom: grid(4),
          [Device.DesktopTablet]: { marginBottom: grid(5) },
          p: { marginBottom: grid(2) },
        })}
      >
        {data.contents.map((content) => (
          <p
            key={content.slice(0, 30)}
            dangerouslySetInnerHTML={{ __html: content }}
          />
        ))}
      </div>

      <MultisigFundWallet lang={lang} />
    </Container>
  );
};

export default Fund;
