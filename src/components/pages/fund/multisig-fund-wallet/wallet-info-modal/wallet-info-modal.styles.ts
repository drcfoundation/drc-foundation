import { Interpolation } from "@emotion/core";
import { Colors } from "../../../../ui-library/design-tokens/colors";
import { Fonts } from "../../../../ui-library/design-tokens/fonts";
import { grid } from "../../../../ui-library/design-tokens/grid";
import { Device } from "../../../../ui-library/design-tokens/media-queries";

const description: Interpolation = {
  color: Colors.Charcoal,
  textAlign: "center",
};

const desktopOnly: Interpolation = {
  [Device.Mobile]: {
    display: "none",
  },
};

const mobileOnly: Interpolation = {
  [Device.DesktopTablet]: {
    display: "none",
  },
};

const qrCodeHeading: Interpolation = {
  fontSize: "18px",
  fontWeight: Fonts.Weight.Bold,
  textAlign: "center",
  color: Colors.Black,
  marginBottom: grid(2),
};

const qrCodeContainer: Interpolation = {
  width: grid(18),
  height: grid(18),
  padding: grid(2),
  border: `1px solid ${Colors.BorderGrey}`,
  borderRadius: "8px",
  marginLeft: "auto",
  marginRight: "auto",
  marginBottom: grid(4),
};

const addressContainer: Interpolation = {
  display: "flex",
  alignItems: "center",
};

const logoContainer: Interpolation = {
  flexShrink: 0,
  width: grid(4),
  height: grid(4),
  marginRight: grid(1),

  "> img": {
    width: "100%",
    height: "100%",
  },
};

const address: Interpolation = {
  fontWeight: Fonts.Weight.Bold,
  lineHeight: grid(2),
  wordBreak: "break-word",
  color: Colors.Black,
  marginRight: grid(1),

  [Device.MobilePortXs]: {
    fontSize: 12,
    lineHeight: grid(1.5),
  },
};

const copyButton: Interpolation = {
  position: "relative",
  flexShrink: 0,
  width: grid(2.5),
  height: grid(2.5),
  marginRight: grid(1),
  cursor: "pointer",

  ":active": {
    "::before": {
      position: "absolute",
      top: grid(-4),
      left: grid(-1.5),
      content: '"Copied"',
      display: "flex",
      justifyContent: "center",
      width: grid(6),
      height: grid(2.5),
      fontSize: 14,
      fontWeight: Fonts.Weight.Bold,
      color: Colors.White,
      backgroundColor: Colors.Black,
      borderRadius: 4,
    },
  },
};

const goToLink: Interpolation = {
  flexShrink: 0,
  width: grid(2.5),
  height: grid(2.5),
};

const separator: Interpolation = {
  borderTop: `1px solid ${Colors.BorderGrey}`,
  marginTop: grid(4),
  marginBottom: grid(3),
};

const info: Interpolation = {
  color: Colors.Charcoal,
  textAlign: "center",
};

const styles = {
  description,
  desktopOnly,
  mobileOnly,
  qrCodeHeading,
  qrCodeContainer,
  addressContainer,
  logoContainer,
  address,
  copyButton,
  goToLink,
  separator,
  info,
};

export default styles;
