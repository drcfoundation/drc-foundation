import { Interpolation } from "@emotion/core";
import { Theme } from "../../../../../../types/theme";
import { grid } from "../../../../ui-library/design-tokens/grid";

const description = (theme: Theme): Interpolation => ({
  color: theme.text,
  textAlign: "center",
  marginBottom: grid(4),
});

const paragraph = (theme: Theme): Interpolation => ({
  color: theme.text,
  marginBottom: grid(2),

  ":last-of-type": {
    marginBottom: grid(4),
  },
});

const gifLink: Interpolation = {
  position: "relative",
  display: "block",
  paddingBottom: "100%",
  overflow: "hidden",
  marginBottom: grid(3),
};

const gif = (theme: Theme): Interpolation => ({
  position: "absolute",
  top: "0",
  left: "0",
  width: "100% !important",
  height: "100% !important",
  backgroundColor: theme.imageLoadingBackground,
});

const textLink = (theme: Theme): Interpolation => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: theme.text,

  ":hover": {
    color: theme.foreground,
  },

  span: {
    marginRight: grid(0.5),
  },
});

const styles = {
  description,
  paragraph,
  gifLink,
  gif,
  textLink,
};

export default styles;
