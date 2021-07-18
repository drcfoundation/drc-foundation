import * as React from "react";
import { Colors } from "../../../../ui-library/design-tokens/colors";
import { grid } from "../../../../ui-library/design-tokens/grid";
import Modal from "../../../../ui-library/modal/modal";
import Heading from "../../../../ui-library/text/heading";
import QRCode from "../../../../../images/drc-foundation-fund-wallet-qr-code.png";
import Logo from "../../../../../images/drc-foundation-logo-black.svg";
import CopyIcon from "../../../../../images/icons/copy-icon.svg";
import ExternalLinkIcon from "../../../../../images/icons/external-link-icon-black.svg";
import Image from "../../../../ui-library/image/image";
import { copyToClipboard } from "../../../../../utils/dom/copy-to-clipboard";
import MarginBox from "../../../../ui-library/margin-box/margin-box";
import styles from "./wallet-info-modal.styles";

interface WalletInfoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WalletInfoModal: React.FC<WalletInfoModalProps> = ({
  isOpen,
  onClose,
}) => {
  const walletAddress = "0x356B82b7A235242F578883132a60b7D8017900AF";

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Heading
        textAlign="center"
        color={Colors.Black}
        margin={{ bottom: grid(3) }}
      >
        Donate to help the DRC ecosystem grow
      </Heading>

      <MarginBox
        margin={{ mobile: { bottom: grid(2) }, desktop: { bottom: grid(3) } }}
      >
        <div css={styles.description}>
          <span css={styles.desktopOnly}>
            Deposit funds by scanning the QR code or copying the address below.
          </span>{" "}
          <strong>
            Please only send ETH, DRC or USDC from your own non-custodial
            wallet.
          </strong>
        </div>
      </MarginBox>

      <div css={styles.qrCodeHeading}>DRC Foundation Fund</div>

      <div css={styles.qrCodeContainer}>
        <Image src={QRCode} alt="QR Code" />
      </div>

      <div css={styles.addressContainer}>
        <div css={styles.logoContainer}>
          <Image src={Logo} alt="Logo" />
        </div>
        <div css={styles.address}>{walletAddress}</div>
        <div
          role="button"
          aria-label="copy"
          css={styles.copyButton}
          onClick={() => copyToClipboard(walletAddress)}
        >
          <Image src={CopyIcon} alt="Copy" />
        </div>
        <a
          css={styles.goToLink}
          href="https://gnosis-safe.io/app/#/safes/0x356B82b7A235242F578883132a60b7D8017900AF/balances"
          target="_blank"
          rel="noreferrer"
        >
          <Image src={ExternalLinkIcon} alt="Open link" />
        </a>
      </div>

      <div css={[styles.separator, styles.desktopOnly]} />

      <div css={[styles.info, styles.desktopOnly]}>
        All the received contributions will be held in the secure
        multi-signature crypto wallet and will be used strictly for the purposes
        of supporting the DRC ecosystem growth.
      </div>
    </Modal>
  );
};

export default WalletInfoModal;
