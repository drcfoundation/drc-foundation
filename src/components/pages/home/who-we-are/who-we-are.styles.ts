import { Interpolation } from "@emotion/core";
import { Theme } from "../../../../../types/theme";
import { grid } from "../../../ui-library/design-tokens/grid";
import { Device } from "../../../ui-library/design-tokens/media-queries";

const paragraph = (theme: Theme): Interpolation => ({
  color: theme.text,
  marginBottom: grid(2),

  ":last-of-type": {
    marginBottom: 0,
  },

  a: {
    textDecoration: "underline",
  },
});

const buttonContainer: Interpolation = {
  display: "flex",
  justifyContent: "center",
};

const button: Interpolation = {
  width: "100%",
  [Device.DesktopTablet]: {
    maxWidth: grid(34.5),
  },
};

const styles = {
  paragraph,
  buttonContainer,
  button,
};

export default styles;
