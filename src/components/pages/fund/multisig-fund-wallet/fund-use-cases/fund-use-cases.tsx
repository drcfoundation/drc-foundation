import * as React from "react";
import { Language } from "../../../../../../types/language";
import { grid } from "../../../../ui-library/design-tokens/grid";
import Heading from "../../../../ui-library/text/heading";
import styles from "./fund-use-cases.styles";

const heading: Record<Language, string> = {
  en: "Where will the donated funds be used?",
  zh: "DRC基金使用在哪里？",
};

const description: Record<Language, string> = {
  en: "Prioritized initiatives to support the growth of the DRC ecosystem",
  zh: "基金会优先使用在以下有助于DRC发展的项目上",
};

const list: Record<Language, string[]> = {
  en: [
    "DR Platform development",
    "DR Smart Contract security audit",
    "Outreach initiatives",
    "Centralized Exchange listings",
    "Decentralized Exchange listings",
  ],
  zh: [
    "DR平台项目开发",
    "DR智能合约审核",
    "市场开发",
    "中心化交易所",
    "去中心化交易所",
  ],
};

interface FundUseCasesProps {
  lang?: Language;
}

const FundUseCases: React.FC<FundUseCasesProps> = ({ lang = "en" }) => {
  return (
    <div>
      <Heading component="h2" textAlign="center" margin={{ bottom: grid(2) }}>
        {heading[lang]}
      </Heading>

      <div css={styles.description}>{description[lang]}</div>

      <div css={styles.listContainer}>
        <ul css={styles.list}>
          {list[lang].map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FundUseCases;
