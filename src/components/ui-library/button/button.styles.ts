import { Interpolation } from "@emotion/core";
import { Theme } from "../../../../types/theme";
import { grid } from "../design-tokens/grid";

const root = (theme: Theme): Interpolation => ({
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  maxWidth: "100%",
  height: grid(5),
  fontSize: 16,
  color: theme.foreground,
  backgroundColor: "transparent",
  border: `1px solid ${theme.foreground}`,
  paddingLeft: grid(1.5),
  paddingRight: grid(1.5),
  borderRadius: "2px",
  transition: "all 0.2s ease",
  overflow: "hidden",
  WebkitAppearance: "none",
  cursor: "pointer",
  outline: 0,

  ":hover": {
    transform: "translate(-1px, -2px)",
    boxShadow: `5px 3px 0 ${theme.foreground}`,
  },

  ":active": {
    transform: "translate(0px, 0px)",
    boxShadow: `1px 1px 0 ${theme.foreground}`,
    outline: 0,
  },
});

const styles = {
  root,
};

export default styles;
