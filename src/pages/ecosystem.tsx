import * as React from "react";
import { NavTab } from "../components/layout/header/header";

import Layout from "../components/layout/layout";
import Ecosystem from "../components/pages/ecosystem/ecosystem";
import SEO from "../components/seo";

const EcosystemPage: React.FC = () => {
  return (
    <Layout activeTab={NavTab.Ecosystem}>
      <SEO
        title="DRC Ecosystem"
        description="How the DRC Foundation and Fund fits in to the wider DRC ecosystem. Governance and Proposals detailed here."
      />

      <Ecosystem />
    </Layout>
  );
};

export default EcosystemPage;
