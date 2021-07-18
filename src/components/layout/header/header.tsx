import { Link } from "gatsby";
import * as React from "react";
import { Language } from "../../../../types/language";
import { Theme } from "../../../../types/theme";
import { getUrlByLanguage } from "../../../utils/url";
import Container from "../../ui-library/container/container";
import DarkModeAngLanguageToggle from "../dark-mode-and-language-toggle/dark-mode-and-language-toggle";
import styles from "./header.styles";

export enum NavTab {
  Home = "home",
  Philosophy = "philosophy",
  Fund = "fund",
  Ecosystem = "ecosystem",
}

type TabName = Record<Language, string>;
interface NavItem {
  id: NavTab;
  name: TabName;
  url: string;
}

const navItems: NavItem[] = [
  {
    id: NavTab.Home,
    name: { en: "HOME", zh: "首页" },
    url: "/",
  },
  {
    id: NavTab.Philosophy,
    name: { en: "PHILOSOPHY", zh: "理念" },
    url: "/philosophy/",
  },
  {
    id: NavTab.Fund,
    name: { en: "FUND", zh: "基金" },
    url: "/fund/",
  },
  {
    id: NavTab.Ecosystem,
    name: { en: "ECOSYSTEM", zh: "生态系统" },
    url: "/ecosystem/",
  },
];

interface HeaderProps {
  activeTab?: NavTab;
  lang?: Language;
}

const Header: React.FC<HeaderProps> = ({ activeTab, lang = "en" }) => {
  const itemStyle = (isActive: boolean) => (theme: Theme) => [
    styles.item(theme),
    isActive && styles.itemActive(theme),
  ];

  return (
    <header css={styles.root}>
      <Container fullWidthOnMobile={true}>
        <nav css={styles.nav}>
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={getUrlByLanguage({ url: item.url, lang })}
              css={itemStyle(activeTab === item.id)}
            >
              {item.name[lang]}
            </Link>
          ))}
        </nav>
      </Container>

      <div css={styles.darkModeToggle}>
        <DarkModeAngLanguageToggle currentLang={lang} />
      </div>
    </header>
  );
};

export default Header;
