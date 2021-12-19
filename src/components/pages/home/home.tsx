import * as React from "react";
import Container from "../../ui-library/container/container";
import { grid } from "../../ui-library/design-tokens/grid";
import MarginBox from "../../ui-library/margin-box/margin-box";
import PageHeading from "../../modules/page-heading/page-heading";
import TopLogo from "../../modules/top-logo/top-logo";
import { Language } from "../../../../types/language";
import MarketChart from "./market-chart/market-chart";
import RelatedLinks from "./related-links/related-links";
import WhoWeAre from "./who-we-are/who-we-are";
import HowToBuyVideo from "./how-to-buy-video/how-to-buy-video";
import Exchanges from "./exchanges/exchanges";

interface HomeProps {
  lang?: Language;
}

const Home: React.FC<HomeProps> = ({ lang = "en" }) => {
  return (
    <Container>
      <MarginBox
        margin={{ desktop: { bottom: grid(4) }, mobile: { bottom: grid(2) } }}
      >
        <PageHeading />
      </MarginBox>

      <TopLogo />

      <MarginBox margin={{ bottom: grid(8) }}>
        <WhoWeAre lang={lang} />
      </MarginBox>

      <MarginBox margin={{ bottom: grid(8) }}>
        <MarketChart lang={lang} />
      </MarginBox>

      <MarginBox margin={{ bottom: grid(5) }}>
        <RelatedLinks lang={lang} />
      </MarginBox>

      {lang === "en" && (
        <MarginBox
          margin={{ desktop: { bottom: grid(5) }, mobile: { bottom: grid(3) } }}
        >
          <HowToBuyVideo />
        </MarginBox>
      )}

      <MarginBox
        margin={{ desktop: { bottom: grid(5) }, mobile: { bottom: grid(2) } }}
      >
        <Exchanges lang={lang} />
      </MarginBox>
    </Container>
  );
};

export default Home;
