import { Language } from "../../types/language";

interface WhoWeAre {
  title: string;
  contents: string[];
}

export const WHO_WE_ARE: Record<Language, WhoWeAre> = {
  en: {
    title: "Who we are",
    contents: [
      `The DRC Foundation is a non-official, community-led organization dedicated to supporting the growth and development of the DRC ecosystem. The DRC Foundation role is not to control or manage DRC network, as it is fully decentralized. Our mission is to advocate for DRC ecosystem and to facilitate its global adoption and success. <a href="#roadmap">See the DRC Roadmap</a>.`,
    ],
  },
  zh: {
    title: "关于我们",
    contents: [
      "DRC基金会是一个由社区主导的非官方组织，我们致力于支持DRC生态系统的增长和发展。DRC基金会的职责并不是要去控制或管理DRC网络，因为这是一个完全去中心化的组织。我们的使命是倡导DRC生态系统，并促进其的全球化采用和成功。",
    ],
  },
};
