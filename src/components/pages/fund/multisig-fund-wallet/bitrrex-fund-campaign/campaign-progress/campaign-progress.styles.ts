import { Interpolation } from "@emotion/core";
import { Theme } from "../../../../../../../types/theme";
import { Fonts } from "../../../../../ui-library/design-tokens/fonts";
import { grid } from "../../../../../ui-library/design-tokens/grid";
import { Device } from "../../../../../ui-library/design-tokens/media-queries";

const labels: Interpolation = {
  display: "flex",
  justifyContent: "space-between",
  fontSize: 18,
  fontWeight: Fonts.Weight.Bold,
  marginBottom: grid(1.5),

  [Device.DesktopTablet]: {
    fontSize: 24,
  },
};

const progressBar = (theme: Theme): Interpolation => ({
  position: "relative",
  height: grid(3),
  border: `1px solid ${theme.foreground}`,
  borderRadius: "2px",
});

const activeArea = (theme: Theme): Interpolation => ({
  position: "absolute",
  top: 0,
  left: 0,
  minWidth: "1%",
  height: "100%",
  backgroundColor: theme.foreground,
});

const styles = {
  labels,
  progressBar,
  activeArea,
};

export default styles;
