import * as React from "react";
import { Language } from "../../../../types/language";
import { Theme } from "../../../../types/theme";
import { PHILOSOPHY } from "../../../data/philosophy";
import PageHeading from "../../modules/page-heading/page-heading";
import TopLogo from "../../modules/top-logo/top-logo";
import Container from "../../ui-library/container/container";
import { grid } from "../../ui-library/design-tokens/grid";
import Heading from "../../ui-library/text/heading";

interface PhilosophyProps {
  lang?: Language;
}

const Philosophy: React.FC<PhilosophyProps> = ({ lang = "en" }) => {
  const data = PHILOSOPHY[lang];

  return (
    <Container>
      <PageHeading />

      <TopLogo />

      <Heading component="h1" textAlign="center" margin={{ bottom: grid(3) }}>
        {data.title}
      </Heading>

      <div
        css={(theme: Theme) => ({
          color: theme.text,
          p: { marginBottom: grid(2) },
        })}
      >
        {data.contents.map((content) => (
          <p
            key={content.slice(0, 30)}
            dangerouslySetInnerHTML={{ __html: content }}
          />
        ))}
      </div>
    </Container>
  );
};

export default Philosophy;
