import * as React from "react";
import { NavTab } from "../../components/layout/header/header";

import Layout from "../../components/layout/layout";
import Fund from "../../components/pages/fund/fund";
import SEO from "../../components/seo";

const FundPage: React.FC = () => {
  return (
    <Layout activeTab={NavTab.Fund} lang="zh">
      <SEO
        title="基金"
        description="DRC基金会使用多签名钱包。资金总额和每一笔交易都会对所有人保持绝对透明，这是基金会运营的基础原则。"
        lang="zh"
      />

      <Fund lang="zh" />
    </Layout>
  );
};

export default FundPage;
