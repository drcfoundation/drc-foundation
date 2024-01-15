import * as React from "react";
import { Language } from "../../../../types/language";
import { footerLinks } from "../../../data/footer-links";
import Column from "../../ui-library/column-system/column";
import Row from "../../ui-library/column-system/row";
import Container from "../../ui-library/container/container";
import Image from "../../ui-library/image/image";
import DarkModeAngLanguageToggle from "../dark-mode-and-language-toggle/dark-mode-and-language-toggle";

import styles from "./footer.styles";

interface FooterProps {
  lang?: Language;
}

const Footer: React.FC<FooterProps> = ({ lang }) => {
  return (
    <footer css={styles.root}>
      <Container css={styles.container}>
        <div css={styles.links}>
          <Row isCenter={true}>
            {footerLinks.map((link) => (
              <Column
                key={link.url}
                spanLg={1.5}
                spanMd={1.5}
                spanSm={2}
                spanXs={2}
                isNoMarginBottom={true}
              >
                <a
                  href={link.url}
                  css={styles.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image src={link.icon} alt={link.name} />
                </a>
              </Column>
            ))}
          </Row>
        </div>
      </Container>

      <div css={styles.darkModeToggle}>
        <DarkModeAngLanguageToggle currentLang={lang} />
      </div>
    </footer>
  );
};

export default Footer;
