import { Interpolation } from "@emotion/core";
import { grid } from "../../ui-library/design-tokens/grid";
import { Device } from "../../ui-library/design-tokens/media-queries";

const logoContainer: Interpolation = {
  display: "flex",
  justifyContent: "center",
  marginBottom: grid(3),

  [Device.DesktopTablet]: {
    marginBottom: grid(5),
  },
};

const logo: Interpolation = {
  width: 145,
  height: 145,

  [Device.DesktopTablet]: {
    width: 230,
    height: 230,
  },
};

const styles = {
  logoContainer,
  logo,
};

export default styles;
