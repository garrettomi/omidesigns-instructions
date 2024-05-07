import homeImage from "../assets/camera.jpg"
import BlockImage from "../components/BlockImage"
import Title from "../components/Title"
import BorderTextBlock from "../components/BorderTextBlock"
import GridContainer from "../components/GridContainer"
import LinkList from "../components/LinkList"

import Navbar from "../components/Navbar/Navbar"


function Home() {

  const cards = [
    { title: "はじめに | Canva登録・テンプレートの受け取り方", url: "/はじめに" },
    { title: "【PC】基本操作", url: "/PC" },
    { title: "【iPhone】基本操作", url: "/iPhone" },
    { title: "音楽について", url: "/音楽について" }
  ];

  return (
    <>
        <BlockImage src={homeImage} alt="A polaroid camera on a wedding table" />
          {/* <Title text="ムービーの作り方" /> */}
          <BorderTextBlock firstSentence="ムービーテンプレートをご購入いただきありがとうございました" secondSentence="お困りの点はお気軽にお問い合わせください" />
        <section className="homepage-gutters">
          <GridContainer cards={cards} />
          <LinkList />
        </section>
    </>
  );
};

export default Home;
