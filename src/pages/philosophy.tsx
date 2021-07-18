import * as React from "react";
import { NavTab } from "../components/layout/header/header";

import Layout from "../components/layout/layout";
import Philosophy from "../components/pages/philosophy/philosophy";
import SEO from "../components/seo";

const PhilosophyPage: React.FC = () => {
  return (
    <Layout activeTab={NavTab.Philosophy}>
      <SEO
        title="Philosophy"
        description="The rationale for creating DRC Foundation; who we are and what we are trying to achieve."
      />

      <Philosophy />
    </Layout>
  );
};

export default PhilosophyPage;
