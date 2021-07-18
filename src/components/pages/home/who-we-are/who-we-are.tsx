import * as React from "react";
import { Language } from "../../../../../types/language";
import { communityLinks } from "../../../../data/resource-links";
import { WHO_WE_ARE } from "../../../../data/who-we-are";
import Button from "../../../ui-library/button/button";
import { grid } from "../../../ui-library/design-tokens/grid";
import MarginBox from "../../../ui-library/margin-box/margin-box";
import Heading from "../../../ui-library/text/heading";
import styles from "./who-we-are.styles";

const buttonText: Record<Language, string> = {
  en: "VISIT DRC OFFICIAL WEBSITE",
  zh: "访问DRC官方网站",
};

interface WhoWeAreProps {
  lang?: Language;
}

const WhoWeAre: React.FC<WhoWeAreProps> = ({ lang = "en" }) => {
  const data = WHO_WE_ARE[lang];

  return (
    <section>
      <Heading component="h2" textAlign="center" margin={{ bottom: grid(3) }}>
        {data.title}
      </Heading>

      <MarginBox
        margin={{ desktop: { bottom: grid(4) }, mobile: { bottom: grid(3) } }}
      >
        {data.contents.map((content) => (
          <p
            key={content.slice(0, 30)}
            css={styles.paragraph}
            dangerouslySetInnerHTML={{ __html: content }}
          />
        ))}
      </MarginBox>

      <div css={styles.buttonContainer}>
        <Button to={communityLinks.drcGlobal.url} css={styles.button}>
          {buttonText[lang]}
        </Button>
      </div>
    </section>
  );
};

export default WhoWeAre;
