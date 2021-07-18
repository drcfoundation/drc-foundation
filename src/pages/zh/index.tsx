import * as React from "react";
import { NavTab } from "../../components/layout/header/header";

import Layout from "../../components/layout/layout";
import Home from "../../components/pages/home/home";
import SEO from "../../components/seo";

const IndexPage: React.FC = () => {
  return (
    <Layout activeTab={NavTab.Home} lang="zh">
      <SEO
        title="首页"
        description="DRC基金会是一个非官方的，社区主导的组织，致力于支持DRC生态系统的增长和发展"
        lang="zh"
      />

      <Home lang="zh" />
    </Layout>
  );
};

export default IndexPage;
