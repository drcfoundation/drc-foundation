import { Interpolation } from "@emotion/core";
import { Theme } from "../../../../../../types/theme";
import { grid } from "../../../../ui-library/design-tokens/grid";

const description = (theme: Theme): Interpolation => ({
  color: theme.text,
  textAlign: "center",
  marginBottom: grid(4),
});

const listContainer: Interpolation = {
  display: "flex",
  justifyContent: "center",
};

const list = (theme: Theme): Interpolation => ({
  color: theme.text,
  listStyleType: "none",

  "> li": {
    position: "relative",
    paddingLeft: grid(2.5),
    marginBottom: grid(1.5),

    ":last-of-type": {
      marginBottom: 0,
    },

    ":before": {
      position: "absolute",
      left: 0,
      top: 7,
      content: `''`,
      display: "block",
      width: 11,
      height: 11,
      backgroundColor: theme.background,
      border: `2px solid ${theme.foreground}`,
      borderRadius: "50%",
      zIndex: 1,
    },
  },
});

const styles = {
  description,
  listContainer,
  list,
};

export default styles;
