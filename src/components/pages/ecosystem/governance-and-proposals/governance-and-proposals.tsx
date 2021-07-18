import * as React from "react";
import { Language } from "../../../../../types/language";
import { GOVERNANCE_AND_PROPOSALS } from "../../../../data/governance-and-proposals";
import { communityLinks } from "../../../../data/resource-links";
import Button from "../../../ui-library/button/button";
import { grid } from "../../../ui-library/design-tokens/grid";
import { Device } from "../../../ui-library/design-tokens/media-queries";
import Heading from "../../../ui-library/text/heading";
import styles from "./governance-and-proposals.styles";

interface GovernanceAndProposalsProps {
  lang?: Language;
}

const GovernanceAndProposals: React.FC<GovernanceAndProposalsProps> = ({
  lang = "en",
}) => {
  const data = GOVERNANCE_AND_PROPOSALS[lang];

  return (
    <div>
      <Heading component="h2" textAlign="center" margin={{ bottom: grid(3) }}>
        {data.title}
      </Heading>

      <div
        css={{
          marginBottom: grid(4),
          [Device.DesktopTablet]: { marginBottom: grid(5) },
        }}
      >
        {data.contents.map((content) => (
          <p
            key={content.slice(0, 30)}
            css={styles.paragraph}
            dangerouslySetInnerHTML={{ __html: content }}
          />
        ))}
      </div>

      <div css={{ display: "flex", justifyContent: "center" }}>
        <Button
          to={communityLinks.snapshot.url}
          target="_blank"
          css={{
            width: "100%",
            [Device.DesktopTablet]: {
              maxWidth: grid(33.5),
            },
          }}
        >
          VOTE ON PROPOSALS
        </Button>
      </div>
    </div>
  );
};

export default GovernanceAndProposals;
