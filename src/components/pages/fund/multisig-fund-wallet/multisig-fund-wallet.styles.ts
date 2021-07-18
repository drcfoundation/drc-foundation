import { Interpolation } from "@emotion/core";
import { Theme } from "../../../../../types/theme";
import { grid } from "../../../ui-library/design-tokens/grid";
import { Device } from "../../../ui-library/design-tokens/media-queries";

const root = (theme: Theme): Interpolation => ({
  [Device.DesktopTablet]: {
    padding: grid(5),
    paddingBottom: grid(6),
    border: `1px solid ${theme.foreground}`,
    borderRadius: "2px",
  },
});

const address = (theme: Theme): Interpolation => ({
  color: theme.text,
  textAlign: "center",
  wordBreak: "break-word",
  marginBottom: grid(3),
});

const buttonContainer: Interpolation = {
  display: "flex",
  justifyContent: "center",
};

const button: Interpolation = {
  width: "100%",
  [Device.DesktopTablet]: {
    maxWidth: grid(33.5),
  },
};

const styles = {
  root,
  address,
  buttonContainer,
  button,
};

export default styles;
