import * as React from "react";
import Button from "../../../ui-library/button/button";
import { grid } from "../../../ui-library/design-tokens/grid";
import { Device } from "../../../ui-library/design-tokens/media-queries";
import Row from "../../../ui-library/column-system/row";

interface LinkItem {
  label: string;
  url: string;
}

interface LinkButtonGroupProps {
  link: LinkItem;
}

const LinkButtonGroup: React.FC<LinkButtonGroupProps> = ({ link }) => {
  return (
    <div css={{ display: "flex", justifyContent: "center" }}>
      <Button
        to={link.url}
        target="_blank"
        css={{
          width: "100%",
          [Device.DesktopTablet]: {
            maxWidth: grid(34.5),
          },
        }}
      >
        {link.label}
      </Button>
    </div>
  );
};

export default LinkButtonGroup;
