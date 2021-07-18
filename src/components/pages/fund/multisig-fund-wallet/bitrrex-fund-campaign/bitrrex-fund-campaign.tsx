import * as React from "react";
import { grid } from "../../../../ui-library/design-tokens/grid";
import MarginBox from "../../../../ui-library/margin-box/margin-box";
import Heading from "../../../../ui-library/text/heading";
import Text from "../../../../ui-library/text/text";
import CampaignProgress from "./campaign-progress/campaign-progress";

const BitrrexFundCampaign: React.FC = () => {
  return (
    <div>
      <Heading component="h2" textAlign="center" margin={{ bottom: grid(3) }}>
        Become a DRC Supporting Member GEN01
      </Heading>

      <Text
        component="div"
        type="secondary"
        textAlign="center"
        margin={{ bottom: grid(4) }}
      >
        <strong>Donate $1000 or more in $USDC</strong> to the Foundation Fund to
        qualify for a GEN01 NFT
      </Text>

      <MarginBox margin={{ bottom: grid(2) }}>
        <CampaignProgress />
      </MarginBox>

      <Text component="div" type="secondary" margin={{ bottom: grid(2.5) }}>
        Aside from the intrinsic incentive of helping DRC’s growth, the DRC
        Foundation would like to offer you an opportunity to claim a limited
        edition DRC Supporting Member GEN01 Digital Collectible NFT.
      </Text>
      <Text component="div" type="secondary" margin={{ bottom: grid(2.5) }}>
        <strong>
          A qualifying donation is $1000 worth of USDC per GEN01 NFT from your
          own non-custodial wallet.
        </strong>{" "}
        You can donate multiples of $1000 of USDC in 1 transaction to the Fund,
        and you’ll be sent the corresponding amount of GEN01 NFTs to your
        address.
      </Text>
      <Text component="div" type="secondary" margin={{ bottom: grid(4) }}>
        Only 100 GEN01 NFTs will ever be minted and will be sent to the
        respective USDC donation addresses within a day of their donations.
      </Text>
    </div>
  );
};

export default BitrrexFundCampaign;
