import * as React from "react";
import { NavTab } from "../components/layout/header/header";

import Layout from "../components/layout/layout";
import Fund from "../components/pages/fund/fund";
import SEO from "../components/seo";

const FundPage: React.FC = () => {
  return (
    <Layout activeTab={NavTab.Fund}>
      <SEO
        title="DRC Fund"
        description="The Multisig DRC Foundation Fund wallet. Total available funds and previous transactions are available for all to see - transparency is the key."
      />

      <Fund />
    </Layout>
  );
};

export default FundPage;
