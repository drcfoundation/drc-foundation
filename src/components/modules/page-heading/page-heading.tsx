import * as React from "react";
import styles from "./page-heading.styles";

const PageHeading: React.FC = () => {
  return (
    <div css={styles.root}>
      <h1 css={styles.heading}>DRC FOUNDATION</h1>
      <div css={styles.subHeading}>DIGITAL RESERVE CURRENCY</div>
    </div>
  );
};

export default PageHeading;
