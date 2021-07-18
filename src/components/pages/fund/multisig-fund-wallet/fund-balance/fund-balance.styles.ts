import { Interpolation } from "@emotion/core";
import { Theme } from "../../../../../../types/theme";
import { Fonts } from "../../../../ui-library/design-tokens/fonts";
import { grid } from "../../../../ui-library/design-tokens/grid";

const heading = (theme: Theme): Interpolation => ({
  fontSize: 14,
  color: theme.text,
  textAlign: "center",
  marginBottom: grid(1),
});

const balance: Interpolation = {
  fontSize: 24,
  fontWeight: Fonts.Weight.Bold,
  textAlign: "center",
  marginBottom: grid(3),
};

const col: Interpolation = {
  textAlign: "center",
};

const colHeading = (theme: Theme): Interpolation => ({
  fontSize: 14,
  color: theme.text,
  marginBottom: grid(1),
});

const mainAssetBalance: Interpolation = {
  fontWeight: Fonts.Weight.Bold,
  marginBottom: grid(1),
};

const styles = {
  heading,
  balance,
  col,
  colHeading,
  mainAssetBalance,
};

export default styles;
