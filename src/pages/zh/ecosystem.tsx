import * as React from "react";
import { NavTab } from "../../components/layout/header/header";

import Layout from "../../components/layout/layout";
import Ecosystem from "../../components/pages/ecosystem/ecosystem";
import SEO from "../../components/seo";

const EcosystemPage: React.FC = () => {
  return (
    <Layout activeTab={NavTab.Ecosystem} lang="zh">
      <SEO
        title="管理"
        description="DRC基金会和基金如何适应更广泛的DRC生态系统。参看管理和建议详细说明。"
        lang="zh"
      />

      <Ecosystem lang="zh" />
    </Layout>
  );
};

export default EcosystemPage;
