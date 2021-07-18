import * as React from "react";
import { NavTab } from "../../components/layout/header/header";
import Layout from "../../components/layout/layout";
import Philosophy from "../../components/pages/philosophy/philosophy";
import SEO from "../../components/seo";

const PhilosophyPage: React.FC = () => {
  return (
    <Layout activeTab={NavTab.Philosophy} lang="zh">
      <SEO
        title="理念"
        description="建立DRC基金会的理由；关于我们，我们正在努力实现什么。"
        lang="zh"
      />

      <Philosophy lang="zh" />
    </Layout>
  );
};

export default PhilosophyPage;
