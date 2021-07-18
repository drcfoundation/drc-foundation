import { scroller } from "react-scroll";
import { routingHistory } from "./history";

export const anchorToElement = (elementId: string) => {
  scroller.scrollTo(elementId, {
    smooth: true,
    offset: -50,
  });
};

export const anchorToHash = () => {
  if (routingHistory) {
    const hash = routingHistory.location.hash;

    if (hash.startsWith("#")) {
      const element = hash.slice(1);
      anchorToElement(element);
    }
  }
};
