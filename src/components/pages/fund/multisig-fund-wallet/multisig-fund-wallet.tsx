import * as React from "react";
import { Language } from "../../../../../types/language";
import Button from "../../../ui-library/button/button";
import { grid } from "../../../ui-library/design-tokens/grid";
import Heading from "../../../ui-library/text/heading";
import Separator from "../../../ui-library/separator/separator";
import MarginBox from "../../../ui-library/margin-box/margin-box";
import FundBalance from "./fund-balance/fund-balance";
import WalletInfoModal from "./wallet-info-modal/wallet-info-modal";
import styles from "./multisig-fund-wallet.styles";
import GEN00NFTGiveAway from "./gen00-give-away/gen00-give-away";
import FundUseCases from "./fund-use-cases/fund-use-cases";
import GEN01NFTGiveAway from "./gen01-give-away/gen01-give-away";

const heading: Record<Language, string> = {
  en: "Donate to the DRC Foundation Fund Wallet",
  zh: "为DRC基金会钱包捐款赞助",
};

interface MultisigFundWalletProps {
  lang?: Language;
}

const MultisigFundWallet: React.FC<MultisigFundWalletProps> = ({
  lang = "en",
}) => {
  const [isModalOpen, setModalOpen] = React.useState<boolean>(false);

  const button = (
    <div css={styles.buttonContainer}>
      <Button css={styles.button} onClick={() => setModalOpen(true)}>
        DONATE TO THE FUND
      </Button>
    </div>
  );

  return (
    <div id="nft" css={styles.root}>
      <MarginBox margin={{ bottom: grid(4) }}>
        <GEN01NFTGiveAway lang={lang} />
      </MarginBox>

      <Heading component="h2" textAlign="center" margin={{ bottom: grid(2) }}>
        {heading[lang]}
      </Heading>

      <div css={styles.address}>0x356B82b7A235242F578883132a60b7D8017900AF</div>

      <MarginBox margin={{ bottom: grid(4) }}>{button}</MarginBox>

      <MarginBox margin={{ bottom: grid(2) }}>
        <FundBalance />
      </MarginBox>

      <Separator margin={{ bottom: grid(4) }} />

      <MarginBox margin={{ bottom: grid(5) }}>
        <GEN00NFTGiveAway lang={lang} />
      </MarginBox>

      {button}

      <WalletInfoModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
};

export default MultisigFundWallet;
