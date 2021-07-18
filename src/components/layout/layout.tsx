import * as React from "react";
import "intersection-observer";
import { Global } from "@emotion/core";
import { ThemeProvider } from "emotion-theming";
import Container from "../ui-library/container/container";
import { SiteContext } from "../../site-context/site-context";
import { darkTheme, lightTheme } from "../ui-library/design-tokens/theme";
import { Language } from "../../../types/language";
import { anchorToHash } from "../../utils/dom/anchor-to-hash";
import SocialShares from "../modules/social-shares/social-shares";
import { globalStyle, styles } from "./layout.styles";

import Header, { NavTab } from "./header/header";
import Footer from "./footer/footer";
import Seal from "./seal/seal";

interface LayoutProps {
  activeTab?: NavTab;
  lang?: Language;
}

const Layout: React.FC<LayoutProps> = ({ activeTab, lang, children }) => {
  const { isDarkMode } = React.useContext(SiteContext);

  React.useEffect(() => {
    anchorToHash();
  }, []);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <Global styles={globalStyle} />

      <Header activeTab={activeTab} lang={lang} />

      <main css={styles.content}>{children}</main>

      <Container>
        <Seal />
      </Container>

      <SocialShares />

      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
