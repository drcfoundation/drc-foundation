import * as React from "react";
import { Theme } from "../../../../../types/theme";
import { grid } from "../../../ui-library/design-tokens/grid";
import Heading from "../../../ui-library/text/heading";

const RoleOfCCs: React.FC = () => {
  return (
    <div>
      <Heading component="h2" textAlign="center" margin={{ bottom: grid(3) }}>
        The Role of DRC Community Core Contributors (CC)
      </Heading>

      <div css={(theme: Theme) => ({ color: theme.text })}>
        DRC Community Core Contributors serve as active advocates, ambassadors
        and contributors for the DRC community and fully engage in identifying
        partnerships and resources necessary for the DRC to advance its mission.
        DRC Community Core Contributors are responsible for the strategic
        planning, ongoing communication with the DRC community, and enhancing
        the DRC’s public image and reputational standing. They participate in
        the regular Telegram catchups to discuss the current state of the DRC
        ecosystem, DRC community concerns, and possible improvements. DRC
        Community Core Contributors are authorized to collectively manage the
        DRC Foundation Fund with the condition that all outgoing payments are
        made with the purpose of supporting DRC ecosystem growth and
        development.
      </div>
    </div>
  );
};

export default RoleOfCCs;
